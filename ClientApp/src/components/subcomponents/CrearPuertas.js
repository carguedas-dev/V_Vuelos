import PuertasDB from '../../DB/PuertasDB';
import {useRef } from 'react';

const CrearPuertas = (listPuertas) => {

    const {postPuertas} = PuertasDB();
    const idPuertaRef = useRef();
    const numeroPuertaRef = useRef();
    const estadoPuertaRef = useRef();

    // Funcion para realizar llamado al metodo POST de puertas de la API
    const createPuerta = async (e) => {
        e.preventDefault();
        if(idPuertaRef.current.value === ""){
            console.log("ID no puede ser vacio");
            return;
        }
        let response = await postPuertas(idPuertaRef.current.value, 
                                            numeroPuertaRef.current.value, 
                                            estadoPuertaRef.current.value);
        if(response){
          if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            listPuertas();
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
                <h3>Agregar Puerta</h3>
            </div>

            <form onSubmit={createPuerta}>
                <div className="row">
                    <div className="col-2 -md-2">
                        <label for="gateId" className="form-label">Codigo Puerta</label>
                        <input type="number" ref={idPuertaRef} className="form-control" id="gateId" />
                    </div>
                    <div className="col-2 -md-3">
                        <label for="gateNum" className="form-label">Numero Puerta</label>
                        <input type="number" ref={numeroPuertaRef} className="form-control" id="gateNum" />
                    </div>
                    <div className="col-2 mb-3">
                        
                        <label for="logo" className="form-label">Detalle</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Abierta</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                    <div className="col-2 mb-3">
                        <label for="logo" className="form-label">Tipo</label>
                        <select id="inputState" ref={estadoPuertaRef} class="form-select">
                            <option selected>Choose...</option>
                            <option>Entrada</option>
                            <option>Salida</option>
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

export default CrearPuertas;
