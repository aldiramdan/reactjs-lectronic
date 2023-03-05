import React from "react";
import "./register.css"
import {IoIosArrowBack} from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import image from "./img/image9.png"
import vector from "./img/Vector.png"
import { useNavigate } from "react-router-dom";

function Register() {

    const history = useNavigate()

    const handleHistory = ()=>{
        history(-1)
    }
    
    return (
        <div className="reg-container">
            
            <div>
                <div className="right-bg col-md-5">
                    
                    <img src={image} alt="pic" />

                    <div className="box">

                        <div className="message-box row">
                            <h3 id="h3">Welcom to Lectronic</h3>
                            <p>We are an e-commerce that is engaged in buying and<br/>selling electronic goods, get our special offer now!</p>
                        </div>
                        
                        <img className="vector" src={vector} alt="vector1" />
                    </div>

                </div>
                
                <div className="form-container">

                <button className="arrow-back" onClick={handleHistory}><IoIosArrowBack/></button>

                    <form className="register-form">
                        
                        <h1 className="text-left mb-5">Welcome, Please<br/>Create an Account</h1>

                        <p>Please fill in your name, email, and password</p>

                        <div className="reg-form-group">
                            <input type="text" name="name" placeholder="What's your name?" required/>
                        </div>

                        
                        <div className="reg-form-group">
                            <input type="email" name="email" placeholder="Your e-mail address" required/>
                        </div>

                        
                        <div className="reg-form-group">
                            <input  type="password" name="email" placeholder="Your password" required/>
                        </div>

                        <button type="submit" className="reg-button-REG">Register</button>

                    </form>
                </div>
            
            </div>

        </div>
    )
}

export default Register