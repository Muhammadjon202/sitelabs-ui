import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer_page">
                <div className="Footer_logo">
                    <img className="footer_logo_img" src={"/img/logo.png"} alt="logo"/>
                </div>
                <div className="Footer_content_1">
                    <div className="footer_location">
                        <h5 className="Color_white">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do
                            eiusmod</h5>
                        <div className="flex">
                            <i className="fas fa-map-marker-alt"/> <h4 className="Color_white">Jl. Raya Kuta No.70, Kuta
                            - Bali 80361</h4>
                        </div>
                        <div className="flex">
                            <i className="fas fa-envelope"/>
                            <h4 className="Color_white">support@domain.com</h4>
                        </div>
                        <h4 className="Color_white">support@domain.com</h4>
                        <div className="flex">
                            <i className="fas fa-phone-square-alt"/>
                            <h4 className="Color_white">+998 90) 6986466</h4>
                        </div>
                    </div>
                    <div className="Footer_nav_1">


                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#" className="Color_white link_br">Home</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">About
                            Us</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">Services</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">Contact</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">Project</a>
                        </div>

                    </div>
                    <div className="Footer_nav_2">
                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#" className="Color_white link_br">Privacy
                            Policy</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#" className="Color_white link_br">Team Of
                            Service</a>
                        </div>
                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">Disclaimer</a>
                        </div>

                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#"
                                                                     className="Color_white link_br">Credits</a>
                        </div>
                        <div className="flex">
                            <i className="fas fa-chevron-right"/> <a href="#" className="Color_white link_br">FAQ</a>
                        </div>


                    </div>
                    <div className="Footer_nav_3">
                        <input type="text" className="footer_input" placeholder="Your Email Address"/>
                        <h4 className="Color_white">Get the latest news & updates</h4>
                        <div className="Footer_logo_link">
                            <div className="Footer_logo_link_foto">
                                <a href="#"><i className="fab fa-facebook"/></a>
                            </div>

                            <div className="Footer_logo_link_foto">
                                <a href="#"><i className="fab fa-twitter"/></a>
                            </div>
                            <div className="Footer_logo_link_foto">
                                <a href="#"><i className="fab fa-instagram"/></a>
                            </div>

                            <div className="Footer_logo_link_foto">
                                <a href="#"><i className="fab fa-linkedin-in"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer_content_2">
                        <h4>Technolgy & IT Solution Template Kit by Baliniz</h4>
                        <h4>Copyright © 2022 All rights reserved</h4>

                </div>
            </div>
        </div>
    )
};

export default Footer;