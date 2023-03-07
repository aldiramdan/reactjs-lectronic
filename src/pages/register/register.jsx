import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import image from "./img/image9.png"
import vector from "./img/Vector.png"
import useApi from "../../helpers/api"

import "./register.css"

function Register() {
  
    const history = useNavigate()

    const handleHistory = ()=>{
        history(-1)
    }

    const navigate = useNavigate();
    const api = useApi();
    const [name, setName] = useState("");
	const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const registerHandler = async (e) => {
      e.preventDefault();
      try {
        api
			.req({
				method: "POST",
				url: "/users/register",
				data: {
                    name: name,
                    username: username,
                    email: email,
                    password: password,
				},
			})
			.then((res) => {
				console.log(res);
				navigate("/login");
			});
		} catch (error) {
        console.log(error);
      }
    };
  
    const inputHandler = (e) => {
		e.preventDefault();
	
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "username") {
			setUsername(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
    };
    
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
                            <input onChange={inputHandler} type="text" name="name" placeholder="What's your name?" required/>
                        </div>    
						<div className="reg-form-group">
                            <input onChange={inputHandler} type="text" name="username" placeholder="Your username?" required/>
                        </div>                
                        <div className="reg-form-group">
                            <input onChange={inputHandler} type="email" name="email" placeholder="Your e-mail address" required/>
                        </div>                
                        <div className="reg-form-group">
                            <input onChange={inputHandler} type="password" name="password" placeholder="Your password" required/>
                        </div>
                        <button type="submit" className="reg-button-REG" onClick={registerHandler}>Register</button>
                    </form>
                </div>       
            </div>
        </div>
    )
}

export default Register