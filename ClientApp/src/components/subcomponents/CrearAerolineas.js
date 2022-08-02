import { useRef } from "react";

const CrearAerolineas = props => {

    const nombreRef = useRef();
    const ImageRef = useRef();
    const paisRef = useRef();

    const onSubmitHandler = e => {
        e.preventDefault();

        let nombre = nombreRef.current.value
        let Image = ImageRef.current.files[0]
        let pais = paisRef.current.value

        if (nombre === ""){
            alert("Debe introducir un nombre de aerolínea.");
            return;
        }

        if (Image===undefined){
            alert("Debe agregar una imagen.");
            return;
        }
        if (!Image.type.includes('image')){
            alert("El archivo cargado debe ser únicamente una imagen.");
            Image.value = null;
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onloadend = () => {
            props.onPost(nombre, reader.result, pais);
            e.target.reset();
        }
    }

    return (
        <div className='d-flex flex-column ms-2 mt-3'>
            <div className='row'>
                <h3>Agregar Aerolinea</h3>
            </div>

            <form action="" onSubmit={onSubmitHandler}>
                <div className="row">
                    {/* <div className="col-md-2">
                        <label htmlFor="id" className="form-label">Codigo Aerolinea</label>
                        <input type="text" className="form-control" id="id" disabled />
                    </div> */}
                    <div className="col-md-2">
                        <label htmlFor="nombre" className="form-label">Aerolinea</label>
                        <input type="text" className="form-control" id="nombre" ref={nombreRef} />
                    </div>
                    <div className="col-3 mb-3">
                        <label htmlFor="Imagen" className="form-label">Logo</label>
                        <input className="form-control" type="file" id="Imagen" ref={ImageRef} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="pais" className="form-label">Pais</label>
                        <select name="pais" id="pais" className="form-select">
                            {props.paises.map(pais => <option key={pais.id} value={pais.id} ref={paisRef}>{pais.nombre}</option>)}
                        </select>
                    </div>
                    <div className="col-4 mt-2">
                        <br />
                        <button type="submit" className="btn btn-primary mx-3">Agregar Aerolínea</button>
                    </div>
                </div>

                
            </form>
        </div>
    );
}

export default CrearAerolineas;
