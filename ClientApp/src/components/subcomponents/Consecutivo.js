import { getConsecutivos, putConsecutivo } from "../../api/consecutivos";
import { useState, useEffect } from "react";
import EditarConsecutivo from "./EditarConsecutivo";

const Consecutivo = () => {

    const [consecutivos, setConsecutivos] = useState([]);
    const [currentConse, setCurrentConse] = useState({});

    const getConsecutives = async () => {
        let consecutives = await getConsecutivos();
        setConsecutivos(consecutives);
    }

    const editConsecutive = e => {
        let id = e.target.value;
        const consecutive = consecutivos.find(c => c.id === +id)
        return setCurrentConse(consecutive);
    }

    const putConsecutive = c => {
        putConsecutivo(
            c.id,
            c.valor,
            c.descripcion,
            c.prefijo,
            c.rango_inicial,
            c.rango_final);
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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Consecutivo</th>
                        <th>Prefijo</th>
                        <th>Rango Inicial</th>
                        <th>Rango Final</th>
                        <th>Editar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <EditarConsecutivo consec={currentConse} editarConsec={putConsecutive} />
        </div>
    );
}

export default Consecutivo;
