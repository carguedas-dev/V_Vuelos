import React, { useState, useEffect } from 'react';
import CrearAerolineas from "./CrearAerolineas";
import AerolineasDB from '../../DB/AerolineasDB';

const Aerolineas = () => {

    const { getAerolineas} = AerolineasDB();
    const [aerolineas, setAerolineas] = useState([]);

    useEffect(() => {
        listAerolineas();
    }, aerolineas)
  
      
    // Funcion para realizar llamado al metodo GET (listado) de aerolineas de la API
    const listAerolineas = async () => {
        let response = await getAerolineas();
        if(response){
            if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            setAerolineas(response.data);
            }else{
            console.log("ocurrio un error");
            }
        }else{
            console.log("ocurrio un error");
        }
    }

    const buildrows = aerolineas.map(user =>
        <tr>
            <td>{user.codigo}</td>
            <td>{user.nombre}</td>
            <td>{user.flag}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            { <button onClick={() => listAerolineas()}>Actualizacion de datos</button> }
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Airline Code</th>
                        <th>Airline</th>
                        <th>Logo</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearAerolineas 
                listAerolineas={listAerolineas}
            />
        </div>
    );
}

export default Aerolineas;