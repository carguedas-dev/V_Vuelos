
import AerolineasDB from '../../DB/AerolineasDB';
import {useRef } from 'react';

const CrearAerolineas = ({listAerolineas}) => {

    const {postAerolineas} = AerolineasDB();
    const idAerolineRef = useRef();
    const nameAerolineRef = useRef();
    const imageAerolineRef = useRef();
    const countryRef = useRef();

    // Funcion para realizar llamado al metodo POST de aerolineas de la API
    const createAerolinea = async (e) => {
        e.preventDefault();
        if(idAerolineRef.current.value === ""){
            console.log("ID no puede ser vacio");
            return;
        }
        let response = await postAerolineas(idAerolineRef.current.value, 
                                            nameAerolineRef.current.value, 
                                            countryRef.current.value, 
                                            imageAerolineRef.current.value);
        if(response){
          if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            listAerolineas();
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
                <h3>Add Airline</h3>
            </div>

            <form onSubmit={createAerolinea}>
                <div className="row">
                    <div className="col-md-2">
                        <label for="airlineCode" className="form-label">Airline Code</label>
                        <input type="number" ref={idAerolineRef} className="form-control" id="airlineCode" />
                    </div>
                    <div className="col-md-3">
                        <label for="airline" className="form-label">Airline</label>
                        <input type="text" ref={nameAerolineRef} className="form-control" id="airline" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Logo</label>
                        <input className="form-control" ref={imageAerolineRef} type="file" id="logo" />
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" ref={countryRef} className="form-control" id="country" />
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
