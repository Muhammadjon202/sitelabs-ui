import React from 'react';
import './Home.css';
import Content from "./Content/Content";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <div>
            <div className="Main">
                <div className="Main_container">
                    <div className="Container">
                        <div className="Con_flex">
                            <div className="Content_tx">
                                <div className="con_tx">
                                    <h1>Site Labs Technology</h1>
                                    <p className="con_tx-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do</p>
                                </div>
                            </div>
                            <div className="Content_video">
                                <div className="Video_img">
                                    <div className="play">
                                        <i className="fas fa-play"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Home;