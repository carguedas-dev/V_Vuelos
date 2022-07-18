import CrearPuertas from "./CrearPuertas";

import React from 'react';

const Puertas = () => {
    //Simula GET from DB
    const puertas = [
        {
            number: 456,
            codigo: 506,
            detalle: 'Abierta',
            tipo: 'Entrada'
        },
        {
            number: 231,
            codigo: 204,
            detalle: 'Cerrada',
            tipo: 'Salida'
        },
        {
            number: 145,
            codigo: 669,
            detalle: 'Abierta',
            tipo: 'Salida'
        },
    ]

    const buildrows = puertas.map(gate =>
        <tr>
            <td>{gate.codigo}</td>
            <td>{gate.number}</td>
            <td>{gate.detalle}</td>
            <td>{gate.tipo}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Codigo Puerta</th>
                        <th>Numero Puerta</th>
                        <th>Detalle</th>
                        <th>Tipo</th>
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
