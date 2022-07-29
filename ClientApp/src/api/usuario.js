import axios from 'axios';
let puerto = 58214
let baseURL = `http://localhost:${puerto}/api/`;

export function getUsuario(id){
    const URL = baseURL + `usuarios/${id}`;

    let info = axios.get(URL).then( response => {
        return response.data
    });

    return info;
}

export function getUsuarios(){
    const URL = baseURL + `usuarios`;

    let info = axios.get(URL);

    return info;
}

export function postUsuario(usuario){
    const URL = baseURL + `usuarios`;

    let info = axios.post(URL, {
        usuario1 : usuario.usuario,
        contrasena : usuario.contrasena,
        correo : usuario.correo,
        rol : usuario.rol,
        pregunta_seguridad : usuario.preguntaSeguridad,
        respuesta_seguridad : usuario.respuestaSeguridad
      });
    //alert(`Usuario ${usuario.usuario} introducido exitosamente`);
    return info;
}

export function putUsuario(usuario){
    const URL = baseURL + `usuarios/${usuario.usuario}`;

    let info = axios.put(baseURL, {
        usuario1 : usuario.usuario,
        contrasena : usuario.contrasena,
        correo : usuario.correo,
        rol : usuario.rol,
        pregunta_seguridad : usuario.preguntaSeguridad,
        respuesta_seguridad : usuario.respuestaSeguridad
      });

    alert(`Rol de usuario ${usuario.usuario} asignado correctamente.`);
    return info;

}