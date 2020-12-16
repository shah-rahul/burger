import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop clicked={props.modalClosed} show={props.show}></Backdrop>
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
      className='Modal'>
      {props.children}
    </div>
  </Aux>
);
export default modal;
