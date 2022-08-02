import { useRef } from "react";

const CrearPuertas = props => {

    const numGateRef = useRef();
    const stateGateRef = useRef();

    const onSubmitHandler = e => {
        e.preventDefault();
        let numero = (numGateRef.current.value)
        props.onPost(numero, stateGateRef.current.value);
        e.target.reset();
    }

    return (
        <div className='d-flex flex-column ms-2 mt-4'>
            <div className='row'>
                <h3>Agregar Puerta</h3>
            </div>

            <form action="" onSubmit={onSubmitHandler}>
                <div className="row">
                    {/* <div className="col-2 -md-3">
                        <label htmlFor="gateNum" className="form-label">Codigo Puerta</label>
                        <input type="number" className="form-control" id="gateNum" disabled />
                    </div> */}
                    <div className="col-2 -md-3">
                        <label htmlFor="gateNum" className="form-label">Numero Puerta</label>
                        <input type="text" className="form-control" id="gateNum" ref={numGateRef} />
                    </div>
                    <div className="col-2 mb-3">
                        <label htmlFor="logo" className="form-label">Estado</label>
                        <select ref={stateGateRef} id="inputState" className="form-select">
                            <option defaultValue value="N/A">Seleccione</option>
                            {props.estadosPuertas.map(estado => <option key={estado.id} value={estado.id}>{estado.descripcion}</option>)}
                        </select>
                    </div>
                    <div className="col-4 mt-2">
                        <br />
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CrearPuertas;
