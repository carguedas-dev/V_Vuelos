import React, { Component } from 'react';
import { NavMenu } from './NavMenu'

import CrearUsuario from './subcomponents/CrearUsuario';
import VerUsuarios from './subcomponents/VerUsuarios';

import Consecutivo from './subcomponents/Consecutivo';
import Aerolineas from './subcomponents/Aerolineas';
import Paises from './subcomponents/Paises';
import Puertas from './subcomponents/Puertas';
import CrearVuelo from './subcomponents/CrearVuelo'

import TestingAxios from './subcomponents/TestingAxios';

import {
  General,
  AerolineasPais,
  BitacoraErrores,
  BitacoraEventos,
  PuertasActivas,
}
  from './subcomponents/subs'

export class SubComponents extends Component {
  static displayName = SubComponents.name;

  constructor(props) {
    super(props);

    this.stateChange = props.stateChange;

    this.state = {
      currentPage: props.currentPage,
      currentSubPage: props.currentSubPage,
      userType: props.userType
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage ||
      prevProps.currentSubPage !== this.props.currentSubPage) {
      this.setState({ currentPage: this.props.currentPage, currentSubPage: this.props.currentSubPage });
    }
  }

  render() {
    console.log("Rendering::SubComponents");
    console.log("Data at SUBCOMPONENTS level::", this.state.currentPage, this.state.currentSubPage);

    let componenteARenderizar;

    switch (this.state.currentSubPage) {
      case "General":
        componenteARenderizar = <General />
        break;
      case "Crear Usuario":
        componenteARenderizar = <CrearUsuario />
        break;
      case "Ver Usuarios":
        componenteARenderizar = <VerUsuarios />
        break;
      case "Consecutivos":
        componenteARenderizar = <Consecutivo />
        break;
      case "Países":
        componenteARenderizar = <Paises />
        break;
      case "Aerolíneas":
        componenteARenderizar = <Aerolineas />
        break;
      case "Puertas":
        componenteARenderizar = <Puertas />
        break;
      case "Bitácora Eventos":
        componenteARenderizar = <BitacoraEventos />
        break;
      case "Bitácora Errores":
        componenteARenderizar = <TestingAxios />
        break;
      case "Aerolíneas por país":
        componenteARenderizar = <AerolineasPais />
        break;
      case "Puertas activas":
        componenteARenderizar = <PuertasActivas />
        break;
      case "Vuelos":
        componenteARenderizar = <CrearVuelo />
        break;
      default:
        break;
    }

    return (
      <div>
        <NavMenu className="navMenuStyle" stateChange={this.stateChange} currentPage={this.state.currentPage} currentSubPage={this.state.currentSubPage} userType={this.state.userType} />
        {componenteARenderizar}
      </div>
    );
  }
}
