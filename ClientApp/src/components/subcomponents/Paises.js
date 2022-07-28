import React, { useState, useEffect } from 'react';
import CrearPais from "./CrearPais";
import PaisesDB from '../../DB/PaisesDB';

const Paises = () => {

    const { getPaises} = PaisesDB();
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        listPaises();
    }, paises)

    // Funcion para realizar llamado al metodo GET (listado) de paises de la API
    const listPaises = async () => {
        let response = await getPaises();
        if(response){
            if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            setPaises(response.data);
            }else{
            console.log("ocurrio un error");
            }
        }else{
            console.log("ocurrio un error");
        }
    }


    const buildrows = paises.map(user =>
        <tr>
            <td>{user.codigo}</td>
            <td>{user.nombre}</td>
            <td>{user.flag}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
        </tr>);



    return (
        <div className='d-flex flex-column justify-content-center'>
            { <button onClick={() => listPaises()}>Actualizacion de datos</button> }
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Country Code</th>
                        <th>Country</th>
                        <th>Flag</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearPais 
                listPaises={listPaises}
            />
        </div>
    );
}

export default Paises;
