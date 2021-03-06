import React from 'react';
import './Content.css';

function Content() {
    return (
        <div className="Content">
            <div className="content-center">
                <div className="home-box">
                    <div className="home-box-item">
                        <div className="icons">
                            <img src={"./img/icon-operator.png"} alt="operator"/>
                        </div>
                        <div className="box-title">
                            <h2 className="box-title-h2">IT Expertise</h2>
                            <p className="box-title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                                ut labore et dolore</p>
                        </div>
                    </div>
                    <div className="home-box-item">
                        <div className="icons">
                            <img src={"./img/icon-operator2.png"} alt="operator"/>
                        </div>
                        <div className="box-title">
                            <h2 className="box-title-h2">24/7 IT Support</h2>
                            <p className="box-title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                                ut labore et dolore</p>
                        </div>
                    </div>
                    <div className="home-box-item2 box-item-hover">
                        <div className="icons">
                            <h2 className="box-title-h">Custom Request</h2>
                        </div>
                        <div className="box-title">
                            <p className="box-title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                                ut labore et dolore</p>
                            <button className="box-title-btn">Find Solution<i className="icon fas fa-arrow-right"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home-about-content">
                    <div className="content-about-content">
                        <div className="about-content-img">
                            <img src={"./img/home-person1.png"} alt=""/>
                        </div>
                        <div className="about-content-title">
                            <div className="content-title-box">
                                <h2 className="content-title-h2">About US</h2>
                                <h1 className="content-title-h1">Let Us Be Your Partners Preferred IT Partner
                                </h1>
                                <p className="content-title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris
                                </p>
                            </div>
                            <div className="content-title-box2">
                                <div className="box2-item">
                                    <p className="box2-item-p">As one of the world???s largest IT Service Providers, our
                                        deep pool of over 130 certified engineers and IT support staff
                                    </p>
                                    <p className="box2-item-p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco</p>
                                </div>
                            </div>
                            <div className="content-title-box3">
                                <div className="title-box-btn">
                                    <button>Get Started</button>
                                </div>
                                <div className="title-box-title">
                                    <div className="title-box-box">
                                        <i className="fas fa-check"/>
                                        <p>We are committed to providing quality IT Services</p>
                                    </div>
                                    <div className="title-box-box">
                                        <i className="fas fa-check"/>
                                        <p>Provided by experts to help challenge critical activities</p>
                                    </div>
                                    <div className="title-box-box">
                                        <i className="fas fa-check"/>
                                        <p>Really know the true needs and expectations of customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="our-service-container">
                    <div className="home-service-content">
                        <div className="home-service-box1">
                            <div className="service-box-item1">
                                <div className="service-box-item-title">
                                    <div className="service-box-item-title-h">
                                        <h2>our services</h2>
                                        <h1>Solutions & Focus Areas</h1>
                                    </div>
                                    <div className="service-box-item-title-p">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor
                                            incididunt ut labore dolore magna aliqua</p>
                                    </div>
                                </div>
                                <div className="service-box-item-btn">
                                    <button className="service-box-btn">All Services</button>
                                </div>
                            </div>
                            <div className="service-box-item1">
                                <div className="service-box-item-title1">
                                    <img src={"./img/home-our-services-icons.png"} alt=""/>
                                    <h2>IT Management</h2>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <a href="#">Read More <i className="fas fa-arrow-right"/></a>
                                </div>
                            </div>
                            <div className="service-box-item1">
                                <div className="service-box-item-title1">
                                    <img src={"./img/home-our-services.png"} alt=""/>
                                    <h2>Cyber Security</h2>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <a href="#">Read More <i className="fas fa-arrow-right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="home-service-box2">
                            <div className="service-box-item2">
                                <div className="service-box-item-title1">
                                    <img src={"./img/home-our-services-icon1.png"} alt=""/>
                                    <h2>Cloud Computing</h2>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <a href="#">Read More <i className="fas fa-arrow-right"/></a>
                                </div>
                            </div>
                            <div className="service-box-item2">
                                <div className="service-box-item-title1">
                                    <img src={"./img/home-our-services-icons2.png"} alt=""/>
                                    <h2>Software Developer</h2>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <a href="#">Read More <i className="fas fa-arrow-right"/></a>
                                </div>
                            </div>
                            <div className="service-box-item2">
                                <div className="service-box-item-title2">
                                    <div className="service-box-item-title2-opacity">
                                        <div className="service-box-item-title2-btn">
                                            <i className="fas fa-play"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;