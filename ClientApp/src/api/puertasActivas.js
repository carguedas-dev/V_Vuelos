import axios from 'axios';

const baseURL = 'http://localhost:58214/api/PuertasActivas/';

export const getPuertasActivas = async () => {
    let response = await axios.get(baseURL);
    let puertasActivas = response.data;
    return puertasActivas;
}