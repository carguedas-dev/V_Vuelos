import axios from "axios";

const baseURL = 'http://localhost:58214/api/Paises/';

export const getPaises = async () => {
    let response = await axios.get(baseURL);
    let paises = response.data;
    console.log(paises)
    return paises;
}

export const getPais = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    return response.data.nombre;

}

export const putPais = async (id) => {

}

export const deletePais = async id => {

}