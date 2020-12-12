// import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import Login from './login/login';
import Sidebar from './sidebar/sidebar'
import {Card,Nav,PrototypeHomepage } from './homepage/hompage';
import Investments from './investments/investments';
import TransactionsList1 from './transaction/transactionsList'
import './sidebar/sidebar.css'
import Goals from './goals/goals';
import Deposit from './deposit/deposit'
import { Row,Col,Button,Badge } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';


const LOGIN ='LOGIN'
const TRANSACTION='TRANSACTION'
const INVESTMENT ='INVESTMENT'
const HOMEPAGE = 'HOMEPAGE'
const GOALS = 'GOALS'
const DEPOSIT = 'DEPOSIT'
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
            <Row>  
            {(this.state.view=== TRANSACTION||this.state.view===INVESTMENT||this.state.view===GOALS)&&<h2><FaAngleLeft style={{marginLeft:20,cursor:'pointer'}} onClick={()=>this.setVeiw(HOMEPAGE)}/></h2> }
              <h1 style={(this.state.view=== TRANSACTION||this.state.view===INVESTMENT||this.state.view===GOALS)?{marginLeft:60}:{marginLeft:120}}>Yes Bank </h1>  
</Row>    
<hr style={{width:'100%',textAlign:'center',marginLeft:0}}></hr>
            {this.state.view===HOMEPAGE&&<PrototypeHomepage onSetView={this.setVeiw}/>}
           {this.state.view===LOGIN&& <Login onSetView={this.setVeiw}/>}
           {this.state.view=== TRANSACTION&& <TransactionsList1 onSetView={this.setVeiw} />}
           {this.state.view=== DEPOSIT&& <Deposit onSetView={this.setVeiw} />}
            {this.state.view===INVESTMENT&&<Investments onSetView={this.setVeiw} onLoginEvent={this.handleLogin}/>}
        {this.state.view===GOALS&&<Goals onSetView={()=>this.setVeiw(HOMEPAGE)} />}
        </div>
        }
       
      </div>
    </div>
  );
}

  handleLogin = (loginEvent) => {
    this.setState({ auth: loginEvent});
  }

  
}