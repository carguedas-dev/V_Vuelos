import CrearPais from "./CrearPais";


const Paises = () => {

    //Simula GET from DB
    const paises = [
        {
            nombre: 'Costa Rica',
            codigo: 506,
            flag: '/e/Imagenes/Pais/CR'
        },
        {
            nombre: 'Paraguay',
            codigo: 204,
            flag: '/e/Imagenes/Pais/PA'
        },
        {
            nombre: 'Argentina',
            codigo: 669,
            flag: '/e/Imagenes/Pais/AR'
        },
    ]

    const buildrows = paises.map(user =>
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
                        <th>Country Code</th>
                        <th>Country</th>
                        <th>Flag</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <CrearPais />
        </div>
    );
}

export default Paises;
