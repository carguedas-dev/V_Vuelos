import axios from "axios";

const baseURL = 'http://localhost:58214/api/bitacoras/';

export const getBitacora = async () => {
    let bitacora = await axios.get(baseURL);
    return bitacora.data;
}

export const getBusquedaBitacora = async (payload) => {

    const URL = 'http://localhost:58214/api/BusquedaBitacoras/';

    let busqueda = await axios.post(URL, payload);
    // Se retorna request completo para revisar el estado.
    return busqueda;
}

export const postBitacora = async bitacora => {

    let date = new Date();
    console.log("INSIDE AXIOS bitacora::", bitacora);
    let request = await axios.post(baseURL, {
        fecha : `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
        hora : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        registro_detalle : bitacora.registro_detalle, 
        usuario : bitacora.usuario, 
        operacion : bitacora.operacion,
        descripcion : bitacora.descripcion
    });

    console.log("Post request result::", request)


    return request;
}