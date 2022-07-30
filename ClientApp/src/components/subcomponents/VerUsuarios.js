
import { useState, useEffect, useCallback } from "react";
import { getUsuarios, putUsuario, getUsuario } from "../../api/usuario";

const VerUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const [previousSelection, setPreviousSelection] = useState([]);

    const roles = [1,2,3,4,5]

    const fetchUsuarios = useCallback(async () => {
        let usuarios = await getUsuarios().then(response => response.data); 
        setUsuarios(usuarios);
    }, []); 

    const fetchUsuario = (id) => {
        let usuario = getUsuario(id);
        console.log("dasdasd:::", usuario)
        return usuario;
    }

    const previous = (e) => {
        console.log("Previous selection::", e.target.value);
        setPreviousSelection(e.target.value);
    }

    const put = (e) => {
        e.preventDefault();

        if (!window.confirm(`Desea actualizar el rol del usuario a ${e.target.value}?`)){
            e.target.value = previousSelection;
            return; 
        };
        
        let usuario = fetchUsuario(e.target.dataset.id);
        console.log(usuario);
    }
      
    useEffect(() => {
        fetchUsuarios();
    }, [fetchUsuarios])

    const buildrows = usuarios.map(user => 
        {
            if (user.rol === null){
                return (
                    <tr> <td><select data-id={user.usuario1} onClick={previous} onChange={put} id="inputState" className="text-center form-select">
                        <option selected value="N/A">Seleccione un rol</option>
                        {roles.map(rol => <option>{rol}</option>)}
                    </select></td> <td className="text-center">{user.usuario1}</td> </tr>
                );
            } else {
                return (
                    <tr> <td><select data-id={user.usuario1} onClick={previous} onChange={put} id="inputState" className="text-center form-select">
                    {roles.map(rol => {
                        if (rol === user.rol) {
                            return <option selected>{rol}</option>
                        } else {
                            return <option>{rol}</option>
                        }
                    })}
            </select></td> <td className="text-center">{user.usuario1}</td> </tr>
                );
            }
            
        });
    return (
        <div className='d-flex justify-content-center'>
            <table className="table table-striped">
                <thead className="table-light">
                    <tr>
                        <th className="w-75">Rol</th>
                        <th>Nombre Completo</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(usuarios)}
                    {buildrows}
                </tbody>
            </table>
        </div>
    );
}

export default VerUsuarios;
