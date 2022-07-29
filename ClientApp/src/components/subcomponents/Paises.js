import { useState, useEffect } from "react";
import CrearPais from "./CrearPais";
import { getPaises, deletePais, postPais } from "../../api/pais";


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
            getCountries();
    }

    const addCountry = async (nombre, imagen) => {
        let request = await postPais(nombre, '00x0');
        if (request.status === 201)
            getCountries();
    }

    useEffect(() => {
        getCountries();
    }, []);


    const buildrows = paises.map(country =>
        <tr key={country.id}>
            <td>{country.id}</td>
            <td>{country.nombre}</td>
            <td>{country.imagen}</td>
            <th><button
                className="btn btn-danger"
                value={country.id}
                onClick={deleteCountry}
            >
                Eliminar</button></th>
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
            <CrearPais onAddCountry={addCountry} />
        </div>
    );
}

export default Paises;
