import axios from 'axios';
let puerto = 58214
let baseURL = `http://localhost:${puerto}/api/`;

export function getUsuario(id) {
    const URL = baseURL + `usuarios/${id}`;

    let info = axios.get(URL).then(response => {
        return response.data
    });

    return info;
}

export const getUsuarios = async () => {
    const URL = baseURL + `usuarios`;
    let response = await axios.get(URL);
    let usuarios = response.data;
    return usuarios;
}

export function postUsuario(usuario) {
    const URL = baseURL + `usuarios`;

    let info = axios.post(URL, {
        usuario1: usuario.usuario,
        contrasena: usuario.contrasena,
        correo: usuario.correo,
        rol: usuario.rol,
        pregunta_seguridad: usuario.preguntaSeguridad,
        respuesta_seguridad: usuario.respuestaSeguridad
    });
    //alert(`Usuario ${usuario.usuario} introducido exitosamente`);
    return info;
}

export const putUsuario = async (u) => {

    const URL = `${baseURL}Usuarios/${u.usuario1}`

    let request = await axios.put(URL,
        {
            usuario1: u.usuario1,
            contrasena: u.contrasena,
            correo: u.correo,
            rol: +u.rol,
            pregunta_seguridad: u.pregunta_seguridad,
            respuesta_seguridad: u.respuesta_seguridad
        }
    );

    return request;
}