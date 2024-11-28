import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'


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

export default function Contact() {

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

                <div id='contact_section' data-section className="contact_main">
                    <h3 className="head_main_h3">Contact</h3>
                    <h1 className="head_main_h1">Contact Us</h1>
                    <p className="head_main_p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>


                    <div className="main_form" >

                        <div style={{ marginTop: "-10px" }} className="main_info">
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
            </center>
        </div>
    )
}
