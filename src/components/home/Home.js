import React from 'react';
import './Home.css';
import Content from "../Content/Content";

function Home() {
    return (
        <div>
            <div className="Main">
                <div className="Main_container">
                    <div className="Container">
                        <div className="Con_flex">
                            <div className="Content_tx">
                                <div className="con_tx">
                                    <h1>SiteLabs</h1>
                                    <p className="con_tx-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco</p>
                                </div>
                            </div>
                            <div className="Content_video">
                                <div className="Video_img">
                                    <img src={"./img/play_btn.png"} alt="photo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content/>
        </div>
    )
}

export default Home;