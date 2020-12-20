import React from 'react';
import "./NavigationItems.css"
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link="/" active >BurgerBuilder</NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);
export default navigationItems;
