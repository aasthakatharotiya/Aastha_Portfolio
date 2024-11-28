import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("header").css("background-color", "white");
            $("header").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        } else {
            $("header").css("background-color", "transparent");
            $("header").css("box-shadow", "none");
        }
    });
});


// Counter 

(() => {
    const counter = document.querySelectorAll('.counter');
    // covert to array
    const array = Array.from(counter);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})()



// Progress Bar 

function SkillProgress({ skillName, defaultPercentage, innerImage }) {
    const [progress, setProgress] = useState(0);
    const [hovered, setHovered] = useState(false);

    // Start progress animation on hover
    useEffect(() => {
        if (hovered) {
            let currentProgress = 0;
            const interval = setInterval(() => {
                if (currentProgress < defaultPercentage) {
                    currentProgress++;
                    setProgress(currentProgress);
                } else {
                    clearInterval(interval);
                }
            }, 20);

            return () => clearInterval(interval); // Cleanup on unmount or hover-out
        } else {
            setProgress(defaultPercentage); // Reset to default when not hovered
        }
    }, [hovered, defaultPercentage]);

    const angle = (progress / 100) * 360;

    return (
        <div
            className="skill_div"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <h2>{skillName}</h2>
            <div className="progress-container">
                <div
                    className="progress-circle"
                    style={{
                        background: `conic-gradient(
                            #B1B493 ${angle}deg,
                            #d4d4d4 ${angle}deg
                        )`,
                    }}
                ></div>
                <div className="progress-inner">
                    <div
                        className="progress-image"
                        style={{
                            backgroundImage: `url(${innerImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            height: "100%",
                            width: "100%",
                            filter: "blur(2px)", // Apply blur to the background image
                            position: "absolute", // Ensure it stays as the background
                            top: 0,
                            left: 0,
                            zIndex: -1, // Keep it behind the text
                        }}
                    ></div>
                </div>
                <div className="progress-text">{`${progress}%`}</div>
            </div>
        </div>
    );
}




export default function Portfolio() {

    // Navbar

    useEffect(() => {
        const sections = document.querySelectorAll("div[data-section]");
        const navLinks = document.querySelectorAll(".navbar a");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id");
                    const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

                    if (entry.isIntersecting) {
                        navLinks.forEach((link) => link.classList.remove("active"));
                        navLink.classList.add("active");
                    }
                });
            },
            { threshold: 0.6 } // Adjust visibility threshold
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup on component unmount
    }, []);





    // Slider

    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                400: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    }, [])




    // const skills = [
    //     { name: 'HTML', percentage: 90 },
    //     { name: 'CSS', percentage: 96 },
    //     { name: 'jQuery', percentage: 80 },
    //     { name: 'JavaScript', percentage: 85 },
    //     { name: 'React JS', percentage: 90 },
    //     { name: 'Bootstrap', percentage: 100 },
    //     { name: 'DSA', percentage: 80 },
    //     { name: 'PHP', percentage: 50 },
    // ];

    const skills = [
        { name: 'HTML', percentage: 90},
        { name: 'CSS', percentage: 96},
        { name: 'jQuery', percentage: 80},
        { name: 'JavaScript', percentage: 85},
        { name: 'React JS', percentage: 90},
        { name: 'Bootstrap', percentage: 100},
        { name: 'DSA', percentage: 80},
        { name: 'PHP', percentage: 50},
    ];


    function filterProjects(category) {
        const projects = document.querySelectorAll('.project_img');

        projects.forEach(project => {
            if (category === 'All' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        // Update active color for selected category
        document.querySelectorAll('.project_head p').forEach(p => {
            p.classList.remove('active');
        });
        document.querySelector(`.project_head p[data-category="${category}"]`).classList.add('active');
    }

    const [popup, setPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    const handlePopup = (content) => {
        setPopupContent(content);
        setPopup(true);
    };

    const closePopup = () => {
        setPopup(false);
    };

    const blogPosts = [
        {
            title: "How to Planning For Creative Web-Site?",
            category: "Web Development",
            date: "26 Nov 2024",
            img: "Blog_1.png",
            description: "Learn how to plan a creative and functional website with best practices.",
        },
        {
            title: "How to Planning For Creative Web Design?",
            category: "Web Design",
            date: "26 Nov 2024",
            img: "Blog_2.png",
            description: "Explore techniques to design visually stunning and effective websites.",
        },
        {
            title: "How to Work With Database Management?",
            category: "Database",
            date: "26 Nov 2024",
            img: "Blog_3.jpg",
            description: "Understand the basics of database management systems and their uses.",
        },
        {
            title: "Developer Work With All Team Members",
            category: "Team Work",
            date: "26 Nov 2024",
            img: "https://media.istockphoto.com/id/996082438/photo/software-developing-team-working-in-the-office.jpg?s=612x612&w=0&k=20&c=xRducgI4LX08P6muob_7PAnCxsOO2kuvX4vIOQpQP28=",
            description: "Discover how developers collaborate effectively within teams.",
        },
        {
            title: "What The Outcome Of Our Creatable Web?",
            category: "Marketing",
            date: "26 Nov 2024",
            img: "Blog_5.jpg",
            description: "Understand how web design impacts marketing and user engagement.",
        },
        {
            title: "Complete Our Website With Successfully...",
            category: "Feedback",
            date: "26 Nov 2024",
            img: "Blog_6.jpeg",
            description: "Learn how to gather feedback and ensure website success.",
        },
    ];




    //Contact

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")
    const [hobby, setHobby] = useState("")

    const handleSignUp = () => {
        if (name && email && number && city && password && hobby) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(data => {
                    setDoc(doc(db, "users", data.user.uid), {
                        name, email, number, city, hobby
                    })
                    console.log("User added")

                    // Clear inputs if sign-up is successful
                    setName("")
                    setNumber("")
                    setCity("")
                    setEmail("")
                    setPassword("")
                    setHobby("")

                })
                .catch(error => {
                    console.error("Error during sign up:", error)
                })
        }
        else {
            alert("Pleasse, Fill Out All Field")
        }
    }


    return (
        <div>
            <center>

                <header>
                    <div className="header_div">
                        <div className="logo">
                            <h1>Portfolio.</h1>
                            {/* <img src="Logo.png" alt="" /> */}

                            {/* <img src="Logo_main.png" alt="" /> */}
                        </div>

                        <div className="navbar">
                            <a href="#home_section">HOME</a>
                            <a href="#about_section">ABOUT</a>
                            <a href="#skills_section">SKILLS</a>
                            <a href="#project_section">PROJECT</a>
                            <a href="#blog_section">BLOG</a>
                            <a href="#contact_section">CONTACT</a>
                        </div>

                        <div className="menu">
                            <button><i class="fa-solid fa-bars-staggered"></i></button>
                        </div>

                        <div className="menu_div">
                            <div className="cross">
                                <button><i class="fa-solid fa-x"></i></button>
                            </div>

                            <div className="menu_navbar">
                                <a href="#home_section">HOME</a>
                                <a href="#about_section">ABOUT</a>
                                <a href="#skills_section">SKILLS</a>
                                <a href="#project_section">PROJECT</a>
                                <a href="#blog_section">BLOG</a>
                                <a href="#contact_section">CONTACT</a>

                                <a href="Aastha_Resume.pdf" target="_blank">
                                    <button>Download CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>



                {/* <div className="head">
                    <div className="head_text">
                        <h1>
                            I'm Aastha Katharotiya <br />
                            A Full Stack Development
                        </h1>
                        <br />
                        <button>HIRE ME</button>
                    </div>
                </div> */}


                <div id='home_section' data-section className="head" style={{backgroundImage: "url('Aastha_head.jpeg')", backgroundSize: "70% 100%", backgroundRepeat : "no-repeat", backgroundPosition: "100% 100%"}}>
                    {/* <div className="head_rotate_1">
                        <div className="head_rotate_2">
                            <div className="head_rotate_text">
                                <h3>Web Developer</h3>
                                <h1>Hi, I'm Aastha. This is My Favorite Work.</h1>
                                <button>HIRE ME</button>
                            </div>
                        </div>
                    </div> */}

                    <div class="angled_section_color">
                        <div class="angled_section">

                        </div>
                    </div>

                    <div class="head_content">
                        <h3>Web Development</h3>
                        <h1>Hi, I'm <span>Aastha.</span> This is My Favorite Work.</h1>
                        <a href="Aastha_Resume.pdf" target="_blank">
                            <button>Download CV</button>
                        </a>

                    </div>
                </div>



                <div className="counter_main">
                    <div className="counter_div">
                        <div className="count_text">
                            <div className="counter_flex_text">
                                <div className="counter_left">
                                    <button>
                                        <i class="fa-solid fa-computer"></i>
                                    </button>
                                </div>
                                <div className="counter_right">
                                    <div className="counter_flex">
                                        <h1 className="counter" data-speed="3000">750</h1>
                                        <h1>+</h1>
                                    </div>
                                    <h3>Project Complete</h3>
                                </div>
                            </div>
                        </div>

                        <div className="count_text">
                            <div className="counter_flex_text">
                                <div className="counter_left">
                                    <button>
                                        <i class="fa-solid fa-mug-hot"></i>
                                    </button>
                                </div>
                                <div className="counter_right">
                                    <div className="counter_flex">
                                        <h1 className="counter" data-speed="3000">478</h1>
                                        <h1>+</h1>
                                    </div>
                                    <h3>Cups of coffee</h3>
                                </div>
                            </div>
                        </div>

                        <div className="count_text">
                            <div className="counter_flex_text">
                                <div className="counter_left">
                                    <button>
                                        <i class="fa-solid fa-chart-line"></i>
                                    </button>
                                </div>
                                <div className="counter_right">
                                    <div className="counter_flex">
                                        <h1 className="counter" data-speed="3000">780</h1>
                                        <h1>+</h1>
                                    </div>
                                    <h3>Training Days</h3>
                                </div>
                            </div>
                        </div>

                        <div className="count_text">
                            <div className="counter_flex_text">
                                <div className="counter_left">
                                    <button>
                                        <i class="fa-solid fa-building"></i>
                                    </button>
                                </div>
                                <div className="counter_right">
                                    <div className="counter_flex">
                                        <h1 className="counter" data-speed="3000">568</h1>
                                        <h1>+</h1>
                                    </div>
                                    <h3>Company Visit</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div id='about_section' data-section className="about_main">
                    <div className="about_div">
                        <div className="about_img">
                            <img src="Aastha_info.jpg" alt="" />
                        </div>

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
                    </div>
                </div>



                {/* <div className="skill_main">
                    <h3 className="head_main_h3">Skill</h3>
                    <h1 className="head_main_h1">My Skills</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    <div className="technical_skill">
                        <div className="skill_div" data-default="90" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>HTML</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">90%</div>
                            </div>
                        </div>

                        <div className="skill_div" data-default="96" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>CSS</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">96%</div>
                            </div>
                        </div>

                        <div className="skill_div" data-default="80" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>jQuery</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">80%</div>
                            </div>
                        </div>

                        <div className="skill_div" data-default="85" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>JavaScript</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">85%</div>
                            </div>
                        </div>

                        <div className="skill_div" data-default="90" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>React JS</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">90%</div>
                            </div>
                        </div>

                        <div className="skill_div" data-default="10" onmouseover="startProgress(this)" onmouseout="resetHoverFlag(this)">
                            <h2>Node JS</h2>
                            <div class="progress-container">
                                <div class="progress-circle"></div>
                                <div class="progress-inner"></div>
                                <div class="progress-text">10%</div>
                            </div>
                        </div>
                    </div>
                </div> */}



                <div id="skills_section" data-section className="skill_main">
                    <h3 className="head_main_h3">Skill</h3>
                    <h1 className="head_main_h1">My Skills</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    <div className="technical_skill">
                        {skills.map((skill, index) => (
                            <div key={index} >
                                <SkillProgress
                                    skillName={skill.name}
                                    defaultPercentage={skill.percentage}
                                    innerImage={skill.backgroundImage} // Pass the image for the inner div
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div id='project_section' data-section></div>
                <div className="project_main">
                    <h3 className="head_main_h3">Projects</h3>
                    <h1 className="head_main_h1">My Project</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    <div className="project_div">
                        <div className="project_head">
                            <p onClick={() => filterProjects('All')} data-category="All" className="active">All</p>
                            <p onClick={() => filterProjects('Food')} data-category="Food">Food</p>
                            <p onClick={() => filterProjects('Cloth')} data-category="Cloth">Shop</p>
                            <p onClick={() => filterProjects('Nature')} data-category="Nature">Nature</p>
                            {/* <p onClick={() => filterProjects('Beauty')} data-category="Beauty">Beauty</p> */}
                        </div>

                        <div className="project">
                            <a href="https://portfolio-pr-alpha.vercel.app/" target="_blank">
                                <div className="project_img Food">
                                    <img src="Food_1.jpeg" alt="Food Website" />
                                    <h1 className="background_text">Coffee Website</h1>
                                </div>
                            </a>

                            <a href="https://vegetable-chi.vercel.app/" target="_blank">
                                <div className="project_img Food">
                                    <img src="Food_2.jpeg" alt="Food Website" />
                                    <h1 className="background_text">Vegetable Website</h1>
                                </div>
                            </a>

                            <a href="https://chocolate-five.vercel.app/" target="_blank">
                                <div className="project_img Food">
                                    <img src="Food_3.jpeg" alt="Food Website" />
                                    <h1 className="background_text">Chocolate Website</h1>
                                </div>
                            </a>

                            <a href="https://christmas-wheat.vercel.app/" target="_blank">
                                <div className="project_img Food">
                                    <img src="Food_4.jpeg" alt="Food Website" />
                                    <h1 className="background_text">Christmas Website</h1>
                                </div>
                            </a>


                            <a href="https://cloth-nine.vercel.app/" target="_blank">
                                <div className="project_img Cloth">
                                    <img src="Cloth_1.jpeg" alt="Cloth Website" />
                                    <h1 className="background_text">Cloth Website</h1>
                                </div>
                            </a>

                            <a href="https://flower-delta-two.vercel.app/" target="_blank">
                                <div className="project_img Cloth">
                                    <img src="Cloth_2.jpeg" alt="Cloth Website" />
                                    <h1 className="background_text">Flower Website</h1>
                                </div>
                            </a>

                            <a href="https://nailart-theta.vercel.app/" target="_blank">
                                <div className="project_img Cloth">
                                    <img src="Cloth_3.jpeg" alt="Cloth Website" />
                                    <h1 className="background_text">Nail Art Website</h1>
                                </div>
                            </a>

                            <a href="https://perfume-silk-nine.vercel.app/" target="_blank">
                                <div className="project_img Cloth">
                                    <img src="Cloth_4.jpeg" alt="Cloth Website" />
                                    <h1 className="background_text">Perfume Website</h1>
                                </div>
                            </a>

                            <a href="https://camping1-one.vercel.app/" target="_blank">
                                <div className="project_img Nature">
                                    <img src="Nature_1.jpeg" alt="Nature Website" />
                                    <h1 className="background_text">Nature Website</h1>
                                </div>
                            </a>

                            <a href="https://plant2-six.vercel.app/" target="_blank">
                                <div className="project_img Nature">
                                    <img src="Nature_2.jpeg" alt="Nature Website" />
                                    <h1 className="background_text">Nature Website</h1>
                                </div>
                            </a>

                            <a href="https://camping2-one.vercel.app/" target="_blank">
                                <div className="project_img Nature">
                                    <img src="Nature_3.jpeg" alt="Nature Website" />
                                    <h1 className="background_text">Nature Website</h1>
                                </div>
                            </a>

                            <a href="https://plant1.vercel.app/" target="_blank">
                                <div className="project_img Nature">
                                    <img src="Nature_4.jpeg" alt="Nature Website" />
                                    <h1 className="background_text">Nature Website</h1>
                                </div>
                            </a>


                            {/* <div className="project_img Beauty">
                                <img src="Beauty_1.jpeg" alt="Beauty Website" />
                                <h1 className="background_text">Beauty Website</h1>
                            </div>
                            <div className="project_img Beauty">
                                <img src="Beauty_2.jpeg" alt="Beauty Website" />
                                <h1 className="background_text">Beauty Website</h1>
                            </div>
                            <div className="project_img Beauty">
                                <img src="Beauty_3.jpeg" alt="Beauty Website" />
                                <h1 className="background_text">Beauty Website</h1>
                            </div>
                            <div className="project_img Beauty">
                                <img src="Beauty_4.jpeg" alt="Beauty Website" />
                                <h1 className="background_text">Beauty Website</h1>
                            </div> */}
                        </div>
                    </div>
                </div>



                <div id='blog_section' data-section className="blog_main">
                    <h3 className="head_main_h3">Blog</h3>
                    <h1 className="head_main_h1">My Blogs</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    <div className={popup ? 'no-scroll' : ''}>
                        <div className="blog_slider">
                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper">
                                    {blogPosts.map((post, index) => (
                                        <div className="swiper-slide blog_slider_div" key={index}>
                                            <div className="blog_slider_flex">
                                                <div className="blog_slider_img">
                                                    <img src={post.img} alt="" />
                                                </div>
                                                <div className="blog_slider_text">
                                                    <h2>{post.title}</h2>
                                                    <div className="flex_text_blog">
                                                        <h3>{post.category}</h3>
                                                        <p>{post.date}</p>
                                                    </div>
                                                    <center>
                                                        <button onClick={() => handlePopup(post)}>
                                                            Read More <i className="fa-solid fa-arrow-right-long"></i>
                                                        </button>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Popup */}
                        {popup && (
                            <>
                                <div className="popup-overlay" onClick={closePopup}></div>
                                <div className="popup-box">
                                    <div className="popup-content">
                                        <div className="pop_up_img">
                                            <img src={popupContent.img} alt="" className="popup-img" />
                                        </div>
                                        <h2>{popupContent.title}</h2>
                                        <p>{popupContent.description}</p>
                                        <button className="close-btn" onClick={closePopup}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>




                <div id='contact_section' data-section className="contact_main">
                    <h3 className="head_main_h3">Contact</h3>
                    <h1 className="head_main_h1">Contact Us</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>


                    <div className="main_form" >

                        <div className="main_info">
                            <div className="left_info">
                                <h3>👤 Name</h3>
                                <input type="text" value={name} placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="right_info">
                                <h3>📞 Phone Number</h3>
                                <input type="number" value={number} placeholder='Enter Your Number...' onChange={(e) => setNumber(e.target.value)} />
                            </div>
                        </div>

                        <div className="main_info">
                            <div className="left_info">
                                <h3>📧 Email</h3>
                                <input type="email" value={email} placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="right_info">
                                <h3>🔒 Password</h3>
                                <input type="password" value={password} placeholder='Enter Your PassWord...' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="main_info">
                            <div className="left_info">
                                {/* 🏙️🏞️ */}
                                <h3>🏕️ City</h3>
                                <input type="text" value={city} placeholder='Enter Your City...' onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <div className="right_info">
                                <h3>🎨 Hobby</h3>
                                <select name="" id="" value={hobby} onChange={(e) => setHobby(e.target.value)}>
                                    <option value="">Select Your Hobby</option>
                                    <option value="Drawing">Drawing</option>
                                    <option value="Dancing">Dancing</option>
                                    <option value="Singing">Singing</option>
                                    <option value="Learning">Learning</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Cooking">Cooking</option>
                                </select>
                            </div>
                        </div>

                        <div className="btn_flex">
                            <button onClick={handleSignUp}>Submit</button>
                        </div>

                    </div>
                </div>



                <footer>
                    <div className="footer_div">
                        <div className="footer_left">
                            <h3>About</h3>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>

                            <br /><br />
                            <h3>Connect</h3>
                            <div className="footer_connect">
                                <a href="https://www.instagram.com/?hl=en">
                                    <button>
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                </a>

                                <a href="https://www.facebook.com/?_rdr">
                                    <button>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </button>
                                </a>

                                <a href="https://in.linkedin.com/">
                                    <button>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </button>
                                </a>

                                <a href="https://in.pinterest.com/">
                                    <button>
                                        <i class="fa-brands fa-pinterest-p"></i>
                                    </button>
                                </a>

                                <a href="https://web.telegram.org/k/">
                                    <button>
                                        <i class="fa-brands fa-telegram"></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="footer_right">
                            <div className="footer_nav">
                                <h3>Navigation</h3>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    HTML5
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    CSS3
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    JQuery
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    JavaScript
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    Node JS
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    React JS
                                </p>
                                <p>
                                    <i class="fa-solid fa-angle-right"></i>
                                    &nbsp;
                                    Mongo DB
                                </p>
                            </div>

                            <div className="footer_contact">
                                <h3>Contact</h3>
                                <div className="footer_info_flex">
                                    <button>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </button>
                                    <p>
                                        Iskon Ambito, Rajkot, Gujarat - 360004
                                    </p>
                                </div>

                                <div className="footer_info_flex">
                                    <button>
                                        <i class="fa-solid fa-envelope"></i>
                                    </button>
                                    <p>
                                        aastha.patel.0801@gmail.com
                                    </p>
                                </div>

                                <div className="footer_info_flex">
                                    <button>
                                        <i class="fa-solid fa-phone"></i>
                                    </button>
                                    <p>
                                        +91 635-546-356-0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </center>
        </div>
    )
}
