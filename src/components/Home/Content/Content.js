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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore</p>
                        </div>
                    </div>
                    <div className="home-box-item">
                        <div className="icons">
                            <img src={"./img/icon-operator2.png"} alt="operator"/>
                        </div>
                        <div className="box-title">
                            <h2 className="box-title-h2">24/7 IT Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore</p>
                        </div>
                    </div>
                    <div className="home-box-item2 box-item-hover">
                        <div className="icons">
                            <h2 className="box-title-h">Custom Request</h2>
                        </div>
                        <div className="box-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore</p>
                            <button className="box-title-btn">Find Solution<i className="icon fas fa-arrow-right"/></button>
                        </div>
                    </div>
                </div>
                <div className="home-about-content">

                </div>
            </div>
        </div>
    );
}

export default Content;