import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import {LoginTemporal} from './components/LoginTemporal'

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
    this.userType = "1";
  }

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginTemporal} />
            <Route path='/mainpage' component={Layout} />
          </Switch>
        </Router>
        {/* <Layout userType={this.userType}/> */}
      </div>
      
    );
  }
}
