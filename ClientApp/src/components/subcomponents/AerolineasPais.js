import { useState, useEffect } from "react";
import { getPaises } from "../../api/pais";
import { getAerolineas } from "../../api/aerolineas";


const AerolineasPais = () => {

    const [pais, setPais] = useState('Costa Rica');
    const [paises, setPaises] = useState([]);
    const [aerolineas, setAerolineas] = useState([]);

    const filterChangeHandler = selectedCountry => {
        setPais(selectedCountry.target.value);
    }

    const getCountries = async () => {
        let paises = await getPaises();
        setPaises(paises);
    }

    const getAirlines = async () => {
        let aerolineas = await getAerolineas();
        setAerolineas(aerolineas);
    }

    const countryFilter = aerolineas.filter(aer => aer.pais === pais);

    useEffect(() => {
        getCountries();
        getAirlines();
    }, []);



    const buildrows = countryFilter.map(aer =>
        <tr key={aer.id}>
            <td>{aer.id}</td>
            <td>{aer.nombre}</td>
            <td>{aer.Imagen}</td>
            <td>{aer.pais}</td>
        </tr>);

    const buildOptions = paises.map(pais =>
        <option key={pais.id} value={pais.nombre}>{pais.nombre}</option>
    )

    return (
        <div className='d-flex flex-column justify-content-center'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Airline Code</th>
                        <th>Airline</th>
                        <th>Logo</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {buildrows}
                </tbody>
            </table>
            <h2>Filtre por Pais</h2>
            <select
                name="paises"
                id="paises"
                value={pais}
                onChange={filterChangeHandler}
            >
                {buildOptions}
            </select>
        </div>
    );
}

export default AerolineasPais;
