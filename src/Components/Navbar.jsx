import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/form">Form</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
