import { useState, useEffect, useCallback } from "react";
import CrearPuertas from "./CrearPuertas";
import { getPuertas, deletePuerta, postPuerta } from "../../api/puertas";


const Puertas = () => {

    const [puertas, setPuertas] = useState([]);

    const getGates = async () => {
        let paises = await getPuertas();
        setPuertas(paises);
    }

    const deleteGate = async e => {
        const id = e.target.value;
        let request = await deletePuerta(id);
        if (request.status === 200)
        getGates();
    }

    const addGate = async (nombre, estado) => {
        let request = await postPuerta(nombre, estado);
        if (request.status === 201)
        getGates();
    }

    useEffect(() => {
        getGates();
    }, []);


    const buildrows = puertas.map(gate =>
        <tr key={gate.id}>
            <td>{gate.id}</td>
            <td>{gate.numero}</td>
            <td>{gate.estado}</td>
            <th><button
                className="btn btn-danger"
                value={gate.id}
                onClick={deleteGate}
            >Eliminar</button></th>
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
            <CrearPuertas onPost={addGate} />
        </div>
    );
}

export default Puertas;
