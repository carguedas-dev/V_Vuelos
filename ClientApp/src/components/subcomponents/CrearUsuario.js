import { postUsuario } from "../../api/crearusuario";
import { getPreguntas } from "../../api/preguntaseguridad";

const CrearUsuario = () => {
    return (

        <div className='d-flex justify-content-center'>
            <form onSubmit={postUsuario}>
                <div className="row mb-3">
                    <label for="username" className="col-sm-2 col-form-label">Usuario</label>
                    <div className="col-sm-10">
                        <input type="text" ref={postUsuario.usuario1} className="form-control" id="username" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" ref={postUsuario.correo} className="form-control" id="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" ref={postUsuario.contrasena} className="form-control" placeholder="Password" />
                    </div>
                    <div className="col">
                        <input type="text" ref={postUsuario.contrasena} className="form-control" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label for="inputState" className="form-label">Pregunta de Seguridad</label>
                        <select id="inputState" className="form-select">
                            <option getPreguntas></option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" ref={postUsuario.respuesta_seguridad} className="form-control" id="securityAnswer" placeholder='Respuesta de Seguridad' />
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
