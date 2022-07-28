import React, { useState, useEffect } from 'react';
import CrearPuertas from "./CrearPuertas";
import PuertasDB from '../../DB/PuertasDB';

const Puertas = () => {

    const { getPuertas} = PuertasDB();
    const [puertas, setPuertas] = useState([]);

    useEffect(() => {
        listPuertas();
    }, puertas)
  
      
    // Funcion para realizar llamado al metodo GET (listado) de puertas de la API
    const listPuertas = async () => {
        let response = await getPuertas();
        if(response){
            if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            setPuertas(response.data);
            }else{
            console.log("ocurrio un error");
            }
        }else{
            console.log("ocurrio un error");
        }
    }

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
            { <button onClick={() => listPuertas()}>Actualizacion de datos</button> }
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
            <CrearPuertas 
                listPuertas={listPuertas}
            />
        </div>
    );
}

export default Puertas;
