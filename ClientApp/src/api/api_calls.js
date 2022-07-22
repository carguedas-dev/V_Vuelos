import axios from 'axios';
let puerto = 58214
let baseURL = `http://localhost:${puerto}/api/`;

export function obtenerUsuario(id){
    const URL = baseURL + `usuarios/${id}`;

    let info = axios.get(URL).then( response => {
        return response
    });

    return info;
}

export function obtenerUsuarios(){
    const URL = baseURL + `usuarios`;

    let info = axios.get(URL).then( response => {
        return response
    });

    return info;
}