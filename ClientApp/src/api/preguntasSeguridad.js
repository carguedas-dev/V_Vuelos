import axios from "axios";

const baseURL = 'http://localhost:58214/api/Preguntas/';

export const getPreguntas = async () => {
    let preguntasResponse = await axios.get(baseURL);
    let preguntas = preguntasResponse.data;

    return preguntas;
}
