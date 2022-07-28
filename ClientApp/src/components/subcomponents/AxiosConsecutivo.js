
import ConsecutivosDB from '../../DB/ConsecutivosDB';
import {useRef } from 'react';

const AxiosConsecutivos = ({listConsecutivos}) => {

    const {putConsecutivos} = ConsecutivosDB();
    const idConsecRef = useRef();
    const valueConsecRef = useRef();
    const descriptionConsecRef = useRef();
    const prefixConsecRef = useRef();
    const  riConsecRef= useRef();
    const  rfConsecRef= useRef();

    // Funcion para realizar llamado al metodo PUT de consecutivos de la API
    const modifyConsec = async (e) => {
        e.preventDefault();

        let response = await putConsecutivos(idConsecRef.current.value, 
                                            descriptionConsecRef.current.value, 
                                            valueConsecRef.current.value, 
                                            riConsecRef.current.value, 
                                            rfConsecRef.current.value, 
                                            prefixConsecRef.current.value);
        if(response){
          if(response.status === 200){
            console.log(response.data); // Respuesta exitosa de la API
            listConsecutivos();
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
                <h3>Modificar Consecutivo</h3>
            </div>

            <form onSubmit={modifyConsec}>
                <div className="row">
                    <div className="col-md-2">
                        <label for="airlineCode" className="form-label">Codigo</label>
                        <input type="number" ref={idConsecRef} className="form-control" id="airlineCode" />
                    </div>
                    <div className="col-md-3">
                        <label for="airline" className="form-label">Descripcion</label>
                        <input type="text" ref={descriptionConsecRef} className="form-control" id="airline" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Consecutivo</label>
                        <input className="form-control" ref={valueConsecRef} type="file" id="logo" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Prefijo</label>
                        <input className="form-control" ref={prefixConsecRef} type="file" id="logo" />
                    </div>
                    <div className="col-4 mb-3">
                        <label for="logo" className="form-label">Rango Inicial</label>
                        <input className="form-control" ref={riConsecRef} type="file" id="logo" />
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Rango Final</label>
                        <input type="text" ref={rfConsecRef} className="form-control" id="country" />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary mx-3">Modificar</button>
                    <button className='btn btn-warning mx-3'>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default AxiosConsecutivos;
