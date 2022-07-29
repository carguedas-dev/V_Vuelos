import { getConsecutivos } from "../../api/consecutivos";
import { useState, useEffect } from "react";

const Consecutivo = () => {

    const [consecutivos, setConsecutivos] = useState([]);

    const getConsecutives = async () => {
        let consecutives = await getConsecutivos();
        setConsecutivos(consecutives);
    }

    useEffect(() => {
        getConsecutives();
    }, []);

    const buildrows = consecutivos.map(conse =>
        <tr key={conse.id}>
            <td>{conse.descripcion}</td>
            <td>{conse.valor}</td>
            <td>{conse.prefijo}</td>
            <td>{conse.rango_inicial || 'Not Specified'}</td>
            <td>{conse.rango_final || 'Not Specified'}</td>
            <th><button className="btn btn-warning">Editar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Consecutivo</th>
                        <th>Prefijo</th>
                        <th>Rango Inicial</th>
                        <th>Rango Final</th>
                        <th>Editar</th>
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
                        <input className="form-control" type="number" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Prefijo</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Rango Inicial</label>
                        <input className="form-control" type="number" />
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Rango Final</label>
                        <input type="number" className="form-control" />
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
