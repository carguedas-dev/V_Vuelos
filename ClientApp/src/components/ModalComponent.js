import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.isOpen,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.isOpen !== this.props.isOpen){
      this.setState({modal : this.props.isOpen})
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  cerrarSesion() {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("¿Seguro que desea cerrar sesión?")){
      localStorage.removeItem("idUsuario");
      localStorage.removeItem("rol");
      window.setTimeout(function() {window.location.href = '/';}, 500);
    };

    this.toggleAll();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} onClosed={this.props.initialState}>
          <ModalHeader toggle={this.toggle}>Opciones de Usuario</ModalHeader>
          <ModalBody>
            <div style={{textAlign: 'center'}}>
              <Button style={{width:'100%'}} color="success" onClick={this.toggleNested}>Cambiar contraseña</Button>
            </div>
            <br />
            <div style={{textAlign: 'center'}}>
              <Button onClick={this.cerrarSesion} style={{width:'100%'}} color="danger">Cerrar Sesión</Button>
            </div>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Cambio de contraseña</ModalHeader>
              <ModalBody>
                <input className="form-control text-center" type="text" placeholder='Introducir nueva contraseña' />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Cancelar</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>Aceptar</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
