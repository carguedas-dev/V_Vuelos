import axiosInstance from "../axios/axios";

const AerolineasDB = () => {

    async function getAerolineas () {
        try{

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.get("aerolineas").then((response) => {
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

    async function postAerolineas (idp, nombrep, paisp, imagenp) {
        try{

            let payload = {
                id: idp,
                nombre: nombrep,
                pais: paisp,
                imagen: imagenp
            }

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.post("aerolineas", payload).then((response) => {
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
        getAerolineas,
        postAerolineas
    };
}
 
export default AerolineasDB;