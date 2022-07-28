//import { getCrearUsuarios } from "../../api/crearusuario";

const VerUsuarios = () => {


    const buildrows = users.map(user => <tr> <td><select id="inputState" className="form-select">
        <option selected>{user.rol}</option>
        <option>Administrador</option>
        <option>Seguridad</option>
        <option>Mantenimiento</option>
        <option>Consultas</option>
    </select></td> <td>{user.nombre}</td> </tr>);



    return (
        <div className='d-flex justify-content-center'>
            <table className="table table-striped">
                <thead className="table-light">
                    <tr>
                        <th>Rol</th>
                        <th>Nombre Completo</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
        </div>
    );
}

export default VerUsuarios;
