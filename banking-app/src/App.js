// import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import Login from './login/login';
import Sidebar from './sidebar/sidebar'
import {Card,Nav } from './homepage/hompage';
import './sidebar/sidebar.css'
import TransactionsList from './transactions/TransactionsList';

const CARD ='CARD'
const TRANSACTION='TRANSACTION'
// var view=CARD;



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        auth: false,
        view:CARD
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

   setVeiw = (navView)=>{
    this.setState({view : navView});
    
  }
 render() {

  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="container">
        {this.state.auth
          ?<div id="page-wrap">
  <h1>Yes Bank </h1>        
            {this.state.view===CARD&&<Card/>}
           {this.state.view===TRANSACTION&& <TransactionsList/>}
            <Nav appCallBack={this.setVeiw}/>
        </div>:<Login onLoginEvent={this.handleLogin}/>}
      </div>
    </div>
  );
}

  handleLogin = (loginEvent) => {
    this.setState({ auth: loginEvent});
  }

  
}