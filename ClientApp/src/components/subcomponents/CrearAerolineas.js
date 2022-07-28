
const CrearAerolineas = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Add Airline</h3>
            </div>

            <form action="">
                <div className="row">
                    <div className="col-md-3">
                        <label for="airline" className="form-label">Airline</label>
                        <input type="text" className="form-control" id="airline" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Logo</label>
                        <input className="form-control" type="file" id="logo" />
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
