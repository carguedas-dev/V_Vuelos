import VuelosDB from "../../DB/VuelosDB";
import {useRef } from 'react';

const CrearVuelo = ({listVuelos}) => {

    const {postVuelos} = VuelosDB();
    const idVueloRef = useRef();
    const fecha_partidaVueloRef = useRef();
    const hora_partidaVueloRef = useRef();
    const fecha_llegadaVueloRef = useRef();
    const hora_llegadaVueloRef = useRef();
    const aerolineaVueloRef = useRef();
    const puertaVueloRef = useRef();
    const estadoVueloRef = useRef();
    const partedeVueloRef = useRef();
    const llegadeVueloRef = useRef();


    // Funcion para realizar llamado al metodo POST de Vuelos de la API
    const createVuelo= async (e) => {
        e.preventDefault();
        if(idVueloRef.current.value === ""){
            console.log("ID no puede ser vacio");
            return;
        }
        let response = await postAerolineas(idVueloRef.current.value, 
            fecha_partidaVueloRef.current.value, 
            hora_partidaVueloRef.current.value, 
            fecha_llegadaVueloRef.current.value,
            hora_llegadaVueloRef.current.value,
            hora_partidaVueloRef.current.value,
            aerolineaVueloRef.current.value,
            puertaVueloRef.current.value,
            estadoVueloRef.current.value,
            partedeVueloRef.current.value,
            llegadeVueloRef.current.value
            );
        if(response){
          if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            listVuelos();
          }else{
            console.log("ocurrio un error");
          }
        }else{
          console.log("ocurrio un error");
        }
      }


      return (
        <form onSubmit={createVuelo}>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='id'>Id: </label>
                    <input className='form-control' ref={idVueloRef} id='id' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='fecha Partida'>Fecha partida: </label>
                    <input className='form-control' ref={fecha_partidaVueloRef} id='fecha Partida' type='date' />
                </div>
                <div className="col col-2">
                    <label htmlFor='hora_partida'>Hora llegada</label>
                    <input className='form-control' ref={hora_partidaVueloRef} id='hora_partida' type='time' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='fecha_llegada'>fecha llegada</label>
                    <input className='form-control' ref={fecha_llegadaVueloRef} id='fecha_llegada' type='date' />
                </div>
                <div className="col col-2">
                    <label htmlFor='hora_llegada'>hora llegada</label>
                    <input className='form-control' ref={hora_llegadaVueloRef} id='hora_llegada' type='time' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='aerolinea'>Aerolinea</label>
                    <input className='form-control' ref={aerolineaVueloRef} id='aerolinea' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='puerta'>Puerta</label>
                    <input className='form-control' ref={puertaVueloRef} id='puerta' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='estado'>Estado</label>
                    <input className='form-control' ref={estadoVueloRef} id='estado' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='lugar_partida'>Lugar partida</label>
                    <input className='form-control' ref={partedeVueloRef} id='lugar_partida' type='text' />
                </div>
                <div className="col col-2">
                    <label htmlFor='lugar_llegada'>Lugar llegada</label>
                    <input className='form-control' ref={llegadeVueloRef} id='lugar_llegada' type='text' />
                </div>
            </div>
            <button type="submit" className='btn btn-warning'>Crear Vuelo</button>
        </form>
    );
}

export default CrearVuelo;
