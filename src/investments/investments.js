
import React from 'react'
import LineChart from './LineGraph'
import '../Nav.css'
import './investments.css'
import {Link } from 'react-router-dom';




class Investments extends React.Component {
  
 
  render() {  
  return (
    <div className="Investments">
      <div class="navbarTop"> 
        <Link to="/Home"> 
        <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' , marginTop: "3px",}}>&#8592;</h2>
        </Link>
        <h3 style={{  textAlign: "center" , paddingLeft: "80px" , marginBottom: "0px", textDecoration: 'none' , marginTop: "8px",}} > Investments </h3>
      </div>  
        <h3 style={{  textAlign: "center" , marginBottom: "0px", textDecoration: 'none' , marginTop: "18px",}} > $ 12,467.34 </h3>
        <LineChart />



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
                            <a  to="/watchlist"  class="active">Watch List</a>
                        </Link>
                    </div>
    

                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Funding</a>
                    </div>

                </div>

            </div>

      <table class="tablesorter">
        <thead>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Change</th>
            <th>%</th>
        </thead>
        <tbody>
            <tr class="stock decrease">
                <td class="name"> AMD </td>
                <td class="value"> 34</td>
                <td class="value"> 211.90</td>
                <td class="change"> -17.94</td>
                <td class="percentage">-8.48%</td>
            </tr>
            <tr class="stock increase">
                <td class="name"> TSLA </td>
                <td class="value"> 164</td>
                <td class="value"> 11.90</td>
                <td class="change"> 1.94</td>
                <td class="percentage"> 10.48%</td>
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

export default Investments;