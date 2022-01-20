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

                                </div>
                            </div>
                            <div className="content-title-box3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;