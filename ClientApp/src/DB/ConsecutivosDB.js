import axiosInstance from "../axios/axios";

const ConsecutivosDB = () => {

    async function getConsecutivos () {
        try{

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.get("consecutivos").then((response) => {
                return response;
                }).catch((error) => {
                    console.log(error)
                    return null;
                }).then((response) => {
                    return response;
                })

            return resultado;

        } catch (error) {
            // NProgress.done();
            console.log(error)
            return null;
        }
    }

    async function putConsecutivos (idp, valorp, descripcionp, prefijop) {
        try{

            let payload = {
                id: idp,
                valor: valorp,
                descripcion: descripcionp,
                prefijo: prefijop
            }

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.post("consecutivos", payload).then((response) => {
                return response;
                }).catch((error) => {
                    console.log(error)
                    return null;
                }).then((response) => {
                    return response;
                })

            return resultado;

        } catch (error) {
            // NProgress.done();
            console.log(error)
            return null;
        }
    }

    return {
        getConsecutivos,
        putConsecutivos
    };
}
 
export default ConsecutivosDB;