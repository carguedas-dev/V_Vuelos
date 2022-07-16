import React, { Component } from 'react';
import { Collapse, Container, Modal, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {ModalComponent} from './ModalComponent'

export class ImageHolder extends Component {
  static displayName = ImageHolder.name;

  constructor (props) {
    super(props);

    this.state = {
      showModal : false
    }
    
    this.image = props.image;
    this.username = props.username;
  }

  toggleModal(){
    this.setState({showModal : true});
  }

  backToInitialModalState = () => {
    this.setState({showModal : false});
  }

  render () {
    return (
      <div>
        <div className="userImageContainer">
            <img src={this.props.image} onClick={this.toggleModal.bind(this)} alt="imagen_usuario" height="70px" width="70px" />
            <ModalComponent initialState={this.backToInitialModalState} isOpen={this.state.showModal}/>
        </div>
        <p className="userText">Bievenido<br />{this.props.username}</p>
      </div>
    );
  }
}
