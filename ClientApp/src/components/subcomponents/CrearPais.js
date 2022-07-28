
const CrearPais = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Add Country</h3>
            </div>

            <form action="">
                <div className="row">
                    <div className="col-md-3">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="formFile" className="form-label">Flag</label>
                        <input className="form-control" type="file" id="formFile" />
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

export default CrearPais;
