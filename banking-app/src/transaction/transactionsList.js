import React, { Component } from 'react';
import './transactionsList.css';
import TransferFunds from '../transfer/TransferFunds.js'
import { Button } from 'react-bootstrap';
import Deposit from '../deposit/deposit'
const DETAIL = 'DETAIL';
const LIST = 'LIST';
const TRANSFER = 'TRANSFER';
const DEPOSIT = 'DEPOSIT'
class DisplayList extends Component{ 
    constructor(props){
        super(props)
        console.log('iiin')

    }
     switchToDetailView(){
        this.props.changeView(DETAIL)
    }
    render(){
    return(
        <div className="container">
            <br/>
            <h3>Transactions</h3>
            <hr/>
            <table width="100%">
                <tr className="Buttons">
                    {/* <td className="Buttons"><Button>Activity</Button></td> */}
                    <td className="Buttons"><Button onClick={()=>this.props.changeView(DEPOSIT)}>Deposit</Button></td>
                    <td className="Buttons"><Button onClick={()=>this.props.changeView(TRANSFER)}>Transfer</Button></td>
                </tr>
            </table>
            <h3>*** *** *** 565</h3>
            <div>Nov 1 - Today</div>
            <table width="100%">
            
                <tr onClick={()=>{
                    console.log(this.props)
                    this.props.viewDetail('uber','Oct 31','20','Pickering','Transport')
                    this.switchToDetailView()
            }}>
                    <td>Oct 31</td>
                    <td>UBER</td>
                    <td>-$20</td>
                </tr>
                <tr onClick={()=>{
                    console.log(this.props)
                    this.props.viewDetail('Walmart','Oct 31','-$37','Pickering','Shopping')
                    this.switchToDetailView()
            }}>
                    <td>Oct 31</td>
                    <td>Walmart</td>
                    <td>-$37</td>
                </tr>
                <tr onClick={()=>{
                    console.log(this.props)
                    this.props.viewDetail('LCBO','Oct 31','-$62','Toronto','Shopping')
                    this.switchToDetailView()
            }}>
                    <td>Oct 31</td>
                    <td>LCBO</td>
                    <td>-$62</td>
                </tr>
                <tr onClick={()=>{
                    console.log(this.props)
                    this.props.viewDetail('Paycheck','Oct 31','+$5000','Unknown','Pay')
                    this.switchToDetailView()
            }}>
                    <td>Oct 31</td>
                    <td>Paycheck</td>
                    <td>+$5000</td>
                </tr>
                <tr onClick={()=>{
                    console.log(this.props)
                    this.props.viewDetail('Paypal','Oct 31','-$20','Pickering','Other')
                    this.switchToDetailView()
            }}>
                    <td>Oct 31</td>
                    <td>Paypal</td>
                    <td>-$20</td>
                </tr>
            </table>
        </div>
        
    )
}
    }

    class ShowTransDetail extends Component{
        constructor(props){
            super(props)

        }

        render(){return(
            <div>
        <h4 style={{marginTop:30,marginBottom:30}}><u><b> Transaction Detail</b></u> </h4>
        <p>Transaction Name: {this.props.currentState.name}</p>
        <p> Date: {this.props.currentState.date}</p>
        <p>Amount: {this.props.currentState.amount}</p>
        <p>Location:{this.props.currentState.location}</p>
        <p>Category:{this.props.currentState.category}</p>
        <Button  style={{margin:10}} onClick={this.props.changeView}>Back to Transactions</Button>
            </div>
        )}

    }
export default class TransactionsList1 extends Component{


constructor(props){
    super(props)
    this.state = {
       name:'',
       date:'',
       amount:'',
       location:'',
       category:'',
       view: LIST
    }
    this.updateView = this.updateView.bind(this);
  }

  updateView=(view)=>{
      this.setState({
          view:view
      })
  }

  setDetails=(name,date,amount,location,category)=>{
      console.log('ram',name)
this.setState({
    name:name,
    date:date,
    amount:amount,
    location:location,
    category:category
})
  }
    
    render(){
        return(
<div>
     {this.state.view === LIST&&<DisplayList changeView={(view)=>this.updateView(view)} viewDetail={(name,date,amount,location,category)=>this.setDetails(name,date,amount,location,category)}  />}
     {this.state.view === DETAIL&&<ShowTransDetail currentState={this.state} changeView={()=>this.updateView(LIST)}/>}
     {this.state.view === TRANSFER&&<TransferFunds currentState={this.state} changeView={()=>this.updateView(LIST)}/>}
     {this.state.view === DEPOSIT&&<Deposit currentState={this.state} changeView={()=>this.updateView(LIST)}/>}
</div>
        )
    }
}
