import PaisesDB from '../../DB/PaisesDB';
import {useRef } from 'react';

const CrearPais = ({listPaises}) => {

    const {postPaises} = PaisesDB();
    const idPaisRef = useRef();
    const namePaisRef = useRef();
    const imagePaisRef = useRef();

    // Funcion para realizar llamado al metodo POST de paises de la API
    const createPais = async (e) => {
        e.preventDefault();
        if(idPaisRef.current.value === ""){
            console.log("ID no puede ser vacio");
            return;
        }
        let response = await postPaises(idPaisRef.current.value, 
                                            namePaisRef.current.value, 
                                            imagePaisRef.current.value);
        if(response){
          if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            listPaises();
          }else{
            console.log("ocurrio un error");
          }
        }else{
          console.log("ocurrio un error");
        }
      }

    return (
        <div className='d-flex flex-column'>
            <div className='row'>
                <h3>Add Country</h3>
            </div>

            <form onSubmit={createPais}>
                <div className="row">
                    <div className="col-md-2">
                        <label for="countryCode" className="form-label">Country Code</label>
                        <input type="number" ref={idPaisRef} className="form-control" id="countryCode" />
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" ref={namePaisRef} className="form-control" id="country" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="formFile" className="form-label">Flag</label>
                        <input className="form-control" ref={imagePaisRef} type="file" id="formFile" />
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
