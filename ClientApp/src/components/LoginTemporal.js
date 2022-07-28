import React, { Component } from 'react';
import {obtenerUsuario} from '../api/api_calls'
import { Link, history, Redirect } from 'react-router-dom';
import { Layout } from './Layout';

import { createBrowserHistory } from 'history';



export class LoginTemporal extends Component {
  static displayName = LoginTemporal.name;

  constructor(){
    super();

    this.state = {
      usuario: '', 
      contra: ''
    }
  }

    verificar = async (e) => {
      
      e.preventDefault(); 

      if (this.state.usuario === "" || this.state.contra === ""){
        alert("Debe rellenar los espacios para proseguir.");
        return;
      }

      let usuario = await obtenerUsuario(this.state.usuario).then(response => response).catch(e => {
        if (e.request.statusText === "Not Found"){
          alert("El usuario no existe.  ");
        }
      });

      let respuesta = usuario.data;

      if (respuesta.contrasena != this.state.contra) {
        alert("Credenciales incorrectas.");
        return;
      }

      alert("Credenciales correctas.");
      localStorage.setItem("idUsuario", respuesta.usuario1);
      localStorage.setItem("rol", respuesta.rol);

      window.setTimeout(function() {window.location.href = '/mainpage';}, 500);
      
  }

  modificarEstado = (e) => {
    if (e.target.id === "usuario"){
      this.setState({ usuario : e.target.value });
    } else {
      this.setState({ contra: e.target.value });
    }
    console.log(this.state);
  }

  render() {

    let style = {
        marginLeft : '10px'
    }
    return (
        <div className="text-center">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={this.verificar}>
                <label htmlFor="usuario">Usuario</label>
                <input style={style} onChange={this.modificarEstado} type="text" id="usuario"/>
                <br />
                <br />
                <label htmlFor="contra">Contraseña</label>
                <input style={style} onChange={this.modificarEstado} type="password" id="contra"/>
                <br /><br />
                <button className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
  }
}
