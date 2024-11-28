import React from 'react'

export default function About() {
    return (
        <div>
            <div id='about_section' data-section className="about_main">
                <div className="about_div">
                    

                    <div className="about_text">
                        <h3>My Intro</h3>
                        <h1>About Me</h1>

                        <p>
                            I'm a web developer focused on creating responsive, user-friendly websites with clean, modern design.
                            Skilled in HTML, CSS, JavaScript, and React, I bring projects to life with a strong attention to detail, ensuring both functionality and aesthetic appeal.
                            I'm passionate about building seamless digital experiences that make a positive impact.
                        </p>

                        <div className="about_info_flex">
                            <div className="about_info_right">
                                <p>Name :</p>
                                <p>Date of birth :</p>
                                <p>Address :</p>
                                <p>Zip code :</p>
                                <p>Emai :</p>
                                <p>Phone :</p>
                            </div>

                            <div className="about_info_left">
                                <p>Aastha Katharotiya</p>
                                <p>January 08, 2006</p>
                                <p>Rajkot, Gujarat</p>
                                <p>360004</p>
                                <p>kathalrotiyaashtha2006@gmail.com</p>
                                <p>+91 635-546-356-0</p>
                            </div>
                        </div>

                        <div className="about_flex">
                            <div className="about_hobby">
                                <button>
                                    <i class="ri-customer-service-2-fill"></i>
                                    {/* <i class="fa-solid fa-headphones"></i> */}
                                </button>
                                <h3>Music</h3>
                            </div>

                            <div className="about_hobby">
                                <button>
                                    <i class="fa-solid fa-person-walking-luggage"></i>
                                </button>
                                <h3>Travel</h3>
                            </div>

                            <div className="about_hobby">
                                <button>
                                    <i class="fa-solid fa-palette"></i>
                                </button>
                                <h3>Drawing</h3>
                            </div>

                            <div className="about_hobby">
                                <button>
                                    <i class="fa-solid fa-house-flag"></i>
                                </button>
                                <h3>Adventure</h3>
                            </div>
                        </div>

                    </div>

                    <div className="about_img">
                        <img src="Aastha_info.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
