import axios from "axios";
import { getPaises, getPais } from "./pais";
import { join } from "./Helper";

const baseURL = 'http://localhost:58214/api/Aerolineas/';

export const getAerolineas = async () => {
    let aerolineasResponse = await axios.get(baseURL);
    let aerolineas = await aerolineasResponse.data;
    let paises = await getPaises();
    for (const aerolinea of aerolineas) {
        for (const pais of paises) {
            if (aerolinea.pais === pais.id) {
                aerolinea.pais = pais.nombre;
                break;
            }
        }
    }
    return aerolineas;
}

export const getAerolinea = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    let aerolinea = response.data;
    let pais = await getPais(aerolinea.pais);
    aerolinea.pais = pais;
    return aerolinea;
}

export const postAerolinea = async (nombre, imagen, pais) => {
    let request = axios.post(baseURL, {
        nombre: nombre,
        Imagen: imagen,
        pais: pais
    });
    return request;
}

export const putAerolinea = async (id, nombre, imagen, pais) => {
    let request = axios.put(`${baseURL}${id}`, {
        nombre: nombre,
        Imagen: imagen,
        pais: pais
    });
    return request;
}

export const deleteAerolinea = async id => {
    let request = axios.delete(`${baseURL}${id}`);
    return request;
}