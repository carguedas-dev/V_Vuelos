import { useRef } from "react";
const CrearPais = props => {

    const nombre = useRef()
    const image = useRef()

    const addCountry = (binImg) => {
        props.onAddCountry(nombre.current.value, binImg);
    }

    const onAddCountry = e => {
        e.preventDefault();

        let img = image.current.files[0];

        if (nombre.current.value === ""){
            alert("Debe introducir un nombre de país.");
            return;
        }

        if (img===undefined){
            alert("Debe agregar una imagen.");
            return;
        }
        if (!img.type.includes('image')){
            alert("El archivo cargado debe ser únicamente una imagen.");
            img.value = null;
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = () => {
            addCountry(reader.result);
            e.target.reset();
        }
    }

    return (
        <div className='d-flex flex-column' style={{marginLeft: '10px', marginTop: '15px'}}>
            <div className='row'>
                <h3>Agregar País</h3>
            </div>

            <form action="" onSubmit={onAddCountry}>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Nombre Pais</label>
                        <input type="text" className="form-control" id="country" ref={nombre} />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="formFile" className="form-label">Bandera</label>
                        <input className="form-control" type="file" id="formFile" ref={image} />
                    </div>
                    <div className="col-5">
                        <br />
                        <button style={{marginTop: '7px'}} type="submit" className="btn btn-primary w-75">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CrearPais;
