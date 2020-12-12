import React, { Component } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Row,Col,Button,Badge } from 'react-bootstrap';
import './deposit.css'
export default class Deposit extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
        console.log('bakka')
      }

      render() {
          return(
          <div style={{padding:10}}>
            <p> To Account: <select className="custom-select">
            <option value="A">Cheqing</option>
            <option value="B">Savings</option>
            <option value="C">Investments</option>
          </select></p> 
          <p> Amount: <input/>
           </p> 
            <div style={{marginTop:30}}>
               <p><u>Capture Cheque</u></p> 
               <Row style={{marginLeft:'39px'}}>
               <Button style={{margin:'30px' }}>
                   <Col>
               <FaCamera />
               <p>Front</p>
               </Col>
               </Button>
               <Button style={{margin:'30px'}}>
                   <Col>
               <FaCamera />
               <p>Back</p>
               </Col>
               </Button>
                </Row>
                </div>
            </div>
          )
      }
}
