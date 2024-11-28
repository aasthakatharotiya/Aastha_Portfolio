import React from 'react'

export default function Prooject() {
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

    return (
        <div>
            <center>
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

            </center>
        </div>
    )
}
