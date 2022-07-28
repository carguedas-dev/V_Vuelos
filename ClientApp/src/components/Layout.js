import React, { Component } from 'react';
import { Header } from './Header';
import { SidePanel } from './SidePanel'
import '../assets/styles/Layout.css'
import './SubComponents'
import { SubComponents } from './SubComponents';

export class Layout extends Component {
  static displayName = Layout.name;

  constructor(props) {
    super(props);

    this.state = {
      currentPage : 'N/A',
      currentSubPage : 'N/A',
      userType : localStorage.getItem("rol")
    }

    switch(Number.parseInt(this.state.userType)){
      case 1:
        this.state.currentPage = 'Bienvenida';
        this.state.currentSubPage = 'General';
        break;
      case 2: 
        this.state.currentPage = 'Seguridad';
        this.state.currentSubPage = 'Crear Usuario';
        break;
      case 3: 
        this.state.currentPage = 'Administración';
        this.state.currentSubPage = 'Consecutivos';
        break;
      case 4:
        this.state.currentPage = 'Administración';
        this.state.currentSubPage = 'Países';
        break;
      case 5:
        this.state.currentPage = 'Consulta';
        this.state.currentSubPage = 'Bitácora Eventos';
        break;
      default:
        break;
    }

    /*
      mode == 1 -> Modifies current page and subpages
      mode == 2 -> Modifies subpage
      mode == 3 -> Logo click
       
    */ 
    this.stateChange = (cp, csp) => {
      this.setState({currentPage : cp, currentSubPage : csp});
    }

    this.stateChange_GeneralAdmin = () => {

      const userType = Number.parseInt(this.props.userType);

      switch(userType){
        case 1:
          this.setState({currentPage : "Bienvenida", currentSubPage : "General"});
          break;
        case 2: 
          this.setState({currentPage : "Seguridad", currentSubPage : "Crear Usuario"});
          break;
        case 3: 
          this.setState({currentPage : "Administración", currentSubPage : "Consecutivos"});
          break;
        case 4:
          this.setState({currentPage : "Administración", currentSubPage : "Países"});
          break;
        case 5:
          this.setState({currentPage : "Consulta", currentSubPage : "Bitácora Eventos"});
          break;
        default:
          break;
      }
      
    }
  }

  render () {
    console.log("Rendering::Layout");
    console.log("Data at LAYOUT level::", this.state.currentPage, this.state.currentSubPage);
    return (
      <div>
        <Header stateChange = {this.stateChange_GeneralAdmin}/>
        <div>
          <SidePanel stateChange = {this.stateChange} currentPage = {this.state.currentPage} currentSubPage = {this.state.currentSubPage} userType = {this.state.userType}/>
          <SubComponents stateChange = {this.stateChange} currentPage = {this.state.currentPage} currentSubPage = {this.state.currentSubPage} userType = {this.state.userType}/>
        </div>
      </div>
    );
  }
}
