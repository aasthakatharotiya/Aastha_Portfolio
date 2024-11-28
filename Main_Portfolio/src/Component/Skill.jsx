import React, { useState, useEffect } from 'react';

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

export default function Skill() {

    const skills = [
        { name: 'HTML', percentage: 90, backgroundImage: 'html_bg.png' },
        { name: 'CSS', percentage: 96, backgroundImage: 'css_bg.png' },
        { name: 'jQuery', percentage: 80, backgroundImage: 'jquery_bg.png' },
        { name: 'JavaScript', percentage: 85, backgroundImage: 'Javascript_bg.png' },
        { name: 'React JS', percentage: 90, backgroundImage: 'reactjs_bg.png' },
        { name: 'Bootstrap', percentage: 100, backgroundImage: 'bootstrap_bg.png' },
        { name: 'DSA', percentage: 80, backgroundImage: 'dsa_bg.png' },
        { name: 'PHP', percentage: 50, backgroundImage: 'php_bg.png' },
    ];

    return (
        <center>
            <div>
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
            </div>
        </center>
    )
}
