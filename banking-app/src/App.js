// import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import Login from './login/login';
import Sidebar from './sidebar/sidebar'
import {Card,Nav,PrototypeHomepage } from './homepage/hompage';
import Investments from './investments/investments';
import TransactionsList1 from './transaction/transactionsList'
import './sidebar/sidebar.css'
import TransactionsList from './transactions/TransactionsList';
import { Button } from 'react-bootstrap';

const LOGIN ='LOGIN'
const TRANSACTION='TRANSACTION'
const INVESTMENT ='INVESTMENT'
const HOMEPAGE = 'HOMEPAGE'
// var view=CARD;



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        auth: false,
        view:LOGIN
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

   setVeiw = (navView)=>{
    this.setState({view : navView});
    
  }
 render() {

  return (
    <div className="App" id="outer-container">
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <div className="container">
        {
          <div id="page-wrap">
  <h1>Yes Bank </h1>   
  {this.state.view=== TRANSACTION&&<Button onClick={()=>this.setVeiw(HOMEPAGE)}>Close</Button> }    
            {this.state.view===HOMEPAGE&&<PrototypeHomepage onSetView={this.setVeiw}/>}
           {this.state.view===LOGIN&& <Login onSetView={this.setVeiw}/>}
           {this.state.view=== TRANSACTION&& <TransactionsList1 onSetView={this.setVeiw} />}
        </div>
        }
        {this.state.view===INVESTMENT&&<Investments onSetView={this.setVeiw} onLoginEvent={this.handleLogin}/>}
      </div>
    </div>
  );
}

  handleLogin = (loginEvent) => {
    this.setState({ auth: loginEvent});
  }

  
}