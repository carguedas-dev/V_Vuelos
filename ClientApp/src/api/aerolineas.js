import axios from "axios";
import { getPaises, getPais } from "./pais";

const baseURL = 'http://localhost:58214/api/Aerolineas/';

export const getAerolineas = async () => {
    let aerolineasResponse = await axios.get(baseURL);
    let aerolineas = aerolineasResponse.data;
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
    axios.post(baseURL, {
        nombre: nombre,
        Imagen: imagen,
        pais: pais
    });
}

export const putAerolinea = async (id, nombre, imagen, pais) => {
    axios.put(`${baseURL}${id}`, {
        nombre: nombre,
        Imagen: imagen,
        pais: pais
    });
}

export const deleteAerolinea = async id => {
    axios.delete(`${baseURL}${id}`);
}