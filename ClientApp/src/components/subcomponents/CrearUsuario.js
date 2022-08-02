
import { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import { postUsuario, getUsuario } from "../../api/usuario";
import { getPreguntas } from "../../api/preguntasSeguridad"; 
import { postBitacora } from "../../api/bitacoraEventos"


const CrearUsuario = () => {

    const usuarioRef = useRef();
    const correoRef = useRef();
    const contrasenaRef = useRef();
    const confirmacionContrasenaRef = useRef();
    const preguntaSeguridadRef = useRef(); 
    const respuestaSeguridadRef = useRef();


    const [preguntas, setPreguntas] = useState([]);
    const [usuario, setUsuario] = useState([]);

    const fetchPreguntas = useCallback(async () => {
        let preguntas = await getPreguntas(); 
        setPreguntas(preguntas);
    }, []);

    const fetchUsuario = useCallback(async (id) => {
        let usuario = await getUsuario(id);
        return usuario;
    }, [])

    const validate = () => {

        if (usuarioRef.current.value === "" ||
            correoRef.current.value === "" ||
            contrasenaRef.current.value === "" ||
            confirmacionContrasenaRef.current.value === "" ||
            preguntaSeguridadRef.current.value === "N/A" ||
            respuestaSeguridadRef.current.value === "")
        {
            alert("Debe rellenar todos los campos.")
            return false;
        }

        if (preguntaSeguridadRef.current.value === "N/A"){
            alert("Debe seleccionar una pregunta de seguridad.");
            return false;
        }

        if (contrasenaRef.current.value !== confirmacionContrasenaRef.current.value){
            alert("Los campos de 'Contraseña' y 'Confirmar Contraseña' no son iguales.")
            return false;
        }

        return true;
    }

    const post = async (e) => {
        e.preventDefault();

        if (!validate()){
            console.log("Retornando");
            return;
        }

        try {
            await fetchUsuario(usuarioRef.current.value);
            alert("Usuario en uso. Favor elegir otro.");
            return;
        } catch (error) {
            if (error.response.status === 404) {
                console.log("Dentro del error.") 
            }
        }
        console.log("Salí del error");
        
        
        let usuario = {
            usuario : usuarioRef.current.value,
            contrasena : contrasenaRef.current.value, 
            correo : correoRef.current.value, 
            rol : null, 
            preguntaSeguridad : preguntaSeguridadRef.current.value, 
            respuestaSeguridad: respuestaSeguridadRef.current.value
        }

        let request = await postUsuario(usuario);
        console.log(request);

        if (request.status === 201){
            alert(`Usuario ${usuarioRef.current.value} adicionado exitosamente.`);

            let bitacora = {
                registro_detalle : usuarioRef.current.value,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion : `Se agrega usuario bajo identificación ${usuarioRef.current.value} a base de datos.`
            }

            console.log(bitacora);

            let request = await postBitacora(bitacora);
        }
    }

    useEffect(() => {
        fetchPreguntas();
    }, [fetchPreguntas])

    return (

        <div className='d-flex justify-content-center mt-5'>
            <form onSubmit={post}>
                <div className="row mb-3">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Usuario</label>
                    <div className="col-sm-10">
                        <input ref={usuarioRef} type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input ref={correoRef} type="email" className="form-control" id="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input ref={contrasenaRef} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col">
                        <input ref={confirmacionContrasenaRef} type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="inputState" className="form-label">Pregunta de Seguridad</label>
                        <select ref={preguntaSeguridadRef} id="inputState" className="form-select">
                            <option defaultValue value="N/A">Seleccione una pregunta</option>
                            {preguntas.map(pregunta => <option  key={pregunta.id} value={pregunta.id}>{pregunta.descripcion}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input ref={respuestaSeguridadRef} type="text" className="form-control" id="securityAnswer" placeholder='Respuesta de Seguridad' />
                    </div>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Crear Usuario</button>
                </div>
            </form>
        </div>
    );
}

export default CrearUsuario;
