import React, { useState, useEffect } from 'react';

export default function Blog() {

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


  return (
    <center>
      <div>
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
      </div>
    </center>
  )
}
