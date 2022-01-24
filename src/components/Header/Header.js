import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
    const [active, setActive] = useState(0);

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
                        <li onClick={() => setActive(0)} className={`list_item${active === 0 ? " active" : ""}`}>
                            <span> </span><Link to="/">Home</Link></li>
                        <li onClick={() => setActive(1)} className={`list_item${active === 1 ? " active" : ""}`}>
                            <span> </span><Link to="/about">About</Link></li>
                        <li onClick={() => setActive(2)} className={`list_item${active === 2 ? " active" : ""}`}>
                            <span> </span><Link to="/services" >Services</Link></li>
                        <li onClick={() => setActive(3)} className={`list_item${active === 3 ? " active" : ""}`}>
                            <span> </span><Link to="/">Contact</Link></li>
                        <li className="bt"><Link to="/about">Get Started</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
