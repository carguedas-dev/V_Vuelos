import { useState, useEffect } from "react";
import CrearPais from "./CrearPais";
import { getPaises, deletePais, postPais } from "../../api/pais";
import { postBitacora } from "../../api/bitacoraEventos";


const Paises = () => {

    const [paises, setPaises] = useState([]);

    const getCountries = async () => {
        let paises = await getPaises();
        setPaises(paises);
    }

    const deleteCountry = async e => {
        const id = e.target.value;
        let request = await deletePais(id);
        if (request.status === 200)
            alert(`País eliminado exitosamente.`);
            getCountries();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 3,
                descripcion :
                `
                Se elimina el país con identificación ${request.data.id}, y nombre ${request.data.nombre}.
                `
            }

            let requestBitacora = await postBitacora(bitacora);
    }

    const addCountry = async (nombre, imagen) => {
        let request = await postPais(nombre, imagen);
        if (request.status === 201) {
            alert(`País ${nombre} adicionado exitosamente.`);
            getCountries();

            let bitacora = {
                registro_detalle : request.data.id,
                usuario : localStorage.getItem('idUsuario'),
                operacion : 1,
                descripcion :
                `
                Se agrega un nuevo país con identificación ${request.data.id}.\n
                Datos introducidos: -> Id: ${request.data.id} -> Nombre: ${nombre}
                `
            }

            let requestBitacora = await postBitacora(bitacora);
        }
    }

    useEffect(() => {
        getCountries();
    }, []);

    const buildrows = paises.map(country =>
        <tr key={country.id}>
            <td>{country.id}</td>
            <td>{country.nombre}</td>
            <td><img height="100px" width="150px" src={country.imagen} alt=""></img></td>
            <td><button
                className="btn btn-danger"
                value={country.id}
                onClick={deleteCountry}
            >
                Eliminar</button></td>
        </tr>);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className="table-responsive scrollableDivTall">
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
            </div>
            <CrearPais onAddCountry={addCountry} />
        </div>
    );
}

export default Paises;
