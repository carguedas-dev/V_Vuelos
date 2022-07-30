import axios from 'axios';

const baseURL = 'http://localhost:58214/api/roles/';

export const getRoles = async () => {
    let response = await axios.get(baseURL);
    let roles = response.data;
    return roles;
}