import React from "react";
import "./login.css"
import {IoIosArrowBack} from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import image from "./img/image18.png"
import vector from "./img/Vector.png"
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const history = useNavigate()

    const handleHistory = ()=>{
        history(-1)
    }
    
    return (
        <div className="log-container">
            
            <div>
                <div className="log-right-bg col-md-5">
                    
                    <img src={image} alt="pic" />

                    <div>

                        <div className="log-message-box row">
                            <h3 id="log-h3">Welcom to Lectronic</h3>
                            <p>We are an e-commerce that is engaged in buying and<br/>selling electronic goods, get our special offer now!</p>
                        </div>
                        
                        <img className="log-vector" src={vector} alt="vector1" />
                    </div>

                </div>
                
                <div className="log-form-container">

                    <button className="log-arrow-back" onClick={handleHistory}><IoIosArrowBack/></button>

                    <form className="login-form">
                        
                        <h1 className="text-left mb-5">Welcome Back!</h1>

                        <p>Steps to get started, find the best stuff</p>
                        
                        <div className="log-form-group">
                            <input type="email" name="email" placeholder="Your e-mail address" required/>
                        </div>

                        
                        <div className="log-form-group">
                            <input  type="password" name="email" placeholder="Your password" required/>
                        </div>

                        <a className="forgot-password" href="#">Forgot Password?</a>

                        <button type="submit" className="log-button-REG">Login</button>

                        <div className="not-register">
                            <p>Not register yet? <Link className="create-acc" to={"/register"}>Create an Account</Link></p>
                        </div>

                    </form>

                </div>
            
            </div>

        </div>
    )
}

export default Login