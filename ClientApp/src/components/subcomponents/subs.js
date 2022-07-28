import React, { Component } from 'react';


export class AerolineasPais extends Component {
  static displayName = AerolineasPais.name;

  render() {
    return (
      <div>Componente: Aerolineas por pais</div>
    );
  }
}

export class General extends Component {
  static displayName = General.name;

  

  render() {

    let fontSizeStyle = {fontSize : '20px'}
    return (
      <div>
        <div style={{marginLeft : '22%', marginTop: '5%'}}>
          <h1>Bienvenido, {localStorage.getItem("idUsuario")}</h1>
          <br />
          <br />
          <p style={fontSizeStyle}>
              Seleccione una de las opciones superiores para acceder a diferentes opciones de configuración.
          </p>
          <br />
          <h4>Opciones:</h4>
          <br />
          <ul style={fontSizeStyle}>
            <li><b>Seguridad: </b>
              Permite crear usuarios y asignar sus roles dentro del sistema.   
            </li>
            <li><b>Administración: </b>
              Permite gestionar consecutivos, países, aerolíneas, y puertas de abordaje.   
            </li>
            <li><b>Consultas: </b>
              Permite consultar el estado general de la aplicación, por medio de una bitácora de eventos y errores. Asimismo, permite consultar las Aerolíneas por país, y las puertas por aerolínea.   
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export class BitacoraErrores extends Component {
  static displayName = BitacoraErrores.name;

  render() {
    return (
      <div>Componente: Bitacora Errores</div>
    );
  }
}

export class BitacoraEventos extends Component {
  static displayName = BitacoraEventos.name;

  render() {
    return (
      <div>Componente: Bitacora Eventos</div>
    );
  }
}



export class PuertasActivas extends Component {
  static displayName = PuertasActivas.name;

  render() {
    return (
      <div>Componente: Puertas Activas</div>
    );
  }
}