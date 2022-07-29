import axios from 'axios';
import { getAerolineas } from './aerolineas';
import { getPaises } from './pais';
import { getPuertas } from './puertas';
import { getEstadosVuelo } from './estadoVuelo'

const baseURL = 'http://localhost:58214/api/Vuelos/';

export const getVuelos = async () => {
    let response = await axios.get(baseURL);
    let vuelos = response.data;
    let aerolineas = await getAerolineas();
    let paises = await getPaises();
    let estadosVuelo = await getEstadosVuelo();
    let puertas = await getPuertas();

    vuelos = helper(vuelos, aerolineas, 'aerolinea', 'id', 'nombre');
    vuelos = helper(vuelos, puertas, 'puerta', 'id', 'numero');
    vuelos = helper(vuelos, paises, 'llega_a', 'id', 'nombre')
    vuelos = helper(vuelos, paises, 'parte_de', 'id', 'nombre')
    vuelos = helper(vuelos, estadosVuelo, 'estado', 'id', 'descripcion')

    console.log('vuelos', vuelos)
    return vuelos
}

export const getVuelo = async id => {

}

export const postVuelo = async id => {
    
}

export const deleteVuelo = async id => {
    
}



const helper = (mainArray, SecondaryArray, mainId, secId, secTarget) => {
    let tempArray = [];
    for (const mainEl of mainArray) {
        for (const secEl of SecondaryArray) {
            if (mainEl[mainId] === secEl[secId]) {
                mainEl[mainId] = secEl[secTarget];
                tempArray.push(mainEl);
                break;
            }
        }
    }
    return tempArray;
}