import axios from "axios";

const baseURL = 'http://localhost:58214/api/Preguntas/';

export const getPreguntas = async () => {
    let response = await axios.get(baseURL);
    let preguntas = response.data;
    return preguntas;
}

export const getPregunta = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    return response.data.descripcion;

}

export const putPregunta = async (id) => {

}

export const deletePreguntas = async id => {
    axios.delete(`${baseURL}${id}`);
}