import React from 'react';
import "./Services.css"

function Services() {
    return (
        <div className={"services"}>
            <div className="services_container">
                <div className="services_main">
                    <div className="services_content_about">
                        <h1>Services</h1>
                        <p>Home / Services</p>
                    </div>
                </div>
            </div>
            <div className="services_content">
                <div className="services_content_items">
                    <div className="services_container_text">
                        <p>OUR SERVICES</p>
                        <div className="services_container_text_description">
                            <h2>Solutions & Focus Areas</h2>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua</h5>
                        </div>
                    </div>
                    <div className="services_categories">
                        <div className="services_categories_first">
                            <div className="services_marketing_category first_categories">

                                <img src={"img/icons/strategy.png"} width={"75px"} alt=""/>
                                <h2>Marketing Strategy</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                           <div className="services_read_category">
                               <h5>Read More </h5>
                               <img src={"img/icons/right-row.png"} alt=""/>
                           </div>

                            </div>
                            <div className="services_it_category first_categories">
                                <img src={"img/icons/document.png"} width={"75px"} alt=""/>
                                <h2>IT Management</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5 className={"for_it"}>Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>
                            </div>
                            <div className="services_cyber_category first_categories">
                                <img src={"img/icons/cyber.png"} width={"75px"} alt=""/>
                                <h2>Cyber Security</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5 >Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="services_categories_second">
                            <div className="services_marketing_category second_categories">

                                <img src={"img/icons/cloud.png"} width={"75px"} alt=""/>
                                <h2>Cloud Computing</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5>Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>

                            </div>
                            <div className="services_soft_category second_categories">
                                <img src={"img/icons/computer.png"} width={"75px"} alt=""/>
                                <h2>Software Developer</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5>Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>
                            </div>
                            <div className="services_cyber_category second_categories">
                                <img src={"img/icons/consult.png"} width={"75px"} alt=""/>
                                <h2>IT Consultancy </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5 >Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;