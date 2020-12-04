
import React from 'react'
import PieChart from './PieChart'
import '../Nav.css'
import './chequing.css'
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
    { id: 1, date: 'Nov 18th', type: 'Restaurant' , name: 'Pizza Pizza', price: '-10.58', today: '-' },
    { id: 2, date: 'Nov 18th', type: 'Gas' , name: 'Esso', price: '-10.58', today: '-' },
    { id: 3, date: 'Nov 18th', type: 'Cash Back' , name: 'AMEX ', price: '340.58', today: '+' },
];
const PastWeek = [
    { id: 1, date: 'Nov 18th', type: 'Restaurant' , name: 'Taco Bell', price: '-7.58', today: '-' },
    { id: 2, date: 'Nov 14th', type: 'Payroll' , name: 'TD Payroll', price: '1234.58', today: '+' },
    { id: 3, date: 'Nov 13th', type: 'Groceries' , name: 'No Frills', price: '-154.58', today: '-' },
];
const PastMonth = [
    { id: 1, date: 'Oct 31st', type: 'Hydro' , name: 'Enbridge', price: '-77.58', today: '-' },
    { id: 2, date: 'Oct 28th', type: 'Payroll' , name: 'TD Payroll', price: '1234.58', today: '+' },
    { id: 3, date: 'Oct 23rd', type: 'Entertainment' , name: 'Cineplex', price: '-15.38', today: '-' },
];



class TransactionPie extends React.Component {
  
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           translist: [],
        

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
           const { id, name, date, price,  type, today } = stocks //destructuring
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
                 <td class="value">{name}</td>
             
                 <td class="change">{price}</td>
              </tr>
           )
        })
    }


 
  render() {  
  return (
    <div className="chequing">
      <div class="navbarTop"> 
        <Link to="/Home"> 
        <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' , marginTop: "3px",}}>&#8592;</h2>
        </Link>
        <h3 style={{  textAlign: "center" , paddingLeft: "80px" , marginBottom: "0px", textDecoration: 'none' , marginTop: "8px",}} > Transactions </h3>
      </div>  

        <Link to="/TransactionPie">
        <PieChart />
        </Link>
        <div style={{margin: "25px"}} >
            <Select
                onChange={ e => this.handleChange(e)}

                style={{marginLeft: "25px"}}
                options={TransactionList}
            />
        </div>

      <table class="tablesorter">
        <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Name</th>
            <th>Price</th>
            
        </thead>
        <tbody>
            {this.renderTableData()}
            {/* <tr class="stock decrease">
                <td class="name"> Nov 18th </td>
                <td class="value"> 34</td>
                <td class="value"> Pizza Pizza</td>
                <td class="change"> -17.94</td>
                
            </tr>
            <tr class="stock increase">
                <td class="name"> Nov 16th </td>
                <td class="value"> 164</td>
                <td class="value"> Direct Deposit</td>
                <td class="change"> 1245.94</td>
               
            </tr>
            <tr class="stock decrease">
                <td class="name"> Nov 15th </td>
                <td class="value"> 34</td>
                <td class="value"> Taco Bell</td>
                <td class="change"> -5.74</td>
                
            </tr> */}
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

export default TransactionPie;