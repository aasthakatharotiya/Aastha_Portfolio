import React from 'react';

export default function Resume() {
    const pdfUrl = '/Aastha_Resume.pdf'; // Path to the PDF in the public folder

    return (
        <div>
            <div className="resume_img">
                <img src="Aastha_Resume_img.jpg" alt="" />
            </div>
            <a href={pdfUrl} download="Aastha_Resume.pdf">
                <button className='resume_btn'>Download Resume</button>
            </a>
        </div>
    );
}
