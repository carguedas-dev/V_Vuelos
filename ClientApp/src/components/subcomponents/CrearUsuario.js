
import { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import { postUsuario, getUsuario } from "../../api/usuario";
import { getPreguntas } from "../../api/preguntasSeguridad"; 


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
        setUsuario(usuario); 
    }, [])

    const validate = (id) => {

        fetchUsuario(id);
        if (usuario!=null){
            alert("Usuario en uso.")
            return false;
        }

        if (preguntaSeguridadRef.current.value === "N/A"){
            alert("Debe seleccionar una pregunta de seguridad.");
            return false;
        }

        if (usuarioRef.current.value === "" ||
            correoRef.current.value === "" ||
            contrasenaRef.current.value === "" ||
            confirmacionContrasenaRef.current.value === "" ||
            preguntaSeguridadRef.current.value === "" ||
            respuestaSeguridadRef.current.value === "")
        {
            alert("Debe rellenar todos los campos.")
            return false;
        }

        if (contrasenaRef.current.value !== confirmacionContrasenaRef.current.value){
            alert("Los campos de 'Contraseña' y 'Confirmar Contraseña' no son iguales.")
            return false;
        }
    }

    const post = (e) => {
        e.preventDefault();

        if (validate(usuarioRef.current.value)){
            return;
        }
        let usuario = {
            usuario : usuarioRef.current.value,
            contrasena : contrasenaRef.current.value, 
            correo : correoRef.current.value, 
            rol : null, 
            preguntaSeguridad : preguntaSeguridadRef.current.value, 
            respuestaSeguridad: respuestaSeguridadRef.current.value
        }
        postUsuario(usuario);
    }

    useEffect(() => {
        fetchPreguntas();
    }, [fetchPreguntas])

    return (

        <div className='d-flex justify-content-center'>
            <form onSubmit={post}>
                <div className="row mb-3">
                    <label for="username" className="col-sm-2 col-form-label">Usuario</label>
                    <div className="col-sm-10">
                        <input ref={usuarioRef} type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
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
                        <label for="inputState" className="form-label">Pregunta de Seguridad</label>
                        <select ref={preguntaSeguridadRef} id="inputState" className="form-select">
                            <option selected value="N/A">Seleccione una pregunta</option>
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
