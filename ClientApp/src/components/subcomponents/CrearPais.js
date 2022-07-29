import { useRef } from "react";
const CrearPais = props => {

    const nombre = useRef()
    const image = useRef()

    const onAddCountry = e => {
        e.preventDefault();
        props.onAddCountry(nombre.current.value, image.current.value);
        e.target.reset();
    }

    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Add Country</h3>
            </div>

            <form action="" onSubmit={onAddCountry}>
                <div className="row">
                    <div className="col-md-3">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" ref={nombre} />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="formFile" className="form-label">Flag</label>
                        <input className="form-control" type="file" id="formFile" ref={image} />
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

export default CrearPais;
