import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../NavigationItems';
import Aux from '../../../../hoc/Auxx/Auxx';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import './SideDrawer.css';
const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'].join(' ');
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'].join(' ');
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClasses}>
        <div className='key'>
          <Logo />
        </div>

        <nav>
          <Nav> </Nav>
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
