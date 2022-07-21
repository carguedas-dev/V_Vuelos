//const axios = require('axios');
import axios from 'axios';


export const GetUsers = async () => {
    let info = await axios.get('https://jsonplaceholder.typicode.com/users');
    return info.data; //Returns an array.
}

