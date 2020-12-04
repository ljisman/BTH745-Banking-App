
import React from 'react'
import LineChart from '../investments/LineGraph'
import '../Nav.css'
import './chequing.css'
import {Link } from 'react-router-dom';




class Chequing extends React.Component {
  
 
  render() {  
  return (
    <div className="chequing">
      <div class="navbarTop"> 
        <Link to="/Home"> 
        <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' , marginTop: "3px",}}>&#8592;</h2>
        </Link>
        <h3 style={{  textAlign: "center" , paddingLeft: "80px" , marginBottom: "0px", textDecoration: 'none' , marginTop: "8px",}} > Chequing </h3>
      </div>  
        <h3 style={{  textAlign: "center" , marginBottom: "0px", textDecoration: 'none' , marginTop: "18px",}} > $ 7,467.34 </h3>
        
        <div class="graphContainer" >
        <Link to="/TransactionPie">
                    <LineChart />
        </Link>
        </div>
        


        <div>
                <div class="navbarMid">
                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <Link to="/watchlist">
                            <a  to="/watchlist"  class="active">Transfer</a>
                        </Link>
                    </div>

                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Pay Bill</a>
                    </div>
                    

                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Deposit</a>
                    </div>

                </div>

            </div>

      <table class="tablesorter">
        <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Name</th>
            <th>Price</th>
            
        </thead>
        <tbody>
            <tr class="stock decrease">
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
                
            </tr>
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

export default Chequing;