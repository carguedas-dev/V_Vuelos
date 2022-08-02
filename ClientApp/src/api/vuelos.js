import axios from 'axios';

const baseURL = 'http://localhost:58214/api/Vuelos';

export const getVuelos = async () => {

    let response = await axios.get(`${baseURL}Descriptivos`);
    let vuelos = response.data;

    return vuelos;
}

export const getVuelo = async id => {

}

export const postVuelo = async (vuelo) => {
    let request = await axios.post(baseURL, {
        fecha_partida : vuelo.fecha_partida,
        hora_partida : vuelo.hora_llegada, 
        fecha_llegada : vuelo.fecha_llegada, 
        hora_llegada : vuelo.hora_llegada, 
        aerolinea : vuelo.aerolinea, 
        puerta : vuelo.puerta, 
        estado : vuelo.estado, 
        parte_de : vuelo.parte_de, 
        llega_a : vuelo.llega_a, 
        saliendo : false
    });
    return request;
}

export const deleteVuelo = async id => {
    let response = await axios.delete(`${baseURL}/${id}`);
    return response;
}

