import axios from 'axios';

const baseURL = 'http://localhost:58214/api/EstadoVuelos/';

export const getEstadosVuelo = async () => {
    let response = await axios.get(baseURL);
    let estadosVuelo = response.data;
    return estadosVuelo;
}

export const estadoVuelo = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    return response.data.descripcion;
}