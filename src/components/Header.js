import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
    <div>
        <h4><NavLink to="/" exact>Home</NavLink></h4>
        <h4><NavLink to="/about" exact>About</NavLink></h4>
        <h4><NavLink to="/contact" exact>Contact</NavLink></h4>
    </div>
)
