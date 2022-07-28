
const CrearAerolineas = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Agregar Aerolinea</h3>
            </div>

            <form action="">
                <div className="row">
                    <div className="col-md-2">
                        <label for="id" className="form-label">Codigo Aerolinea</label>
                        <input type="text" className="form-control" id="id" disabled />
                    </div>
                    <div className="col-md-2">
                        <label for="nombre" className="form-label">Aerolinea</label>
                        <input type="text" className="form-control" id="nombre" />
                    </div>
                    <div className="col-3 mb-3">
                        <label for="Imagen" className="form-label">Logo</label>
                        <input className="form-control" type="file" id="Imagen" />
                    </div>
                    <div className="col-md-2">
                        <label for="pais" className="form-label">Pais</label>
                        <input type="text" className="form-control" id="pais" />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button className='btn btn-warning mx-3'>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default CrearAerolineas;
