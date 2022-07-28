
const Consecutivo = () => {

    const consecutivos = [
        {
            codigo: 1,
            descripcion: 'Tarifas',
            consecutivo: 1
        },
        {
            codigo: 2,
            descripcion: 'Productos y Servicios',
            consecutivo: 2
        },
        {
            codigo: 3,
            descripcion: 'Anuncios',
            consecutivo: 3
        },
    ]

    const buildrows = consecutivos.map(consecutivo =>
        <tr>
            <td>{consecutivo.codigo}</td>
            <td>{consecutivo.descripcion}</td>
            <td>{consecutivo.consecutivo}</td>
            <th><button className="btn btn-warning">Editar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Consecutivo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <div className='row'>
                <h3>Modificar Consecutivo</h3>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-3">
                        <label for="airline" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Consecutivo</label>
                        <input className="form-control" type="file" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Prefijo</label>
                        <input className="form-control" type="file" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Rango Inicial</label>
                        <input className="form-control" type="file" />
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Rango Final</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary mx-3">Modificar</button>
                    <button className='btn btn-warning mx-3'>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Consecutivo;
