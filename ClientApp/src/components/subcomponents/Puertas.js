import { useState, useEffect, useCallback } from "react";
import CrearPuertas from "./CrearPuertas";
import { getPuertas, getPuerta, putPuerta, deletePuerta } from "../../api/puertas";


const Puertas = () => {

    const [puertas, setPuertas] = useState([]);

    const fetchPuertas = useCallback(async () => {
        let puertas = await getPuertas();
        setPuertas(puertas);
    }, []);

    useEffect(() => {
        fetchPuertas();
    }, [fetchPuertas]);


    const buildrows = puertas.map(gate =>
        <tr key={gate.id}>
            <td>{gate.id}</td>
            <td>{gate.numero}</td>
            <td>{gate.estado}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Codigo Puerta</th>
                        <th>Numero Puerta</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearPuertas />
        </div>
    );
}

export default Puertas;
