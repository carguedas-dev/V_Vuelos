
const CrearUsuario = () => {
    return (

        <div className='d-flex justify-content-center'>
            <form action=''>
                <div className="row mb-3">
                    <label for="username" className="col-sm-2 col-form-label">Usuario</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label for="inputState" className="form-label">Pregunta de Seguridad</label>
                        <select id="inputState" className="form-select">
                            <option selected>Nombre de la primera mascota</option>
                            <option>Nombre del barrio donde crecio</option>
                            <option>Mejor amigo de la infancia</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" id="securityAnswer" placeholder='Respuesta de Seguridad' />
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
