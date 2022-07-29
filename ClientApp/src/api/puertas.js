import axios from "axios";
import { getEstados, getEstado } from "./estadoPuertas";

const baseURL = 'http://localhost:58214/api/Puertas/';

export const getPuertas = async () => {
    let puertasResponse = await axios.get(baseURL);
    let puertas = puertasResponse.data;
    let estados = await getEstados();
    for (const puerta of puertas) {
        for (const estado of estados) {
            if (puerta.estado === estado.id) {
                puerta.estado = estado.descripcion;
                break;
            }
        }
    }
    return puertas;
}

export const getPuerta = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    let puerta = response.data;
    let estado = await getEstado(puerta.estado);
    puerta.estado = estado;
    return puerta;
}

export const postPuerta = async (num, estado) => {
    let request = axios.post(baseURL, {
        numero: num,
        estado: estado
    });
    return request;
}

export const deletePuerta = async id => {
    let request = axios.delete(`${baseURL}${id}`);
    return request;
}

export const putPuerta = async (id, num, estado) => {
    axios.put(`${baseURL}${id}`,
        {
            numero: num,
            estado: estado
        })
        .then(response => console.log(response));
}