import React from 'react';

import "./login.css";
import logo from "./assets/logo1.png";
import {Link } from 'react-router-dom';


class Login extends React.Component {
    
    handleClick = () =>  {
        return  <Link  to="/Home" />
    }

    render() {
    return (
        
        <div class="login">
            
            <div className="Logo">
                <img src= {logo} className="logo"/>
            </div>
            
            <form class="login-container">
                <p><input type="email" placeholder="Email"></input></p>
                <p><input type="password" placeholder="Password"></input></p>
                <p><Link type="submit" to="/Home"> Log In</Link></p>
                
            </form>
        </div>
        
        );
    }   
}
export default Login;