import { useRef } from "react";

const CrearPuertas = props => {

    const numGateRef = useRef();
    let estado = '1';
    
    const selectedStatus = selectedCountry => {
        estado = selectedCountry.target.value
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        let numero = (numGateRef.current.value)
        props.onPost(numero, estado);
        e.target.reset();
    }

    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Agregar Puerta</h3>
            </div>

            <form action="" onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col-2 -md-3">
                        <label for="gateNum" className="form-label">Codigo Puerta</label>
                        <input type="number" className="form-control" id="gateNum" disabled />
                    </div>
                    <div className="col-2 -md-3">
                        <label for="gateNum" className="form-label">Numero Puerta</label>
                        <input type="text" className="form-control" id="gateNum" ref={numGateRef} />
                    </div>
                    <div className="col-2 mb-3">
                        <label for="logo" className="form-label">Estado</label>
                        <select id="inputState" class="form-select" onChange={selectedStatus}>
                            <option value={1} >Abierta</option>
                            <option value={2}>Cerrada</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CrearPuertas;
