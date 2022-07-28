import ConsecutivosDB from "../../DB/ConsecutivosDB";
import AxiosConsecutivos from "./AxiosConsecutivo";
import React, { useState, useEffect } from 'react';

const Consecutivo = () => {

    const { getConsecutivos} = ConsecutivosDB();
    const [consecutivos, setConsecutivos] = useState([]);

    useEffect(() => {
        listConsecutivos();
    }, consecutivos)

    // Funcion para realizar llamado al metodo GET (listado) de consecutivos de la API
    const listConsecutivos = async () => {
        let response = await getConsecutivos();
        if(response){
            if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            setConsecutivos(response.data);
            }else{
            console.log("ocurrio un error");
            }
        }else{
            console.log("ocurrio un error");
        }
    }

    const buildrows = consecutivos.map(consecutivo =>
        <tr>
            <td>{consecutivo.codigo}</td>
            <td>{consecutivo.descripcion}</td>
            <td>{consecutivo.consecutivo}</td>
            <th><button className="btn btn-warning">Editar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            { <button onClick={() => listConsecutivos()}>Actualizacion de datos</button> }
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Consecutivo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <AxiosConsecutivos 
                listConsecutivos={listConsecutivos}
            />
        </div>
    );
}

export default Consecutivo;
