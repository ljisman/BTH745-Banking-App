import React, { Component } from 'react';
import './transactionsList.css';



export default class TransactionsList1 extends Component{

    render(){
        return(
            <div className="container">
                <br/>
                <h3>Transactions</h3>
                <hr/>
                <table width="100%">
                    <tr>
                        <td className="Buttons"><button>Activity</button></td>
                        <td className="Buttons"><button>Deposit</button></td>
                        <td className="Buttons"><button>Transfer</button></td>
                    </tr>
                </table>
                <h3>*** *** *** 565</h3>
                <div>Nov 1 - Today</div>
                <table width="100%">
                    <tr>
                        <td>Oct 31</td>
                        <td>UBER</td>
                        <td>-$20</td>
                    </tr>
                    <tr>
                        <td>Oct 31</td>
                        <td>Walmart</td>
                        <td>-$37</td>
                    </tr>
                    <tr>
                        <td>Oct 31</td>
                        <td>LCBO</td>
                        <td>-$62</td>
                    </tr>
                    <tr>
                        <td>Oct 31</td>
                        <td>Paycheck</td>
                        <td>+$5000</td>
                    </tr>
                    <tr>
                        <td>Oct 31</td>
                        <td>Paypal</td>
                        <td>-$20</td>
                    </tr>
                </table>
            </div>
            
        )
    }
}
