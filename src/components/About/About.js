import React from 'react';
import './About.css';

function About() {
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco
                                    </p>
                                </div>
                                <button className="Personal_btn">GET STARTED</button>
                                <div className="We_Personal">
                                    <p><i className="fas fa-check-double"/> We are committed to providing quality IT
                                        Services</p>
                                    <p><i className="fas fa-check-double"/> Provided by experts to help challenge
                                        critical activities</p>
                                    <p><i className="fas fa-check-double"/> Really know the true needs and
                                        expectations of customers</p>
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

            <div className="Laptop_page">
                <div className="Laptop_foreground">
                    <div className="Laptop_content">
                        <h2 className="Laptop_content_h2">Don’t Hesitate To Contact Us For Better Information And
                            Services</h2>
                        <p className="Laptop_content_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut
                            labore et dolore magna aliqual</p>
                    </div>
                </div>
            </div>

            <div className="Form_page">
                <div className="form_content">
                    <div className="form_form">
                        <div className="form_domestic">
                            <div className="form_name_form">
                                <div className="form_details">
                                    <div className="form_name">
                                        <h4>Name</h4>
                                        <input className="form_name_input" type="text" placeholder="Your name"/>
                                    </div>

                                    <div className="form_name">
                                        <h4>Email</h4>
                                        <input className="form_name_input " type="email"
                                               placeholder="Your Email"/>
                                    </div>

                                    <div className="form_name">
                                        <h4>Select</h4>
                                        <input className="form_name_input" placeholder="Inquiry" type="text"/>
                                    </div>

                                    <div className="form_name">
                                        <h4>Telephone</h4>
                                        <input className="form_name_input" type="number"
                                               placeholder="Your Phone"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form_comment">
                                <h4>Additional Details</h4>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Additional Details"
                                          className="text_area"/>
                            </div>

                            <div className="form_bt">
                                <button className="f_bt">SUBMIT REQUEST</button>
                            </div>
                        </div>
                        <div className="form_img">
                            <div className="img_back_form">
                                <div className="back_fond">
                                    <div className="form_img_content">
                                        <h1 className="form_img_h1">
                                            Perfect Solutions For <br/> Your Business
                                        </h1>
                                        <p className="image_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                        <div>
                                            <p><i className="fas fa-check-double"/> We are committed to providing
                                                quality IT Services</p>                                          <p><i
                                            className="fas fa-check-double"/> Provided by experts to help challenge
                                            critical activities
                                        </p>
                                            <p><i className="fas fa-check-double"/>Really know the true needs and
                                                expectations of customers
                                            </p>
                                            <p><i className="fas fa-check-double"/> Processes of achieving the
                                                excellence improvements
                                            </p>
                                        </div>
                                        <div className="image-bt">
                                            <button className="image_bt_1">GET A QUOTE</button>
                                            <button className="image_bt_2">GET STARTED <i
                                                className="fas fa-arrow-right"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form_grades">
                        <div className="form_grades_con">
                            <div className="form_grades_content">
                                <i className="fas fa-users"/>
                                <h1>4,145<i className="fal fa-plus plus_col"/></h1>
                                <p className="P_profession">Satisfied Clients</p>
                            </div>

                            <div className="form_grades_content">
                                <i className="fab fa-telegram-plane"/>
                                <h1>8,245<i className="fal fa-plus plus_col"/></h1>
                                <p className="P_profession">Completed Projects</p>
                            </div>


                            <div className="form_grades_content">
                                <i className="far fa-thumbs-up"/>
                                <h1>25<i className="fal fa-plus plus_col"/></h1>
                                <p className="P_profession">Years of Experience</p>
                            </div>

                            <div className="form_grades_content">
                                <i className="fas fa-globe-americas"/>
                                <h1>125<i className="fal fa-plus plus_col"/></h1>
                                <p className="P_profession">Professional Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="foto_personal_page">
                <div className="foto_personal_content">
                    <div className="foto_personal_text">
                        <div className="personal_text">
                            <h3 className="personal_text_head">OUE TEAM</h3>
                            <h1>Meet Professional Team</h1>
                            <p className="personal_text_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt
                                ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="foto_personal">
                        <div className="foto_person_img">
                            <img src={"./img/Personal_img/personal_1.jpg"} alt="photo"/>
                        </div>

                        <div className="foto_person_img">
                            <img src={"./img/Personal_img/personal_2.jpg"} alt="photo"/>
                        </div>

                        <div className="foto_person_img">
                            <img src={"./img/Personal_img/personal_3.jpg"} alt="photo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;