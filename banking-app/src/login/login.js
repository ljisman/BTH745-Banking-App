import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Input from './input';

import './login.css';
import mainLogo from '../assets/Bank_logo.png';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

const StyledButton = withStyles({
    root: {
      background: 'rgba(255,255,255, 0.3)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      width: 200,
      padding: '0 30px',
      marginBottom: '80px',
      boxShadow: '0 3px 5px 2px rgba(255, 255, 225, .5)',
    },
    label: {
      textTransform: 'capitalize',
      fontFamily: 'Work Sans, sans-serif',
      fontWeight: 300,
      fontSize: '1.3em',
      letterSpacing: '1px',
      textShadow: '2px 2px 9px #000000',
    },
})(Button);

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = () => {
        this.setState(state => ({ login: true }));
        this.props.onLoginEvent(this.state.login);
    }

    render(){
        return(
            <div className="container">
                <div className="login_wrapper">
                    <div className="overlay">
                        <div className="login_container">
                            <div className="login_box">
                                <img src={mainLogo} className="logo"/>

                                {/* Login Button */}
                                <StyledButton endIcon={<VpnKeyRoundedIcon/>} onClick={this.handleLogin}>Login</StyledButton>

                                {/* Username Input Field */}
                                <Input
                                    id={1}
                                    type="text"
                                    label="Access Card Number "
                                    predicted="Admin"
                                    active={false}
                                    locked={false}
                                />
                                {/* Password Input Field */}
                                <Input
                                    id={2}
                                    type="password"
                                    label="Password"
                                    predicted=""
                                    active={false}
                                    locked={false}
                                />
                                <div className="subTextDiv">
                                    Trouble signing in?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
