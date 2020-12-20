import React from "react";
import BurgerLogo from "../../../assets/Images/logo.png"
import "./Logo.css"
const logo = (props) => (
<div className="Logo" style={{height: props.height}}>
    <img src={BurgerLogo} alt="burgerBaaz"/>
</div>


);
export default logo;