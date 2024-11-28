import React from 'react'

export default function Home() {
  return (
    <div>
        <center>
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
        </center>
    </div>
  )
}
