import React, { useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getUsuario, putUsuario } from '../api/usuario'

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

    this.contraActual = React.createRef();
    this.contraNueva = React.createRef();
    this.contraNuevaConfirmacion = React.createRef();
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

  async cambiarContra(){
    const contraActual = this.contraActual.current.value;
    const contraNueva = this.contraNueva.current.value;
    const contraNuevaConfirmacion = this.contraNuevaConfirmacion.current.value;

    let usuario = await getUsuario(localStorage.getItem('idUsuario')).then(res => res);

    if (usuario.contrasena !== contraActual){
      alert("La contraseña actual introducida no es correcta. Volver a intentar.")
      return;
    }

    if (contraNueva !== contraNuevaConfirmacion){
      alert("La nueva contraseña y su confirmación no son iguales. Volver a intentar.");
      return;
    }

    usuario.contrasena = contraNueva;

    let request = await putUsuario(usuario);
    if (request.status === 202) {
      alert(`Contraseña de usuario ${usuario.usuario1} ha sido actualizada correctamente.`);
      
    }
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
                <input ref={this.contraActual} style={{marginBottom : '15px'}} className="form-control text-center" type="password" placeholder='Contraseña actual' />
                <input ref={this.contraNueva} style={{marginBottom : '15px'}} className="form-control text-center" type="password" placeholder='Nueva contraseña' />
                <input ref={this.contraNuevaConfirmacion} className="form-control text-center" type="password" placeholder='Confirmar nueva contraseña' />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested.bind(this)}>Cancelar</Button>{' '}
                <Button color="secondary" onClick={this.cambiarContra.bind(this)}>Cambiar Contraseña</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
