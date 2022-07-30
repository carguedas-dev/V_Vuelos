
import { useState, useEffect, useCallback } from "react";
import { getUsuarios, putUsuario } from "../../api/usuario";
import { getRoles } from "../../api/roles";

const VerUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [roles, setRoles] = useState([]);

    const getUsers = async () => {
        let users = await getUsuarios();
        setUsuarios(users);
    }

    const getRols = async () => {
        let roles = await getRoles();
        setRoles(roles);
    }

    const onSelected = async e => {
        const targetUser = e.target.name;
        const newRole = e.target.value;
        let usuario = usuarios.find(u => u.usuario1 === targetUser);
        usuario.rol = newRole;
        let request = await putUsuario(usuario);
        if (request.status === 202) {
            getUsers();
            alert(`Rol de usuario ${targetUser} actualizado correctamente.`);
        }

    }

    useEffect(() => {
        getUsers();
        getRols();
    }, []);

    const buildRows = usuarios.map(u =>
        <tr key={u.usuario1}>
            <td>{u.usuario1}</td>
            <td>{u.correo}</td>
            <td><select
                name={u.usuario1}
                id={u.usuario1}
                value={u.rol}
                onChange={onSelected}>
                {roles.map(rol => <option key={rol.id} value={rol.id}>{rol.descripcion}</option>)}
            </select></td>
        </tr>
    )

    return (
        <div className='d-flex justify-content-center'>
            <table className="table table-striped">
                <thead className="table-light">
                    <tr>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {buildRows}
                </tbody>
            </table>
        </div>
    );
}

export default VerUsuarios;
