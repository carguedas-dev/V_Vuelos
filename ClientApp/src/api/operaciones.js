import axios from "axios";

const baseURL = 'http://localhost:58214/api/Operaciones/';

export const getOperaciones = async () => {
    let operaciones = await axios.get(baseURL);
    return operaciones.data;
}
