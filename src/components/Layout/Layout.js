import React from 'react';
import Aux from '../../hoc/Auxx';
import  './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SIdeDrawer, BackDrop</div>
    <main className="Content" >{props.children}</main>
  </Aux>
);
export default layout;
