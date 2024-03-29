import { useState, useEffect } from "react";
import CrearVuelo from "./CrearVuelo";
import { getVuelos, postVuelo, deleteVuelo } from "../../api/vuelos";
import { getPaises } from '../../api/pais';
import { getAerolineas } from '../../api/aerolineas';
import { estadoVuelo, getEstadosVuelo } from '../../api/estadoVuelo';
import { getPuertas } from '../../api/puertas';
import { postBitacora } from '../../api/bitacoraEventos'
import '../../assets/styles/tables.css';


const Vuelos = () => {

    const [vuelos, setVuelos] = useState([]);
    
    const [paises, setPaises] = useState([]);
    const [aerolineas, setAerolineas] = useState([]);
    const [estados, setEstados] = useState([]);
    const [puertas, setPuertas] = useState([]);

    const gPaises = async () => {
        let paises = await getPaises();
        setPaises(paises);
    }

    const gAerolineas = async () => {
        let aerolineas = await getAerolineas();
        setAerolineas(aerolineas);
    }

    const gEstados = async () => {
        let estados = await getEstadosVuelo();
        setEstados(estados);
    }

    const gPuertas = async () => {
        let puertas = await getPuertas();
        setPuertas(puertas);
    }

    const getVue = async () => {
        let vuelos = await getVuelos();
        setVuelos(vuelos);
    }

    const addVue = async (vuelo) => {
        let request = await postVuelo(vuelo);
        console.log("Ahora qué hay en el puto request::", request);
        if (request.status === 200) {
            alert("Vuelo agregado satisfactoriamente.");
            getVue();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion :
                `
                Se adiciona el vuelo con identificación ${request.data.id}. 
                Datos introducidos: --> ID: ${request.data.id}, --> Fecha Partida: ${request.data.fechaPartidaDesc}, --> Hora Partida: ${request.data.horaPartidaDesc},
                --> Fecha Llegada: ${request.data.fechaLlegadaDesc}, --> Hora Llegada: ${request.data.horaLlegadaDesc}, --> Aerolínea: ${request.data.aerolineaDesc},
                --> Puerta: ${request.data.puertaDesc}, --> Estado: ${request.data.estadoDesc}, --> Parte De: ${request.data.parteDesc}, --> Llega A: ${request.data.llegaDesc}, 
                --> Arribando o Saliendo (inicial) : ${request.data.saliendo ? 'Arribando' : 'Saliendo'}
                `
            }
    
            console.log('Coming through API::', request);
            let requestBitacora = await postBitacora(bitacora);
        }
            
    }
    
    const deleteVue = async e => {
        let request = await deleteVuelo(e.target.value);
        if (request.status===200){
            getVue();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 3,
                descripcion :
                `
                Se elimina el vuelo con identificación ${request.data.id}.
                `
            }
    
            let requestBitacora = await postBitacora(bitacora);
        }
    }

    useEffect(() => {
        getVue();
        gPaises();
        gAerolineas();
        gEstados();
        gPuertas();
    }, []);

    const buildrows = vuelos.map(vue =>
        
        <tr key={vue.id} style={{border: 'transparent'}}>
            <td>{vue.id}</td>
            <td>{vue.fecha_partida}</td>
            <td>{vue.hora_partida}</td>
            <td>{vue.fecha_llegada}</td>
            <td>{vue.hora_llegada}</td>
            <td>{vue.nombre_aerolinea}</td>
            <td>{vue.numero_puerta}</td>
            <td>{vue.descripcion_estado}</td>
            <td>{vue.saliendo === true ? 'Saliendo' : 'Arribando'}</td>
            <td>{vue.nombre_pais_parte}</td>
            <td>{vue.nombre_pais_llega}</td>
            <td><button
                className="btn btn-danger"
                value={vue.id}
                onClick={deleteVue}
                >Eliminar</button></td>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className="table-responsive scrollableDivSmall">
                <table className="table table-striped text-center">
                    <thead style={{backgroundColor: 'white'}}>
                        <tr>
                            <th>Codigo</th>
                            <th>Fecha partida</th>
                            <th>Hora partida</th>
                            <th>Fecha llegada</th>
                            <th>Hora llegada</th>
                            <th>Aerolínea</th>
                            <th>Puerta</th>
                            <th>Estado</th>
                            <th>Entrante o Saliente</th>
                            <th>Parte de</th>
                            <th>Llega A</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody>
                            {buildrows}
                        </tbody> 
                </table>
            </div>
            <CrearVuelo onPost={addVue} paises={paises} aerolineas={aerolineas} estados={estados} puertas={puertas}/>
        </div>
    );
}

export default Vuelos;
