
const CrearVuelo = () => {
    return (
        <div>
            <div className='row'>
                <h3>Agregar Vuelo</h3>
            </div>
            <form action=''>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='fecha Partida'>Fecha partida: </label>
                    <input className='form-control' id='fecha Partida' type='date' />
                </div>
                <div className="col col-2">
                    <label htmlFor='hora_partida'>Hora llegada</label>
                    <input className='form-control' id='hora_partida' type='time' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='fecha_llegada'>fecha llegada</label>
                    <input className='form-control' id='fecha_llegada' type='date' />
                </div>
                <div className="col col-2">
                    <label htmlFor='hora_llegada'>hora llegada</label>
                    <input className='form-control' id='hora_llegada' type='time' />
                </div>
            </div>

            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='aerolinea'>Aerolinea</label>
                    <input className='form-control' id='aerolinea' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='puerta'>Puerta</label>
                    <input className='form-control' id='puerta' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='estado'>Estado</label>
                    <input className='form-control' id='estado' type='text' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col col-2">
                    <label htmlFor='lugar_partida'>Lugar partida</label>
                    <input className='form-control' id='lugar_partida' type='text' />
                </div>
                <div className="col col-2">
                    <label htmlFor='lugar_llegada'>Lugar llegada</label>
                    <input className='form-control' id='lugar_llegada' type='text' />
                </div>
            </div>
            <button type="submit" className='btn btn-warning'>Crear Vuelo</button>
        </form>
        </div>
        
    );
}

export default CrearVuelo;
