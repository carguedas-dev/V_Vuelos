import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
export default class App extends Component {
  static displayName = App.name;

  /*
  userType:
    1 - Administrador
    2 - Seguridad
    3 - Consecutivo
    4 - Mantenimiento
    5 - Consulta
  */ 

  constructor() {
    super();
    this.userType = "5";
  }

  render () {
    return (
      <div>
        <Layout userType={this.userType}/>
      </div>
      
    );
  }
}
