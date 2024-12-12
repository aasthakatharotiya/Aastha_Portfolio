import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../../FirebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignIn = () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User signed in:", userCredential.user)
                    navigate("/All")
                    setEmail("")
                    setPassword("")
                })
                .catch((error) => {
                    console.error("Error during sign in:", error.message)
                    alert(`Login failed: ${error.message}`)
                })
        } else {
            alert("Please, fill out all fields")
        }
    }

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("User signed in with Google:", result.user)
                navigate("/All")
            })
            .catch((error) => {
                console.error("Error during Google sign-in:", error.message)
                alert(`Google login failed: ${error.message}`)
            })
    }

    return (
        <div className="main_login_bg">
            <div className="main_form_css">
                <button className="face_btn">
                    <img src="https://i.pinimg.com/originals/19/00/54/19005430985f1e7e4022b4301b44ba35.gif" alt="" />
                </button>
                <h2>Sign IN</h2>
                <div style={{ marginTop: "-20px" }} className="input_width">
                    {/* <h3><i className="fa-regular fa-user"></i></h3> */}
                    {/* <h3>👤</h3> */}
                    <h3>🙍🏻</h3>
                    <input type="text" placeholder="Name..." />
                </div>
                <div className="input_width">
                    {/* <h3><i className="fa-regular fa-envelope"></i></h3> */}
                    <h3>📩</h3>
                    <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input_width">
                    {/* <h3><i className="fa-solid fa-unlock-keyhole"></i></h3> */}
                    {/* <h3>🔑</h3> */}
                    <h3>🔐</h3>
                    <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="login_btn" onClick={handleSignIn}>Log IN</button>
                <button className="google_btn" onClick={handleLogin}>
                    <div className="btn_flex">
                        <div className="google_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="" />
                        </div>
                        <div className="google_text">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
