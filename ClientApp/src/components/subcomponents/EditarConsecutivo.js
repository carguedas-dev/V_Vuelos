import { useRef, useState, forwardRef, useImperativeHandle } from "react";

const EditarConsecutivo = forwardRef((props, parentRef) => {

    const [currentConsec, setCurrentConsec] = useState({});

    useImperativeHandle(parentRef, () => ({
        setCurrentConsecutive(consecutive){
            setCurrentConsec(consecutive);
            descripcionRef.current.value = consecutive.descripcion;
            consecutivoRef.current.value = consecutive.valor;
            consecutivoRef.current.disabled = true;
            consecutive.prefijo != null ? poseePrefijoRef.current.checked = true : poseePrefijoRef.current.checked = false;
            consecutive.prefijo != null ? prefijoRef.current.disabled = false : prefijoRef.current.disabled = true;
            prefijoRef.current.value = consecutive.prefijo;
            consecutive.rango_inicial != null || consecutive.rango_final != null ? poseeRangoRef.current.checked = true : poseeRangoRef.current.checked = false;
            consecutive.rango_inicial!= null ? inicialRef.current.value = consecutive.rango_inicial : inicialRef.current.value = "";
            consecutive.rango_final != null ? finalRef.current.value = consecutive.rango_final : finalRef.current.value = "";
            consecutive.rango_inicial != null ? inicialRef.current.disabled = false : inicialRef.current.disabled = true;
            consecutive.rango_final != null ? finalRef.current.disabled = false : finalRef.current.disabled = true;
            
            inicialRef.current.value = consecutive.rango_inicial;
            finalRef.current.value = consecutive.rango_final;
        },
        clearSpaces() {
            descripcionRef.current.value = "";
            consecutivoRef.current.value = "";
            prefijoRef.current.value = "";
            inicialRef.current.value = "";
            finalRef.current.value = "";

            poseePrefijoRef.current.checked = false;
            poseeRangoRef.current.checked = false;
        }
    }));

    const handlePrefix = e => {
        if (!e.target.checked){
            prefijoRef.current.value = "";
            prefijoRef.current.disabled = true;
        } else {
            prefijoRef.current.disabled = false;
        }
    }

    const handleRange = e => {
        if (!e.target.checked){
            inicialRef.current.value = "";
            finalRef.current.value = "";
            inicialRef.current.disabled = true;
            finalRef.current.disabled = true;
        } else {
            inicialRef.current.disabled = false;
            finalRef.current.disabled = false;
        }
    }

    const descripcionRef = useRef();
    const consecutivoRef = useRef();
    const prefijoRef = useRef();
    const inicialRef = useRef();
    const finalRef = useRef();

    const poseePrefijoRef = useRef();
    const poseeRangoRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let objConsecutivo;
        if (currentConsec!=null){
            objConsecutivo = {
                id: currentConsec.id,
                valor: consecutivoRef.current.value,
                descripcion: descripcionRef.current.value,
                prefijo: prefijoRef.current.value,
                rango_inicial: inicialRef.current.value === "" ? null : inicialRef.current.value,
                rango_final: finalRef.current.value === "" ? null : finalRef.current.value
            }
        } else {
            objConsecutivo = {
                valor: consecutivoRef.current.value,
                descripcion: descripcionRef.current.value,
                prefijo: prefijoRef.current.value,
                rango_inicial: inicialRef.current.value === "" ? null : inicialRef.current.value,
                rango_final: finalRef.current.value === "" ? null : finalRef.current.value
            }
        }

        if (objConsecutivo.descripcion === "" ||
            objConsecutivo.valor === "") {
                alert("Para agregar o modificar un consecutivo, es necesario incluir como mínimo una descripción y un valor numérico consecutivo.");
                return;
            }

        if (poseePrefijoRef.current.checked && objConsecutivo.prefijo === ""){
            alert("El consecutivo debe incluir un prefijo.");
            return;
        }

        if (poseeRangoRef.current.checked && (objConsecutivo.rango_inicial === "" || objConsecutivo.rango_final ==="")){
            alert("El consecutivo debe especificar un rango.");
            return;
        }

        if (poseeRangoRef.current.checked){
            if (Number.parseInt(objConsecutivo.rango_inicial) === Number.parseInt(objConsecutivo.rango_final)){
                alert(`El rango inicial y final no pueden tener el mismo valor. Valor actual: ${objConsecutivo.rango_inicial}`);
                return;
            }

            if (Number.parseInt(objConsecutivo.rango_inicial) > Number.parseInt(objConsecutivo.rango_final)){
                alert(`El rango final no puede ser menor que el inicial.`);
                return;
            }

            if (Number.parseInt(objConsecutivo.rango_inicial) !== Number.parseInt(objConsecutivo.valor) && poseeRangoRef.current.checked){
                alert(`El rango inicial no puede ser diferente al valor actual del consecutivo (valor actual: ${objConsecutivo.valor}).`);
                return;
            }

            if (Number.parseInt(objConsecutivo.rango_final) < Number.parseInt(objConsecutivo.valor) && poseeRangoRef.current.checked){
                alert(`El rango final no puede ser menor al valor actual del consecutivo (valor actual: ${objConsecutivo.valor}).`);
                return;
            }
        }
        
        props.editarConsec(objConsecutivo);
    }

    const clearSpaces = (e) => {
        e.preventDefault();
        descripcionRef.current.value = "";
        consecutivoRef.current.value = "";
        consecutivoRef.current.disabled = false;
        poseePrefijoRef.current.checked = false;
        prefijoRef.current.value = "";
        prefijoRef.current.disabled = true;
        poseeRangoRef.current.checked = false;
        inicialRef.current.disabled = true;
        finalRef.current.disabled = true;
        setCurrentConsec(null);
    }

return (
    <div style={{marginLeft : '10px', marginTop : '15px'}}>
        <div className='row'>
            <h3>Agregar o Modificar Consecutivo</h3>
        </div>
        <form onSubmit={onSubmitHandler}>
            <div className='row'>
                <div className='col-md-3'>
                    <label htmlFor='descripcion' className='form-label'>Descripcion</label>
                    <input
                        type='text'
                        id='descripcion'
                        name='descripcion'
                        className='form-control'
                        ref={descripcionRef} />
                </div>
                <div className='col-1 mb-2'>
                    <label htmlFor='consecutivo' className='form-label'>Consecutivo</label>
                    <input
                        type='number'
                        id='consecutivo'
                        name='consecutivo'
                        className='form-control'
                        ref={consecutivoRef} />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <label htmlFor="prefixCheckbox">Posee Prefijo?</label>
                    <input
                        ref={poseePrefijoRef}
                        type="checkbox"
                        id="prefixCheckbox"
                        name="prefixCheckbox"
                        className="form-check-input mx-3"
                        onClick={handlePrefix} />
                    <label className="form-check-label" htmlFor="prefixCheckbox">
                        Sí
                    </label>
                </div>
                <div className='col-2 mb-3'>
                    <label htmlFor='prefix' className='form-label '>Prefijo</label>
                    <input
                        type='text'
                        id='prefix'
                        name='prefix'
                        className='form-control'
                        ref={prefijoRef} 
                        disabled/>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <label htmlFor="rangeChange">Posee Rango?</label>
                    <input
                        ref={poseeRangoRef}
                        type="checkbox"
                        id="rangeChange"
                        name="rangeChange"
                        className="form-check-input mx-3"
                        onClick ={handleRange} />
                    <label className="form-check-label" htmlFor="rangeChange">
                        Sí
                    </label>
                </div>
                <div className='col-3 mb-3'>
                    <label htmlFor='range_init' className='form-label'>Rango Inicial</label>
                    <input
                        type='number'
                        id='range_init'
                        name='range_init'
                        ref={inicialRef}
                        className='form-control' 
                        disabled/>
                </div>
                <div className='col-3 mb-3'>
                    <label htmlFor='range_final' className='form-label'>Rango Final</label>
                    <input
                        type='number'
                        step={1}
                        min={0}
                        max={1000}
                        id='range_final'
                        name='range_final'
                        className='form-control'
                        ref={finalRef}
                        disabled/>
                </div>
                <div className='col-5' style={{marginTop: '7px'}}>
                    <br />
                    <button type='submit' className='btn btn-primary mx-3'>Agregar o Modificar</button>
                    <button onClick={clearSpaces} className='btn btn-warning mx-3'>Clear</button>
                </div>
            </div>
        </form>
    </div>
);
})

export default EditarConsecutivo;
