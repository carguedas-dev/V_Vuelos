import axios from "axios";
import { getEstados, getEstado } from "./estadoPuertas";

const baseURL = 'http://localhost:58214/api/Puertas/';

export const getPuertas = async () => {
    let puertasResponse = await axios.get(baseURL);
    let puertas = puertasResponse.data;
    let estadosResponse = await getEstados();
    let newPuertas = puertas.map(puerta => puerta.estado + 1)
    //Work in progress...
    return puertas;
}

export const getPuerta = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    let puerta = response.data;
    let estado = await getEstado(puerta.estado);
    puerta.estado = estado;
    return puerta;
}

export const deletePuerta = id => {
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