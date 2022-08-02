import { timers } from 'jquery';
import React, { Component } from 'react';
import '../assets/styles/SidePanel.css'

export class SidePanel extends Component {
  static displayName = SidePanel.name;

  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      currentSubPage: props.currentSubPage,
      userType: props.userType
    }

    this.stateChange = props.stateChange;

    this.options = {
      General: ['Seleccione un menú general para acceder a sus submenús.'],
      Seguridad: ['Crear Usuario', 'Ver Usuarios'],
      Gestion: ['Consecutivos', 'Países', 'Aerolíneas', 'Puertas', 'Vuelos'],
      Consultas: ['Bitácora Eventos', 'Bitácora Errores', 'Aerolíneas por país', 'Puertas activas']
    }
  }

  actualizarSubPagina(e) {
    this.stateChange(this.state.currentPage, e.target.innerHTML);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage ||
      prevProps.currentSubPage !== this.props.currentSubPage) {
      this.setState({ currentPage: this.props.currentPage, currentSubPage: this.props.currentSubPage });
    }
  }

  seguridadFull() {
    return (
      <div className="buttonGroup">
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Seguridad[0]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Seguridad[1]}</button>
      </div>
    );
  }

  gestionFull() {
    return (
      <div className="buttonGroup">
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[0]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[1]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[2]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[3]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[4]}</button>
      </div>
    );
  }

  gestionConsecutivo() {
    return (
      <div className="buttonGroup">
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[0]}</button>
      </div>
    );
  }


  gestionMantenimiento() {
    return (
      <div className="buttonGroup">
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[1]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[2]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Gestion[3]}</button>
      </div>
    );
  }

  consultasFull() {
    return (
      <div className="buttonGroup">
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Consultas[0]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Consultas[1]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Consultas[2]}</button>
        <button onClick={this.actualizarSubPagina.bind(this)}>{this.options.Consultas[3]}</button>
      </div>
    );
  }

  renderOptions() {

    let userType = Number.parseInt(this.state.userType);

    if (userType === 1) {
      if (this.state.currentPage === 'Bienvenida') {

        let styleDiv = {
          paddingTop: '75%'
        }

        return (
          <div style={styleDiv}>{this.options.General}</div>
        );
      } else if (this.state.currentPage === 'Seguridad') {
        return (
          this.seguridadFull()
        );
      } else if (this.state.currentPage === 'Administración') {
        return (
          this.gestionFull()
        );
      } else if (this.state.currentPage === 'Consulta') {
        return (
          this.consultasFull()
        );
      }
    } else if (userType === 2) {
      if (this.state.currentPage === 'Seguridad') {
        return (
          this.seguridadFull()
        );
      }
    } else if (userType === 3) {
      if (this.state.currentPage === 'Administración') {
        return (
          this.gestionConsecutivo()
        );
      }
    } else if (userType === 4) {
      if (this.state.currentPage === 'Administración') {
        return (
          this.gestionMantenimiento()
        );
      }
    } else if (userType === 5) {
      if (this.state.currentPage === 'Consulta') {
        return (
          this.consultasFull()
        );
      }
    }
  }

  render() {
    return (
      <div className="sidePanel">

        <p className="navigationLocator">
          Usted está en <span className="currentLocation">{this.state.currentPage} <b>&gt;</b> {this.state.currentSubPage}</span>
        </p>
        <div className="sideOptions">
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}
