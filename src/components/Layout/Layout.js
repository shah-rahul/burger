import Aux from '../../hoc/Auxx';
import './Layout.css';
import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/NavigationItems/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideBar open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className='Content'>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
