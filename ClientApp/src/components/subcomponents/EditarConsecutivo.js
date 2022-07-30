import { useRef, useState } from "react";

const EditarConsecutivo = props => {

    const [hasRange, sethasRange] = useState(true);
    const [hasPrefix, sethasPrefix] = useState(true);

    const handleRange = () => sethasRange(prev => !prev);
    const handlePrefix = () => sethasPrefix(prev => !prev);

    const descripcionRef = useRef();
    const consecutivoRef = useRef();
    const prefijoRef = useRef();
    const inicialRef = useRef();
    const finalRef = useRef();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let objConsecutivo = {
            id: props.id,
            valor: consecutivoRef.current.value,
            descripcion: descripcionRef.current.value,
            prefijo: prefijoRef.current.value,
            rango_inicial: inicialRef.current.value,
            rango_final: finalRef.current.value
        }
        props.editarConsec(objConsecutivo);
    }

return (
    <div>
        <div className='row'>
            <h3>Modificar Consecutivo</h3>
        </div>
        <form onSubmit={onSubmitHandler}>
            <div className='row'>
                <div className='col-md-4'>
                    <label for='descripcion' className='form-label'>Descripcion</label>
                    <input
                        type='text'
                        id='descripcion'
                        name='descripcion'
                        value={props.consec.descripcion || ''}
                        className='form-control'
                        ref={descripcionRef} />
                </div>
                <div className='col-3 mb-2'>
                    <label for='consecutivo' className='form-label'>Consecutivo</label>
                    <input
                        type='number'
                        id='consecutivo'
                        name='consecutivo'
                        value={props.consec.valor || ''}
                        className='form-control'
                        ref={consecutivoRef} />
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center">
                    <label htmlFor="prefixCheckbox">Posee Prefijo?</label>
                    <input
                        type="checkbox"
                        id="prefixCheckbox"
                        name="prefixCheckbox"
                        class="form-check-input mx-3"
                        onClick={handlePrefix} />
                    <label class="form-check-label" for="prefixCheckbox">
                        Sí
                    </label>
                </div>
                <div className='col-3 mb-3'>
                    <label for='prefix' className='form-label '>Prefijo</label>
                    <input
                        type='text'
                        id='prefix'
                        name='prefix'
                        className='form-control'
                        ref={prefijoRef}
                        value={props.consec.prefijo || ''}
                        disabled={hasPrefix} />
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center">
                    <label htmlFor="rangeChange">Posee Rango?</label>
                    <input
                        type="checkbox"
                        id="rangeChange"
                        name="rangeChange"
                        class="form-check-input mx-3"
                        onClick={handleRange} />
                    <label class="form-check-label" for="rangeChange">
                        Sí
                    </label>
                </div>
                <div className='col-3 mb-3'>
                    <label for='range_init' className='form-label'>Rango Inicial</label>
                    <input
                        type='number'
                        id='range_init'
                        name='range_init'
                        value={props.consec.rango_inicial || 0}
                        ref={inicialRef}
                        className='form-control' />
                </div>
                <div className='col-3 mb-3'>
                    <label for='range_final' className='form-label'>Rango Final</label>
                    <input
                        type='number'
                        step={1}
                        min={0}
                        max={1000}
                        id='range_final'
                        name='range_final'
                        className='form-control'
                        value={props.consec.rango_final || 0}
                        ref={finalRef}
                        disabled={hasRange} />
                </div>
            </div>

            <div className='col-12'>
                <button type='submit' className='btn btn-primary mx-3'>Modificar</button>
                <button className='btn btn-warning mx-3'>Clear</button>
            </div>
        </form>
    </div>
);
}

export default EditarConsecutivo;
