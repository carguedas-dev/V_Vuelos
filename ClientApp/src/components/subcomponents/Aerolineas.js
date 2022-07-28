import { useState, useEffect, useCallback } from "react";
import CrearAerolineas from "./CrearAerolineas";
import { getAerolineas, getAerolinea, postAerolinea } from "../../api/aerolineas";

const Aerolineas = () => {

    const [aerolineas, setAerolineas] = useState([]);

    const fetchAerolineas = useCallback(async () => {
        let aerolineas = await getAerolineas();
        setAerolineas(aerolineas);
        // let postAER = postAerolinea('Test Airline', '00x0', 'PA-0');
        // console.log(postAER)
    }, []);

    useEffect(() => {
        fetchAerolineas();
    }, [fetchAerolineas]);

    const buildrows = aerolineas.map(aer =>
        <tr key={aer.id}>
            <td>{aer.id}</td>
            <td>{aer.nombre}</td>
            <td>{aer.Imagen}</td>
            <td>{aer.pais}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
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
            <CrearAerolineas />
        </div>
    );
}

export default Aerolineas;
