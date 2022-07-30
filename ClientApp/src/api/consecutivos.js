import axios from "axios";

const baseURL = 'http://localhost:58214/api/Consecutivos/';

export const getConsecutivos = async () => {
    let response = await axios.get(baseURL);
    let consecutivos = response.data;
    return consecutivos;
}

export const putConsecutivo = async (
    id,
    valor,
    descripcion,
    prefijo,
    rango_inicial,
    rango_final
) => {
    let request = axios.put(`${baseURL}${id}`,
        {
            id: id,
            valor: valor,
            descripcion: descripcion,
            prefijo: prefijo,
            rango_inicial: rango_inicial,
            rango_final: rango_final
        })

    return request.status;
}