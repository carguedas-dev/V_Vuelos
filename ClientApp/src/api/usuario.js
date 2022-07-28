import axios from 'axios';
let puerto = 58214
let baseURL = `http://localhost:${puerto}/api/`;

export function getUsuario(id){
    const URL = baseURL + `usuarios/${id}`;

    let info = axios.get(URL).then( response => {
        return response
    });

    return info;
}

export function getUsuarios(){
    const URL = baseURL + `usuarios`;

    let info = axios.get(URL).then( response => {
        return response
    });

    return info;
}