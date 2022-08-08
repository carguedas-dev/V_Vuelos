import { useState, useEffect } from "react";
import CrearPuertas from "./CrearPuertas";
import { getPuertas, deletePuerta, postPuerta } from "../../api/puertas";
import { getEstados } from "../../api/estadoPuertas";
import { postBitacora } from "../../api/bitacoraEventos";


const Puertas = () => {

    const [puertas, setPuertas] = useState([]);
    const [estadosPuertas, setEstadosPuertas] = useState([]);

    const getGates = async () => {
        let paises = await getPuertas();
        setPuertas(paises);
    }

    const getGateStatuses = async () => {
        let estados = await getEstados();
        setEstadosPuertas(estados);
    }

    const deleteGate = async e => {
        const id = e.target.value;
        let request = await deletePuerta(id);
        if (request.status === 200) {
            getGates();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion :
                `
                Se elimina la puerta con identificación ${request.data.id} y número/nombre ${request.data.nombre}.
                `
            }
    
            let requestBitacora = postBitacora(bitacora);
        }
    }

    const addGate = async (nombre, estado) => {

        if (nombre === "" ||
            estado === "N/A") {
            alert("Para continuar, debe indicar un nombre y estado.");
            return;
        }
        
        let request = await postPuerta(nombre, estado);
        if (request.status === 201) {
            alert(`Puerta con nombre ${nombre} ha sido agregada exitosamente.`);
            getGates();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion :
                `
                Se agrega la puerta con identificación ${request.data.id} y número/nombre ${nombre}, con un estado actual de ${request.data.estado}.
                `
            }
    
            let requestBitacora = postBitacora(bitacora);
        }
    }

    useEffect(() => {
        getGates();
        getGateStatuses();
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
            <div className="table-responsive scrollableDivTall">
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
            </div>
        <CrearPuertas estadosPuertas={estadosPuertas} onPost={addGate} />
        </div>
    );
}

export default Puertas;
