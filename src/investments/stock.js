
import React from 'react'
import LineChart from './LineGraph'
import '../Nav.css'
import './stock.css'
import {Link } from 'react-router-dom';
import Select from 'react-select';


const TransactionList = [
    // { label: 'AMD', value: 'AMD' , price: '82.90' , change: '-7.26', percent: '-10.58%', today: '-' },
    // { label: 'TSLA', value: 'TSLA' , price: '1611.90' , change: '49.26', percent: '3.58%' , today: '+'  },
    // { label: 'NVDA', value: 'NVDA', price: '537.90' , change: '-10.26', percent: '-2.50%', today: '-' },
    { label: 'Today', id: 4 , value: 'Today'  },
    { label: 'Past Week', id: 5, value: 'Past Week' , price: '211.90' , change: '-17.26', percent: '-8.58%', today: '-'},
    { label: 'Past Month', id: 6, value: 'Past Month' , price: '75.90' , change: '17.26', percent: '8.58%', today: '+' },
];

const Today = [
    { id: 1, date: 'Nov 18th', type: 'BUY' , qty: '10', price: '5253.58', percent: '-8.58%' , today: '-' },
    { id: 2, date: 'Nov 18th', type: 'SELL' , qty: '38', price: '-1089.58', percent: '1.58%', today: '-' },
    { id: 3, date: 'Nov 18th', type: 'BUY' , qty: '20 ', price: '340.58', percent: '24.58%' ,today: '+' },
];
const PastWeek = [
    { id: 1, date: 'Nov 18th', type: 'Restaurant' , qty: 'Taco Bell', price: '-7.58', today: '-' },
    { id: 2, date: 'Nov 14th', type: 'Payroll' , qty: 'TD Payroll', price: '1234.58', today: '+' },
    { id: 3, date: 'Nov 13th', type: 'Groceries' , qty: 'No Frills', price: '-154.58', today: '-' },
];
const PastMonth = [
    { id: 1, date: 'Oct 31st', type: 'Hydro' , qty: 'Enbridge', price: '-77.58', today: '-' },
    { id: 2, date: 'Oct 28th', type: 'Payroll' , qty: 'TD Payroll', price: '1234.58', today: '+' },
    { id: 3, date: 'Oct 23rd', type: 'Entertainment' , qty: 'Cineplex', price: '-15.38', today: '-' },
];

class stock extends React.Component {
 
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           translist: Today,
        

        }
     } 
     
     handleChange(option) {
         if (option.value == "Today") {
            this.setState({
                translist: Today
            });
        }
        if (option.value == "Past Week") {
            this.setState({
                translist: PastWeek
            });
        }
        if (option.value == "Past Month") {
            this.setState({
                translist: PastMonth
            });
        }
        console.log(option.value);
     }

     renderTableData() {
        return this.state.translist.map((stocks, index) => {
           const { id, qty, date, price,  type, today, percent } = stocks //destructuring
           let RG = "stock decrease";
          
            if (today == '-') {
                RG = "stock decrease"
            }
            else {
                RG = "stock increase"
            }

           return (
              
              <tr class={RG} key={id}>
                 <td class="name">{date}</td>
                 <td class="value">{type}</td>
                 <td class="value">{qty}</td>
                 <td class="value">{price}</td>
             
                 <td class="change">{percent}</td>
              </tr>
           )
        })
    }



  render() {  
  return (
    <div className="Investments">
      <div class="navbarTop"> 
        <Link to="/watchlist"> 
            <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' , marginTop: "3px",}}>&#8592;</h2>
        </Link>
        <h3 style={{  textAlign: "center" , paddingLeft: "110px" , marginBottom: "0px", textDecoration: 'none' , marginTop: "8px",}} >{this.props.history.location.state.name}</h3>
      </div>  

    
        <h3 style={{  textAlign: "center" , marginBottom: "0px", textDecoration: 'none' , marginTop: "18px",}} > $ {this.props.history.location.state.price} </h3>
        <LineChart />


        <div id="buttons">
             
            <input class="btnInput" type="text" pattern="[0-9]*" style={{ width: "35px"}} /> 
            <button  class="btn green">Buy</button>
            <button  class="btn red">Sell</button>
            <input class="btnInput " type="text" pattern="[0-9]*" style={{ width: "35px"}} /> 
           
        
        </div>


      <table class="tablesorter">
        <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
            <th>%</th>
        </thead>
        <tbody>
           {this.renderTableData()}
        </tbody>
      </table>





      <div>
                <div class="navbar">
                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <Link to="/home">
                            <a  to="/home"  class="active">Home</a>
                        </Link>
                    </div>
        
                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Statements</a>
                    </div>

                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Insights</a>
                    </div>

                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Settings</a>
                    </div>

                </div>

            </div>
    </div>
  )
  }
}

export default stock;