import axios from "axios";
import { getPregunta, getPreguntas } from "./preguntaseguridad";


const baseURL = "http://localhost:58214/api/Usuarios";

export const getCrearUsuarios = async () => {
    let usuariosResponse = await axios.get(baseURL);
    let usuarios = usuariosResponse.data;
    let preguntas = await getPreguntas();
    for (const usuario of usuarios) {
        for (const pregunta of preguntas) {
            if (usuario.pregunta === pregunta.id) {
                usuario.pregunta = pregunta.descripcion;
                break;
            }
        }
    }
    return usuarios;
}

export const getCrearUsuario = async id => {
    let response = await axios.get(`${baseURL}${id}`);
    let usuario = response.data;
    let pregunta = await getPregunta(usuario.pregunta);
    usuario.pregunta = pregunta;
    return usuario;
}

export const postUsuario = async (contrasena, correo, pregunta_seguridad, respuesta_seguridad, usuario1) => {
    axios.post(baseURL, {
        contrasena: contrasena,
        correo: correo,
        pregunta_seguridad: pregunta_seguridad,
        respuesta_seguridad: respuesta_seguridad,
        usuario1: usuario1
    });
}