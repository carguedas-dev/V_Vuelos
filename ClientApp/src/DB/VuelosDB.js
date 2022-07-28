import axiosInstance from "../axios/axios";

const VuelosDB = () => {

    //*Get Porque en algun momento se va a llamar no?
    /*async function getVuelos () {
        try{

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.get("vuelos").then((response) => {
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
    }*/

    async function postVuelos(idp, fecha_partidap, hora_partidap, fecha_llegadap, hora_llegadap, aerolineap, puertap,
        estadop, partedep, llegadep) {
        try{

            let payload = {
                id: idp,
                fecha_partida: fecha_partidap,
                hora_partida: hora_partidap,
                fecha_llegada: fecha_llegadap,
                hora_llegada: hora_llegadap,
                aerolinea: aerolineap,
                puerta: puertap,
                estado: estadop,
                partede: partedep,
                llegade: llegadep
            }

            let axiosClient = axiosInstance();

            let resultado = await axiosClient.post("vuelos", payload).then((response) => {
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
        //getVuelos,
        postVuelos
    };
}
 
export default VuelosDB;