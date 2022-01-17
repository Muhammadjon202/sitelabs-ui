import React from 'react';

import './About.css';
import {Route, Routes, Router,} from 'react-router';

const About = () => {
    return (
        <div>
            <div className="About_Main">
                <div className="Background_hue">
                </div>
                <div className="Content_About">
                    <h1>About Us</h1>
                    <p>Home / About Us</p>
                </div>
            </div>
            <div className="About_Info">
                <div className="Content_info">
                    <div className="Personal_inform">
                        <div className="Personal_img">
                            <img src={"/img/Info_img.jpg"} alt="person_img"/>
                        </div>
                        <div className="Personal_date">
                            <h4 className="Personal_date_h4">ABOUT US</h4>
                            <div className="Personal_all">
                                <div className="Personal_notes">
                                    <h1 className="Personal_notes_h1">Let Us Be Your Partners <br/> Preferred IT Partner
                                    </h1>
                                    <p className="Personal_notes_p">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim
                                        veniam, quis nostrud exercitation ullamco laboris</p>
                                </div>
                                <div className="One_Personal">
                                    <h4>As one of the world’s largest IT Service Providers, our deep <br/> pool of over
                                        130
                                        certified engineers and IT support staff</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    </p>
                                </div>

                                <button className="Personal_btn">GET STARTED</button>

                                <div className="We_Personal">
                                    <p><i className="fas fa-check-double"></i> We are committed to providing quality IT Services</p>
                                    <p><i className="fas fa-check-double"></i> Provided by experts to help challenge critical activities</p>
                                    <p><i className="fas fa-check-double"></i> Really know the true needs and expectations of customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job_market">
                    <div className="job_market_container">
                        <img src={"img/About_icon/About_icon_1.png"} alt="photo"/>
                        <h3>Our Approach</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="job_market_container">
                        <img src={"img/About_icon/About_icon_2.png"} alt="photo"/>
                        <h3>Our Approach</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="job_market_container">
                        <img src={"img/About_icon/About_icon_3.png"} alt="photo"/>
                        <h3>Our Approach</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="job_market_container">
                        <img src={"img/About_icon/About_icon_4.png"} alt="photo"/>
                        <h3>Our Approach</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;