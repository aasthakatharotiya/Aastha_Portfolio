import React, { useState, useEffect } from "react";

// Progress Bar Component
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
                        }}
                    ></div>
                </div>
                <div className="progress-text">{`${progress}%`}</div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const skills = [
        { name: "HTML", percentage: 90, backgroundImage: "html_bg.jpg" },
        { name: "CSS", percentage: 96, backgroundImage: "css_bg.jpg" },
        { name: "jQuery", percentage: 80, backgroundImage: "jquery_bg.jpg" },
        { name: "JavaScript", percentage: 85, backgroundImage: "javascript_bg.jpg" },
        { name: "React JS", percentage: 90, backgroundImage: "react_bg.jpg" },
        { name: "Bootstrap", percentage: 100, backgroundImage: "bootstrap_bg.jpg" },
        { name: "DSA", percentage: 80, backgroundImage: "dsa_bg.jpg" },
        { name: "PHP", percentage: 50, backgroundImage: "php_bg.jpg" },
    ];

    return (
        <div>
            <div id="skills_section" className="skill_main">
                <h3 className="head_main_h3">Skill</h3>
                <h1 className="head_main_h1">My Skills</h1>
                <p className="head_main_p">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>

                <div className="technical_skill">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${skill.backgroundImage})`,
                                backgroundSize: "100% 100%",
                            }}
                        >
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
    );
}
