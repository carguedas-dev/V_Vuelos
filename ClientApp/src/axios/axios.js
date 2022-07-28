import axios from 'axios';

const axiosInstance = (header) => {
    let instancia
    if(header){
        instancia = axios.create({
            baseURL: 'http://localhost:58214/api/',
            headers : header
        }) 
    } else {
        instancia = axios.create({
            baseURL: 'http://localhost:58214/api/'            
        }) 
    }
      

    return instancia;     
}
export default axiosInstance;