import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show; 
  }
  render() {
    return (
      <Aux>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show}></Backdrop>
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
          className='Modal'>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
