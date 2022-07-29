import axios from "axios";

const baseURL = 'http://localhost:58214/api/Consecutivos/';

export const getConsecutivos = async () => {
    let response = await axios.get(baseURL);
    let estados = response.data;
    return estados;
}

export const getConsecutivo = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    return response.data.descripcion;
}