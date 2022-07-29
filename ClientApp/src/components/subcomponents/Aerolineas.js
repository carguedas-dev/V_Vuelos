import { useState, useEffect, useCallback } from "react";
import CrearAerolineas from "./CrearAerolineas";
import { getAerolineas, postAerolinea, deleteAerolinea } from "../../api/aerolineas";
import { getPaises } from "../../api/pais";

const Aerolineas = () => {

    const [aerolineas, setAerolineas] = useState([]);
    const [paises, setPaises] = useState([]);

    const getAirlines = async () => {
        let aerolineas = await getAerolineas();
        setAerolineas(aerolineas);
    }

    const getCountries = async () => {
        let paises = await getPaises();
        setPaises(paises);
    }

    const deleteAirline = async e => {
        const id = e.target.value;
        let request = await deleteAerolinea(id);
        if (request.status === 200)
            getAirlines();
    }

    const addAirline = async (nombre, imagen, pais) => {
        let request = await postAerolinea(nombre, '00x0', pais);
        if (request.status === 201)
            getAirlines();
    }

    useEffect(() => {
        getAirlines();
        getCountries();
    }, []);

    const buildrows = aerolineas.map(aer =>
        <tr key={aer.id}>
            <td>{aer.id}</td>
            <td>{aer.nombre}</td>
            <td>{aer.Imagen}</td>
            <td>{aer.pais}</td>
            <th><button
                className="btn btn-danger"
                value={aer.id}
                onClick={deleteAirline}>Eliminar</button></th>
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
            <CrearAerolineas onPost={addAirline} paises={paises} />
        </div>
    );
}

export default Aerolineas;
