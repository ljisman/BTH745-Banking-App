import React from 'react';
import Table from 'react-bootstrap/Table';
class TransactionsList extends React.Component{
    render () {

    return (
        <div class="mx-auto">
            <h1>Transactions</h1>
            <Table>
                <tbody>
                    <tr>
                        <th><button>Date</button></th>
                        <th><button>Account</button></th>
                        <th><button>Sort</button></th>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Account</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oct 28</td>
                        <td>Paypal</td>
                        <td>Chequing</td>
                        <td>-$25.00</td>
                    </tr>
                    <tr>
                        <td>Oct 17</td>
                        <td>Paycheck</td>
                        <td>Chequing</td>
                        <td>+$1455.00</td>
                    </tr>
                    <tr>
                        <td>Oct 14</td>
                        <td>Bills</td>
                        <td>Savings</td>
                        <td>-$315.00</td>
                    </tr>
                    <tr>
                        <td>Oct 2</td>
                        <td>Paypal</td>
                        <td>Chequing</td>
                        <td>-$120.00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}
}

export default TransactionsList;