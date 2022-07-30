import { getPuertasActivas } from "../../api/puertasActivas";
import { useState, useEffect } from "react";

const PuertasActivas = () => {

    const [activeGates, setactiveGates] = useState([]);

    const getGates = async () => {
        let puertas = await getPuertasActivas();
        console.log(puertas)
        setactiveGates(puertas);
    }

    useEffect(() => {
        getGates();
    }, []);

    const buildrows = activeGates.map(gate =>
        <tr key={gate.id}>
            <td>{gate.id}</td>
            <td>{gate.numero}</td>
            <td>{gate.NumeroEstado}</td>
            <td>{gate.DescripcionEstado}</td>
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
        </div>
    );
}

export default PuertasActivas;
