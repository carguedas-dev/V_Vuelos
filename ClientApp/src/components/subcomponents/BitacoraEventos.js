import React, { useEffect, useState, useRef, useCallback } from 'react';
import { getOperaciones } from '../../api/operaciones'
import { getBitacora, getBusquedaBitacora } from '../../api/bitacoraEventos';

const BitacoraEventos = () => {

    const [operaciones, setOperaciones] = useState([]);
    const [bitacora, setBitacora] = useState([]);

    let usuarioRef = useRef(); 
    let tipoAccionRef = useRef(); 
    let fechaInicioRef = useRef(); 
    let fechaFinalRef = useRef(); 

    const buscarBitacora = async e => {

        e.preventDefault();

        let usuario = usuarioRef.current.value; 
        let operacion = tipoAccionRef.current.value; 
        let fechaInicio = fechaInicioRef.current.value; 
        let fechaFinal = fechaFinalRef.current.value; 

        if (usuario === "" && operacion === "N/A" && fechaInicio === "" && fechaFinal === ""){
            alert("Para realizar la búsqueda, se debe introducir por lo menos un criterio de búsqueda.");
            return;
        }

        if ((fechaInicio === "" && fechaFinal !== "") || (fechaInicio !== "" && fechaFinal==="")){
            alert("Si se busca a través de filtros de búsqueda, se debe elegir tanto una fecha de inicio como una final.");
            return;
        }

        let tipoBusqueda;

        if (usuario!==""){
            if (operacion!=="N/A"){
                if (fechaInicio!==""){ //Búsqueda 7
                    tipoBusqueda = 7;
                } else { // Búsqueda 4
                    tipoBusqueda = 4;
                }
            } else { //Busqueda 5
                if (fechaInicio!==""){
                    tipoBusqueda = 5;
                } else { //Búsqueda 1
                    tipoBusqueda = 1;
                }
            }
        } else {
            if (operacion!=="N/A"){
                if (fechaInicio!==""){  //Busqueda 6
                   tipoBusqueda = 6; 
                } else { //Búsqueda 2
                    tipoBusqueda = 2;
                }
            } else { 
                if (fechaInicio!==""){ //Búsqueda 3
                    tipoBusqueda = 3
                } 
            }
        }

        let payload = {
            tipo_busqueda : tipoBusqueda,
            nombre_usuario : usuario, 
            tipo_accion : operacion === "N/A" ? 0 : Number.parseInt(operacion),
            fecha_inicio : fechaInicio, 
            fecha_final : fechaFinal
        }

        try {
            let resultado  = await getBusquedaBitacora(payload);
            console.log("RESULTADO::", resultado.data);
            if (resultado.status === 200) {
                setBitacora(resultado.data);
            }
        } catch (error) {
            if (error.response.status === 404){
                alert("No se encontraron resultados con los criterios de búsqueda introducidos.");
                return; 
            } else if (error.response.status === 400) {
                alert("La fecha final no puede ser anterior a la inicial.");
                return;
            }
        }
    }

    const getOpera = useCallback(async () => {
        let operaciones = await getOperaciones();
        setOperaciones(operaciones);
        getBit();
    }, [])

    const getBit = async () => {
        let bitacora = await getBitacora();
        setBitacora(bitacora);
    }

    useEffect(() => {
        getOpera();
    }, [getOpera])

    useEffect(() => {
        return () => {};
    }, []);

    const buildrows = bitacora.map(bit => {
        console.log("OPERACIONES::", operaciones);
        let operacion = operaciones.find(o => o.id === bit.operacion);

        return (<tr key={bit.id}>
            <td>{bit.id}</td>
            <td>{bit.fecha}</td>
            <td>{bit.hora}</td>
            <td>{bit.registro_detalle}</td>
            <td>{bit.usuario}</td>
            <td>{operacion.descripcion}</td>
            <td>{bit.descripcion}</td>
        </tr>);
    });

    return (
        <div className='d-flex flex-column'>
            <div className='row ms-1 mt-2'>
                <h3>Bitácoras</h3>
            </div>

            <form action="" onSubmit={buscarBitacora}>
                <div className="row ms-1 mt-2">
                    <div className="col-2 -md-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input ref={usuarioRef} type="text" className="form-control" id="username"/>
                    </div>
                    <div className="col-2 mb-3">
                        <label htmlFor="action" className="form-label">Tipo Acción</label>
                        <select ref={tipoAccionRef} id="action" className="form-select">
                            <option defaultValue value="N/A">Seleccione</option>
                            {operaciones.map(o => <option key={o.id} value={o.id}>{o.descripcion}</option>)}
                        </select>
                    </div>
                    <div className="col-2 -md-3">
                        <label htmlFor="initial_date" className="form-label">Fecha Inicio</label>
                        <input ref={fechaInicioRef} type="date" className="form-control" id="initial_date"/>
                    </div>
                    <div className="col-2 -md-3">
                        <label htmlFor="end_date" className="form-label">Fecha Final</label>
                        <input ref={fechaFinalRef} type="date" className="form-control" id="end_date"/>
                    </div>
                    <div className="col-4 mt-2">
                        <br />
                        <button type="submit" className="btn btn-primary mx-3">Buscar</button>
                    </div>
                </div>
                <div className="table-responsive scrollableDivTall">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th>Entrada</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Detalle del Registro</th>
                                <th>Usuario</th>
                                <th>Operación</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buildrows}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
      
}

export default BitacoraEventos;

  
    
  