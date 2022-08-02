import { getConsecutivos, putConsecutivo, postConsecutivo } from "../../api/consecutivos";
import { useState, useEffect, useRef } from "react";
import { postBitacora } from "../../api/bitacoraEventos"
import EditarConsecutivo from "./EditarConsecutivo";
import '../../assets/styles/tables.css'

const Consecutivo = () => {

    const childRef = useRef();

    const [consecutivos, setConsecutivos] = useState([]);

    const getConsecutives = async () => {
        let consecutives = await getConsecutivos();
        setConsecutivos(consecutives);
    }

    const editConsecutive = e => {
        let id = e.target.value;
        const consecutive = consecutivos.find(c => c.id === +id)
        childRef.current.setCurrentConsecutive(consecutive);
    }

    const manageConsecutive = cons => {
        let existingConsecutive = consecutivos.find(c => c.id === cons.id);
        if (existingConsecutive!=null){
            putConsecutive(cons);
        } else {
            postConsecutive(cons);
        }
    }

    const postConsecutive = async c => {

        console.log(c)

        let request = await postConsecutivo(c);
        if (request.status === 201){
            console.log(request);
           alert(`Valor consecutivo '${c.descripcion}' ha sido agregado exitosamente.`);
           childRef.current.clearSpaces();
           getConsecutives();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion : 
                
                `
                Se agrega un nuevo consecutivo con identificación ${request.data.id}.\n
                Datos introducidos: -> Id: ${request.data.id} -> Descripción: ${c.descripcion}, -> Prefijo: ${c.prefijo}, -> Rango Inicial: ${c.rango_inicial},
                -> Rango Final: ${c.rango_final}
                `
            }

            let requestBitacora = await postBitacora(bitacora);
        }
    }

    const putConsecutive = async c => {
        let request = await putConsecutivo(c);
            if (request.status===200){
                alert(`Valor consecutivo '${c.descripcion}' ha sido exitosamente actualizado.`);
                getConsecutives();

                let bitacora = {
                    registro_detalle : request.data.id,
                    usuario : localStorage.getItem('idUsuario'),
                    operacion : 2,
                    descripcion : 
                    `
                    Se modifica el consecutivo con identificación ${request.data.id}.\n
                    Nuevos valores: -> Descripción: ${c.descripcion}, -> Prefijo: ${c.prefijo}, -> Rango Inicial: ${c.rango_inicial},
                    -> Rango Final: ${c.rango_final}
                    `
                }
    
                let requestBitacora = await postBitacora(bitacora);
            }
    }

    useEffect(() => {
        getConsecutives();
    }, []);

    const buildrows = consecutivos.map(conse =>
        <tr key={conse.id}>
            <td>{conse.descripcion}</td>
            <td>{conse.valor}</td>
            <td>{conse.prefijo}</td>
            <td>{conse.rango_inicial || 'Not Specified'}</td>
            <td>{conse.rango_final || 'Not Specified'}</td>
            <th><button
                className="btn btn-warning"
                value={conse.id}
                onClick={editConsecutive}
            >Editar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className="table-responsive scrollableDivSmall">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>Descripcion</th>
                            <th>Consecutivo</th>
                            <th>Prefijo</th>
                            <th>Rango Inicial</th>
                            <th>Rango Final</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildrows}
                    </tbody>
                </table>
            </div>
            <EditarConsecutivo ref={childRef} editarConsec={manageConsecutive} />
        </div>
    );
}

export default Consecutivo;
