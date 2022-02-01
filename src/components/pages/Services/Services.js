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
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor<br/> incididunt ut labore et dolore magna aliqua</h5>
                        </div>
                    </div>
                    <div className="services_categories">
                        <div className="services_categories_first">
                            <div className="services_marketing_category first_categories">

                                <img src={"img/icons/strategy.png"} width={"75px"} alt=""/>
                                <h2>Marketing Strategy</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5>Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>

                            </div>
                            <div className="it_cyber">
                                <div className="services_it_category first_categories oth">
                                    <img src={"img/icons/document.png"} width={"75px"} alt=""/>
                                    <h2>IT Management</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <div className="services_read_category">
                                        <h5 className={"for_it"}>Read More </h5>
                                        <img src={"img/icons/right-row.png"} alt=""/>
                                    </div>
                                </div>
                                <div className="services_cyber_category first_categories oth">
                                    <img src={"img/icons/cyber.png"} width={"75px"} alt=""/>
                                    <h2>Cyber Security</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <div className="services_read_category">
                                        <h5>Read More </h5>
                                        <img src={"img/icons/right-row.png"} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services_categories_second">
                            <div className="services_cloud_category second_categories">

                                <img src={"img/icons/cloud.png"} width={"75px"} alt=""/>
                                <h2>Cloud Computing</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore dolore</p>
                                <div className="services_read_category">
                                    <h5>Read More </h5>
                                    <img src={"img/icons/right-row.png"} alt=""/>
                                </div>

                            </div>
                            <div className="soft_consult">
                                <div className="services_soft_category second_categories oth">
                                    <img src={"img/icons/computer.png"} width={"75px"} alt=""/>
                                    <h2>Software Developer</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <div className="services_read_category">
                                        <h5>Read More </h5>
                                        <img src={"img/icons/right-row.png"} alt=""/>
                                    </div>
                                </div>
                                <div className="services_consult_category second_categories oth">
                                    <img src={"img/icons/consult.png"} width={"75px"} alt=""/>
                                    <h2>IT Consultancy </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore</p>
                                    <div className="services_read_category">
                                        <h5>Read More </h5>
                                        <img src={"img/icons/right-row.png"} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services_clients">
                <div className="left">

                </div>
                <div className="right">
                    <h2>What Client Say<br/> About Us</h2>
                    <img src={"/img/Services/quote.png"} width={"80px"} alt=""/>
                    <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint</p>
                    <div className="person_img">
                        <img src={"/img/services/person.png"} alt="" width={"70px"}/>

                    </div>
                    <h3>Harley Burch</h3>
                    <p>Entrepreneur</p>
                </div>
            </div>
            <div className="services_plans">
                <div className="services_plans_text">
                    <p>OUR PRICE</p>
                    <h2>Choose Your Plan</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt
                        ut
                        labore et dolore magna aliqua </h5>
                </div>
                <div className="services_plans_content">
                    <div className="basic plans">
                        <h1>Basic Plan</h1>
                        <h2>$35</h2>
                        <p>Per Month</p>
                        <div className="plans_categories">
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} className={"categ_img"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} className={"categ_img"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} className={"categ_img"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} className={"categ_img"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                        </div>
                        <button>GET STARTED</button>

                    </div>
                    <div className="silver plans">
                        <h1>Basic Plan</h1>
                        <h2>$35</h2>
                        <p>Per Month</p>
                        <div className="plans_categories">
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                        </div>
                        <button>GET STARTED</button>
                    </div>
                    <div className="gold plans">
                        <h1>Basic Plan</h1>
                        <h2>$35</h2>
                        <p>Per Month</p>
                        <div className="plans_categories">
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                            <div className="cat_it_cons categ_plan">
                                <img src={"img/icons/chek.svg"} alt=""/>
                                <h4>IT Consultation</h4>
                            </div>
                            <hr/>
                        </div>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>
            <div className="services_provide">

            </div>
        </div>
    );
}

export default Services;