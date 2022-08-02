
import { useState, useEffect, useCallback } from "react";
import { getUsuarios, putUsuario } from "../../api/usuario";
import { getRoles } from "../../api/roles";
import { postBitacora } from "../../api/bitacoraEventos"

import '../../assets/styles/tables.css'

const VerUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [roles, setRoles] = useState([]);

    const getUsers = async () => {
        let users = await getUsuarios();
        setUsuarios(users);
    }

    const getRols = async () => {
        let roles = await getRoles();
        roles = [...roles, { id: 0, descripcion: 'Not Defined' }];
        setRoles(roles);
    }

    for (const usuario of usuarios) {
        if (!usuario.rol) console.log(usuario.usuario1);
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
            console.log(roles[newRole - 1].descripcion)

            let bitacora = {
                registro_detalle: targetUser,
                usuario: localStorage.getItem('idUsuario'),
                operacion: 2,
                descripcion: `Se modifica el rol del usuario ${targetUser} a ${roles[newRole - 1].descripcion}.`
            }

            let request = await postBitacora(bitacora);
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
                value={u.rol ? u.rol : 0}
                onChange={onSelected}>
                {roles.map(rol => <option key={rol.id} value={rol.id}>{rol.descripcion}</option>)}
            </select></td>
        </tr>
    )

    return (
        <div style={{ minHeight: '70vh', maxHeight: '70vh' }} className='d-flex justify-content-center table-responsive scrollableDivTall'>
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
