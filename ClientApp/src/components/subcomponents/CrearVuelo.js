import { useRef } from "react";

const CrearVuelo = props => {

    let fechaPartida = useRef();
    let horaPartida = useRef();
    let lugarPartida = useRef();
    let fechaLlegada = useRef();
    let horaLlegada = useRef();
    let lugarLlegada = useRef();
    let aerolinea = useRef();
    let estado = useRef();
    let puerta = useRef();

    const onSubmitHandler = e => {
        e.preventDefault();

        if (fechaPartida.current.value === "" ||
            horaPartida.current.value === "" ||
            lugarPartida.current.value === "N/A" ||
            fechaLlegada.current.value === "" ||
            horaLlegada.current.value === "" ||
            lugarLlegada.current.value === "N/A" ||
            aerolinea.current.value === "N/A" ||
            puerta.current.value === "N/A" ||
            estado.current.value === "N/A")
        {
            alert("Debe llenar todos los espacios para poder introducir un vuelo.")
            return; 
        }

        const vuelo = {
            fecha_partida : fechaPartida.current.value,
            hora_partida : horaPartida.current.value, 
            fecha_llegada : fechaLlegada.current.value, 
            hora_llegada : horaLlegada.current.value, 
            aerolinea : aerolinea.current.value, 
            puerta : puerta.current.value, 
            estado : estado.current.value, 
            parte_de : lugarPartida.current.value, 
            llega_a : lugarLlegada.current.value, 
            saliendo : false
        }

        props.onPost(vuelo);
        e.target.reset();
    }

    return (
        <div style={{marginLeft: '10px', marginTop: '15px'}}>
            <div className='row'>
                <h3>Agregar Vuelo</h3>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className='row mb-3'>
                    <div className="col col-2">
                        <label htmlFor='fecha Partida'>Fecha partida</label>
                        <input ref={fechaPartida} className='form-control' id='fecha Partida' type='date' />
                    </div>
                    <div className="col col-2">
                        <label htmlFor='hora_partida'>Hora partida</label>
                        <input ref={horaPartida} className='form-control' id='hora_partida' type='time' />
                    </div>
                    <div className="col col-2">
                        <label htmlFor='lugar_partida'>Lugar partida</label>
                        <select ref={lugarPartida} className='form-control' id='lugar_partida' type='text' >
                            <option value="N/A">Seleccione </option>
                            {props.paises.map(pais => <option key={pais.id} value={pais.id}>{pais.nombre}</option>)}
                        </select>
                    </div>
                    <div className="col col-2">
                        <label htmlFor='hora_partida'>Aerolinea</label>
                        <select ref={aerolinea} className='form-control' id='hora_partida' type='time'>
                            <option value="N/A">Seleccione</option>
                            {props.aerolineas.map(aerolinea => <option key={aerolinea.id} value={aerolinea.id}>{aerolinea.nombre}</option>)}
                        </select>
                    </div>
                    <div className="col col-2">
                        <label htmlFor='puerta'>Puerta</label>
                        <select ref={puerta} className='form-control' id='puerta' type='text'>
                            <option value="N/A">Seleccione</option>
                            {props.puertas.map(puerta => <option key={puerta.id} value={puerta.id}>{puerta.numero}</option>)}
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className="col col-2">
                        <label htmlFor='fecha_llegada'>Fecha llegada</label>
                        <input ref={fechaLlegada} className='form-control' id='fecha_llegada' type='date' />
                    </div>
                    <div className="col col-2">
                        <label htmlFor='hora_llegada'>Hora llegada</label>
                        <input ref={horaLlegada} className='form-control' id='hora_llegada' type='time' />
                    </div>
                    <div className="col col-2">
                        <label htmlFor='lugar_llegada'>Lugar llegada</label>
                        <select ref={lugarLlegada} className='form-control' id='lugar_llegada' type='text' >
                            <option value="N/A">Seleccione</option>
                            {props.paises.map(pais => <option key={pais.id} value={pais.id}>{pais.nombre}</option>)}
                        </select>
                    </div>
                    <div className="col col-2">
                        <label htmlFor='estado'>Estado</label>
                        <select ref={estado} className='form-control' id='estado' type='text' >
                            <option value="N/A">Seleccione</option>
                            {props.estados.map(estado => <option key={estado.id} value={estado.id}>{estado.descripcion}</option>)}
                        </select>
                    </div>
                    <div className="col col-2">
                        <br />
                        <button type="submit" className='btn btn-warning w-100'>Crear Vuelo</button>
                    </div>
                </div>
                
            </form>
        </div>

    );
}

export default CrearVuelo;
