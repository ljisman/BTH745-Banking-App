import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import logo from "../assets/Bank_logo.png";

export default class Login extends React.Component {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    constructor(props) {
        super(props);
        this.state = {data:'',axes:'', ticker1:387,ticker2:898,ticker3:388,ticker:'appl',screen:'WATCHLIST',justBought:false};  
this.handleSubmit = this.handleSubmit.bind(this);

    }
     validateForm() {
        // return email.length > 0 && password.length > 0;
    }

     handleSubmit(event) {
        event.preventDefault();
        console.log('prop',this.props)
        this.props.onSetView('HOMEPAGE')
    }

    render(){
    return (
        <div className="container">
            <div className="Logo">
                <img src= {logo} className="logo"/>
                <br/><br/>
            </div>
            <h2>Login</h2>
            <div className="Login">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                               
                                // onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" >
                            Submit
                        </Button>
                    </Form>

                    <br />
                    <br />
            </div>
        </div>
    );
}
}