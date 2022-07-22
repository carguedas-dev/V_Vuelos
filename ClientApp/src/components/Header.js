import React, { Component } from 'react';
import { Container, Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import './ImageHolder.js'
import logo from '../assets/Logo.png'
import { ImageHolder } from './ImageHolder.js';
import { ModalComponent } from './ModalComponent.js'

export class Header extends Component {
  static displayName = Header.name;

  constructor (props){
    super(props);
    this.stateChange = props.stateChange;
  }

  render () {
    console.log("Rendering::Header");
    return (
      <header>
        <Navbar className="heightForHeader" light>
          <Container className='container'>
            <img onClick={this.stateChange} className="logo" src={logo} alt="V_Vuelos Logo" width={97} height={97}/>
            <ImageHolder image={logo} username={localStorage.getItem("idUsuario")}/>
          </Container>
        </Navbar>
      </header>
    );
  }
}
