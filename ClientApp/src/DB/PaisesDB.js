import axiosInstance from "../axios/axios";

const PaisesDB = () => {

    async function getPaises () {
        try{

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.get("paises").then((response) => {
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

    async function postPaises (idp, nombrep, imagenp) {
        try{

            let payload = {
                id: idp,
                nombre: nombrep,
                imagen: imagenp
            }

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.post("paises", payload).then((response) => {
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
        getPaises,
        postPaises
    };
}
 
export default PaisesDB;