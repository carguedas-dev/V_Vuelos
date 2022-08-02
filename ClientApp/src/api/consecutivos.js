import axios from "axios";

const baseURL = 'http://localhost:58214/api/Consecutivos/';

export const getConsecutivos = async () => {
    let response = await axios.get(baseURL);
    let consecutivos = response.data;
    return consecutivos;
}

export const postConsecutivo = async (consecutivo) => {
    let request = await axios.post(baseURL, {
        valor : consecutivo.valor, 
        descripcion : consecutivo.descripcion, 
        prefijo : consecutivo.prefijo, 
        rango_inicial : consecutivo.rango_inicial, 
        rango_final : consecutivo.rango_final
    });
    console.log("INSIDE AXIOS::", request);
    return request;
}

export const putConsecutivo = async (consecutivo) => {
    let request = axios.put(`${baseURL}${consecutivo.id}`, {
        id : consecutivo.id,
        valor : consecutivo.valor, 
        descripcion : consecutivo.descripcion, 
        prefijo : consecutivo.prefijo, 
        rango_inicial : consecutivo.rango_inicial, 
        rango_final : consecutivo.rango_final
    });

    return request;
}