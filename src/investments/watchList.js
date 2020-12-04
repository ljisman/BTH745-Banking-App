
import React from 'react'
import LineChart from './LineGraph'
import '../Nav.css'
import './investments.css'
import {Link } from 'react-router-dom';
import Select from 'react-select';


const StockList = [
    // { label: 'AMD', value: 'AMD' , price: '82.90' , change: '-7.26', percent: '-10.58%', today: '-' },
    // { label: 'TSLA', value: 'TSLA' , price: '1611.90' , change: '49.26', percent: '3.58%' , today: '+'  },
    // { label: 'NVDA', value: 'NVDA', price: '537.90' , change: '-10.26', percent: '-2.50%', today: '-' },
    { label: 'APPL', id: 4 , value: 'APPL' , price: '118.03' , change: '-1.36', percent: '-1.14%', today: '-' },
    { label: 'MSFT', id: 5, value: 'MSFT' , price: '211.90' , change: '-17.26', percent: '-8.58%', today: '-'},
    { label: 'IBM', id: 6, value: 'IBM' , price: '75.90' , change: '17.26', percent: '8.58%', today: '+' },
];


class WatchList extends React.Component {
 
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           stocks: [
              { id: 1, name: 'AMD', price: '82.90' , change: '-7.26', percent: '-10.58%', today: '-' },
              { id: 2, name: 'TSLA', price: '1611.90' , change: '49.26', percent: '3.58%' , today: '+'},
              { id: 3, name: 'NVDA', price: '537.90' , change: '-10.26', percent: '-2.50%', today: '-'},
         
           ]
        }
     } 
     componentDidMount() {
        

     }
     handleChange(option) {
        this.setState({
            stocks: [...this.state.stocks, {  id: option.id , name: option.value, price: option.price , change: option.change , percent: option.percent , today: option.today} ]
        });
        console.log(option.value);
     }

     renderTableData() {
        return this.state.stocks.map((stocks, index) => {
           const { id, name, price, change , percent, today } = stocks //destructuring
           let RG = "stock decrease";
          
            if (today == '-') {
                RG = "stock decrease"
            }
            else {
                RG = "stock increase"
            }

           return (
              <tr class={RG} key={id} >
                 <td class="name"> <Link to={{pathname: "/stock" , state: { name: name ,price : price }}} > {name} </Link></td>
                 <td class="value">{price}</td>
                 <td class="change">{change}</td>
                 <td class="percentage">{percent}</td>
              </tr>
              
           )
        })
    }

  render() {  
  return (
    <div className="Investments">
      <div class="navbarTop"> 
        <Link to="/Investments"> 
            <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' , marginTop: "3px",}}>&#8592;</h2>
        </Link>
        <h3 style={{  textAlign: "center" , paddingLeft: "80px" , marginBottom: "0px", textDecoration: 'none' , marginTop: "8px",}} > Watch List </h3>
      </div>  

        <div style={{margin: "25px"}} >
            <Select
                onChange={ e => this.handleChange(e)}

                style={{marginLeft: "25px"}}
                options={StockList}
            />
        </div>
        <h3 style={{  textAlign: "center" , marginBottom: "0px", textDecoration: 'none' , marginTop: "18px",}} > AMD </h3>
        <LineChart />





      <table class="tablesorter">
        <thead>
            <th>Stock</th>
            <th>Price</th>
            <th>Change</th>
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

export default WatchList;