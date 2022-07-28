import axios from "axios";

const baseURL = 'http://localhost:58214/api/EstadoPuertas/';

export const getEstados = async () => {
    let response = await axios.get(baseURL);
    let estados = response.data;
    return estados;
}

export const getEstado = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    return response.data.descripcion;
}