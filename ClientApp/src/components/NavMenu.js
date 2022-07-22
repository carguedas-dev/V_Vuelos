import React, { Component } from 'react';
import '../assets/styles/NavMenu.css'
import securityIcon from '../assets/securityIcon.png' 
import adminIcon from '../assets/adminIcon.png'
import consultasIcon from '../assets/consultasIcon.png'
import { css, jsx } from '@emotion/react'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props){
    super(props);
    
    this.state = {
      currentPage : props.currentPage,
      currentSubPage : props.currentSubPage, 
      userType : props.userType
    }

    this.stateChange = props.stateChange;

    this.navBar = {
      backgroundImage : 'transparent',
      backgroundColor : 'rgb(8, 60, 165)',
      height : '7vh'
    }

    this.li = {
      display : 'inline-block',
      padding : '0.2% 9%',
      marginTop : '10px',
      borderRadius : '20px',
    }

    this.button = {
      backgroundColor: 'transparent', 
      border: 'none', 
      color: 'white', 
      fontWeight: 'bolder',
      fontSize: '15px'
    }

    this.ul = {
      textAlign: 'center'
    }

  }

  componentDidUpdate(prevProps){
    if (prevProps.currentPage !== this.props.currentPage ||
        prevProps.currentSubPage !== this.props.currentSubPage) {
      this.setState({currentPage : this.props.currentPage, currentSubPage : this.props.currentSubPage});
    }
  }

  handleNavBarClick(e) {
    let clickedButton = e.target; 
    if (clickedButton.nodeName === "LI"){
      let children = clickedButton.childNodes;
      clickedButton = children[1].innerHTML
    } else if (clickedButton.nodeName === "IMG") {
      clickedButton = clickedButton.parentNode.childNodes[1].innerHTML;
    } else {
      clickedButton = e.target.innerHTML;
    }

    switch(clickedButton){
      case "Seguridad":
        this.stateChange("Seguridad", "Crear Usuario");
        break; 
      case "Administración": 
        let cp = "Administración";
        let csp = "";
        if (this.state.userType !== "1"){
          csp = "Países";
        } else {
          csp = "Consecutivos";
        }
        this.stateChange(cp, csp);
        break;
      case "Consultas":
        this.stateChange("Consulta", "Bitácora Eventos");
        break;
      default:
        break;
    }
  }

  administrador() {
    return (
      <div>
        <nav className="navMenuStyle" style={this.navBar}>
            <ul style={this.ul}>
                <li onClick={this.handleNavBarClick.bind(this)} style={this.li}>
                  <img src={securityIcon} alt="" height={25} width={25} />
                  <button style={this.button}>Seguridad</button>
                </li>
                <li onClick={this.handleNavBarClick.bind(this)} style={this.li}>
                  <img src={adminIcon} alt="" height={25} width={25} />
                  <button style={this.button}>Administración</button>
                </li>
                <li onClick={this.handleNavBarClick.bind(this)} style={this.li}>
                  <img src={consultasIcon} alt="" height={25} width={25} />
                  <button style={this.button}>Consultas</button>
                </li>
            </ul>
        </nav>
      </div>
    );
  }

  
  seguridad() {

    let li = Object.assign({}, this.li);
    li.padding = '0.2% 35%';
    return (
      <div>
        <nav style={this.navBar}>
          <ul style={this.ul}>
              <li onClick={this.handleNavBarClick.bind(this)} style={li}>
                <img src={securityIcon} alt="" height={25} width={25} />
                <button style={this.button}>Seguridad</button>
              </li>
          </ul>
        </nav>
      </div>
    );
  }

  gestion() {
    let li = Object.assign({}, this.li);
    li.padding = '0.2% 35%';
    return (
      <div>
        <nav style={this.navBar}>
          <ul style={this.ul}>
              <li onClick={this.handleNavBarClick.bind(this)} style={li}>
                <img src={adminIcon} alt="" height={25} width={25} />
                <button style={this.button}>Administración</button>
              </li>
          </ul>
        </nav>
      </div>
    );
  }

  consulta() {
    let li = Object.assign({}, this.li);
    li.padding = '0.2% 35%';
    return (
      <div>
        <nav style={this.navBar}>
          <ul style={this.ul}>
              <li onClick={this.handleNavBarClick.bind(this)} style={li}>
                <img src={consultasIcon} alt="" height={25} width={25} />
                <button style={this.button}>Consulta</button>
              </li>
          </ul>
        </nav>
      </div>
    );
  }

  render () {
    let userType = Number.parseInt(this.state.userType);
    console.log("Rendering::NavMenu");
    console.log("Data at NAVMENU level::", this.state.currentPage, this.state.currentSubPage);
    switch(userType){
      case 1:
        return this.administrador();
      case 2:
        return this.seguridad();
      case 3:
      case 4:
        return this.gestion();
      case 5:
        return this.consulta();
      default:
        return null;
    }
  }
}
