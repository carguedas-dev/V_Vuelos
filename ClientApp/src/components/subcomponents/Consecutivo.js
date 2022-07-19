
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
        </div>
    );
}

export default Consecutivo;
