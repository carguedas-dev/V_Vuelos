import { useState, useEffect, useCallback } from "react";
import CrearAerolineas from "./CrearAerolineas";
import { getAerolineas, postAerolinea, deleteAerolinea } from "../../api/aerolineas";
import { getPaises } from "../../api/pais";
import { postBitacora } from "../../api/bitacoraEventos"
import '../../assets/styles/tables.css'

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
        if (request.status === 200){
            alert(`Aerolínea eliminada exitosamente.`);
            getAirlines();
        }

        let bitacora = {
            registro_detalle : request.data.id,
            usuario : localStorage.getItem('idUsuario'),
            operacion : 3,
            descripcion :
            `
            Se elimina la aerolínea con identificación ${request.data.id} y nombre ${request.data.nombre}
            `
        }

        let requestBitacora = await postBitacora(bitacora);
            
    }

    const addAirline = async (nombre, imagen, pais) => {
        let request = await postAerolinea(nombre, imagen, pais);
        console.log("REQUEST:::", request);
        if (request.status === 201){
            alert(`Aerolínea ${nombre} adicionada correctamente.`);
            getAirlines();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion :
                `
                Se agrega una nueva aerolínea con identificación ${request.data.id}.\n
                Datos introducidos: -> Id: ${request.data.id} -> Nombre: ${nombre}, País: ${request.data.pais}
                `
            }

            let requestBitacora =await postBitacora(bitacora);
        } 
    }

    useEffect(() => {
        getAirlines();
        getCountries();
    }, []);

    const buildrows = aerolineas.map(aer =>
        <tr key={aer.id}>
            <td>{aer.id}</td>
            <td>{aer.nombre}</td>
            <td><img height="100px" width="150px" src={aer.Imagen} alt=""></img></td>
            <td>{aer.pais}</td>
            <td><button
                className="btn btn-danger"
                value={aer.id}
                onClick={deleteAirline}>Eliminar</button></td>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className="table-responsive scrollableDivTall">
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
            </div>
            <CrearAerolineas onPost={addAirline} paises={paises} />
        </div>
    );
}

export default Aerolineas;
