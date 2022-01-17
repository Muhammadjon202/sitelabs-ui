import React from 'react';
import './Content.css';

function Content() {
    return (
        <div className="Content">
            <div className="home-box">
                <div className="home-box-item">
                    <div className="icons">
                        <img src={"./img/icon-operator.png"} alt="operator"/>
                    </div>
                    <div className="box-title">
                        <h2>IT Expertise</h2>
                    </div>
                </div>
                <div className="home-box-item">
                    <div className="icons">
                        <img src={"./img/icon-operator2.png"} alt="operator"/>
                    </div>
                    <div className="box-title">

                    </div>
                </div>
                <div className="home-box-item">
                    <div className="icons">
                        <h2>Custom Request</h2>
                    </div>
                    <div className="box-title">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;