import axios from "axios";
import { getEstados, getEstado } from "./estadoPuertas";

const baseURL = 'http://localhost:58214/api/Puertas/';

export const getPuertas = async () => {
    let puertasResponse = await axios.get(baseURL);
    let puertas = puertasResponse.data;
    let estados = await getEstados();
    for (const puerta of puertas) {
        for (const estado of estados) {
            if(puerta.estado === estado.id) {
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
    axios.post(baseURL, {
        numero: num,
        estado: estado
    });
}

export const deletePuerta = async id => {
    axios.delete(`${baseURL}${id}`);
}

export const putPuerta = async (id, numero, estado) => {
    axios.put(`${baseURL}${id}`,
        {
            numero: numero,
            estado: estado
        })
        .then(response => console.log(response));
}