import axiosInstance from "../axios/axios";

const PuertasDB = () => {

    async function getPuertas () {
        try{

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.get("puertas").then((response) => {
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

    async function postPuertas (idp, numerop, estadop) {
        try{

            let payload = {
                id: idp,
                numero: numerop,
                estado: estadop
            }

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.post("puertas", payload).then((response) => {
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
        getPuertas,
        postPuertas
    };
}
 
export default PuertasDB;