import { useRef } from "react";

const CrearAerolineas = props => {

    const nombreRef = useRef();
    const ImageRef = useRef();
    const paisRef = useRef();

    const onSubmitHandler = e => {
        e.preventDefault();
        let nombre = (nombreRef.current.value)
        let Image = '00x0'//(ImageRef.current.value)
        let pais = (paisRef.current.value)
        props.onPost(nombre, Image, pais);
        e.target.reset();
    }

    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Agregar Aerolinea</h3>
            </div>

            <form action="" onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col-md-2">
                        <label for="id" className="form-label">Codigo Aerolinea</label>
                        <input type="text" className="form-control" id="id" disabled />
                    </div>
                    <div className="col-md-2">
                        <label for="nombre" className="form-label">Aerolinea</label>
                        <input type="text" className="form-control" id="nombre" ref={nombreRef} />
                    </div>
                    <div className="col-3 mb-3">
                        <label for="Imagen" className="form-label">Logo</label>
                        <input className="form-control" type="file" id="Imagen" ref={ImageRef} />
                    </div>
                    <div className="col-md-2">
                        <label for="pais" className="form-label">Pais</label>
                        <select name="pais" id="pais" className="form-select">
                            {props.paises.map(pais => <option key={pais.id} value={pais.id} ref={paisRef}>{pais.nombre}</option>)}
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button className='btn btn-warning mx-3'>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default CrearAerolineas;
