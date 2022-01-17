import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {

    const [] = useState();

    return (
        <header className="header">
            <div className="header_container">
                <div className="con_logo">
                    <a href="#">
                        <img src={"../img/site_labs.png"} alt="site.lab"/>
                    </a>
                </div>
                <div className="con_nav_bar">
                    <ul className="ul">
                        <li className="list_item"><Link to="/">Home</Link></li>
                        <li className="list_item"><Link to="/about">About</Link></li>
                        <li className="list_item"><a href="#">Contact</a></li>
                        <li className="bt"><a href="#">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;