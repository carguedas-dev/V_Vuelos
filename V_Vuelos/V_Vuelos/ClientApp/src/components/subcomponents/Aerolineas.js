import CrearAerolineas from "./CrearAerolineas";

const Aerolineas = () => {

    //Simula GET from DB
    const aerolineas = [
        {
            nombre: 'American Airlines',
            codigo: 506,
            flag: '...'
        },
        {
            nombre: 'Vienam Airlines',
            codigo: 204,
            flag: '...'
        },
        {
            nombre: 'SouthEast China',
            codigo: 669,
            flag: '...'
        },
    ]

    const buildrows = aerolineas.map(user =>
        <tr>
            <td>{user.codigo}</td>
            <td>{user.nombre}</td>
            <td>{user.flag}</td>
            <th><button className="btn btn-danger">Eliminar</button></th>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Airline Code</th>
                        <th>Airline</th>
                        <th>Logo</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearAerolineas />
        </div>
    );
}

export default Aerolineas;
