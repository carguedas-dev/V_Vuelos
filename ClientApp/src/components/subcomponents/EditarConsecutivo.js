import { useState } from "react";

const EditarConsecutivo = props => {

    const [hasRange, sethasRange] = useState(true);
    const [hasPrefix, sethasPrefix] = useState(true);

    const handleRange = () => sethasRange(prev => !prev);
    const handlePrefix = () => sethasPrefix(prev => !prev);


    return (
        <div>
            <div className='row'>
                <h3>Modificar Consecutivo</h3>
            </div>
            <form>
                <div className='row'>
                    <div className='col-md-4'>
                        <label for='descripcion' className='form-label'>Descripcion</label>
                        <input type='text' id='descripcion' name='descripcion' className='form-control' />
                    </div>
                    <div className='col-3 mb-2'>
                        <label for='consecutivo' className='form-label'>Consecutivo</label>
                        <input className='form-control' id='consecutivo' name='consecutivo' type='number' />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <label htmlFor="prefixCheckbox">Posee Prefijo?</label>
                        <input class="form-check-input mx-3" type="checkbox" value="" id="prefixCheckbox" onClick={handlePrefix} />
                        <label class="form-check-label" for="prefixCheckbox">
                            Sí
                        </label>
                    </div>
                    <div className='col-3 mb-3'>
                        <label for='prefix' className='form-label '>Prefijo</label>
                        <input className='form-control' id='prefix' name='prefix' type='text' disabled={hasPrefix} />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <label htmlFor="rangeChange">Posee Rango?</label>
                        <input class="form-check-input mx-3" type="checkbox" value="" id="rangeChange" onClick={handleRange} />
                        <label class="form-check-label" for="rangeChange">
                            Sí
                        </label>
                    </div>
                    <div className='col-3 mb-3'>
                        <label for='range_init' className='form-label'>Rango Inicial</label>
                        <input className='form-control' id='range_init' name='range_init' type='number' />
                    </div>
                    <div className='col-3 mb-3'>
                        <label for='range_final' className='form-label'>Rango Final</label>
                        <input id='range_final' name='range_final' type='number' className='form-control' disabled={hasRange} />
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
