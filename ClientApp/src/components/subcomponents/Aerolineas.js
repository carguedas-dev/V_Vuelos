import { useState, useEffect, useCallback } from "react";
import CrearAerolineas from "./CrearAerolineas";
import { getAerolineas, postAerolinea, deleteAerolinea } from "../../api/aerolineas";
import { getPaises } from "../../api/pais";

const Aerolineas = () => {

    const [aerolineas, setAerolineas] = useState([]);
    const [paises, setPaises] = useState([]);

    const fetchAerolineas = useCallback(async () => {
        let aerolineas = await getAerolineas();
        setAerolineas(aerolineas);
    }, []);

    const fetchPaises = async () => {
        let paises = await getPaises();
        setPaises(paises)
    };

    const deteleAerolinea = e => {
        deleteAerolinea(e.target.value);
    }

    const postAero = (nombre, imagen, pais) => {
        postAerolinea(nombre, imagen, pais);
    }

    useEffect(() => {
        fetchAerolineas();
        fetchPaises();
    }, [fetchAerolineas]);

    const buildrows = aerolineas.map(aer =>
        <tr key={aer.id}>
            <td>{aer.id}</td>
            <td>{aer.nombre}</td>
            <td>{aer.Imagen}</td>
            <td>{aer.pais}</td>
            <th><button
                className="btn btn-danger"
                value={aer.id}
                onClick={deteleAerolinea}>Eliminar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Airline Code</th>
                        <th>Airline</th>
                        <th>Logo</th>
                        <th>País</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearAerolineas onPost={postAero} paises={paises} />
        </div>
    );
}

export default Aerolineas;
