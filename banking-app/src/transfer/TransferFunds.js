import React from 'react';
import Table from 'react-bootstrap/Table';
import { Row,Col,Button,Badge } from 'react-bootstrap';
class TransferFunds extends React.Component{
    constructor(props){
        super(props)

    }
    render () {

    return (
        <div>
            <h1>Transfer Between Accounts</h1>
<div>
    <p>Select From Account: <select>
  <option value="A">Cheqing</option>
  <option value="B">Savings</option>
  <option value="C">Investments</option>
</select></p> 
    <p>Select To Account: <select>
  <option value="A">Cheqing</option>
  <option value="B">Savings</option>
  <option value="C">Investments</option>
</select></p> 
    <p> Amount: <input></input></p> 

<Button onClick={()=>this.props.changeView()}>Submit</Button>
</div>
</div>
    )

}
}

export default TransferFunds;