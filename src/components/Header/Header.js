import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="con_logo">
                    <a href="#">
                        <img src={"../img/sitelabs.png"} alt="site.lab"/>
                    </a>
                </div>
                <div className="con_nav_bar">
                    <ul className="ul">
                        <li className="list_item"><Link to="/">Home</Link></li>
                        <li className="list_item"><Link to="/about">About</Link></li>
                        <li className="list_item"><Link to="/">Services</Link></li>
                        <li className="list_item"><Link to="/">Contact</Link></li>
                        <li className="bt"><Link to="/about">Get Started</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;