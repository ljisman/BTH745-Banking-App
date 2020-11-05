// import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import Login from './login/login';
import {Card,Nav } from './homepage/hompage';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        auth: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (loginEvent) => {
    this.setState({ auth: loginEvent});
  }

  render(){
    return (
      <div className="container">
          {this.state.auth
          ?
            <div>
              <Card/>
              <Nav/>
            </div>
          : <Login onLoginEvent={this.handleLogin}/>
          }
      </div>
    );
  }
}