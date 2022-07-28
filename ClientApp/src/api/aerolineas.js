import axios from "axios";

const baseURL = 'http://localhost:58214/api/Aerolineas/';

export const getAerolineas = async () => {
    let aerolineasResponse = await axios.get(baseURL);
    let aerolineas = aerolineasResponse.data;
    console.log(aerolineas)
    //Importar Pais....
    return aerolineas;
}

export const getAerolinea = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    let aerolinea = response.data;

}

export const putAerolinea = async (id) => {

}

export const deleteAerolinea = async id => {

}