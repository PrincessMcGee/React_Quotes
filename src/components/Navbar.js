import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a className="brand-logo">Cute Quotes</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter (Navbar)