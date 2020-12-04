import React from 'react';
import './Card.css'
import chart from './LineChart.png'
import {Link } from 'react-router-dom';
import LineChart from './investments/LineGraph';



class Card extends React.Component { 
    render() {
        return (
            <div>
                    <div class="cards">
                        <div class="cardContainer">
                            <Link to="/chequing">
                            <div class="card">
                                <div class="top part">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/visa-7-282549.png" alt="visa-1.png" border="0" />
                                </div>
                                <div class="middle part">
                                <div class="infoheader vcenter">CHEQUING </div>
                                <div class="infocontent number vcenter">
                                    <div class="num center">****-****-****-1234</div>
                                </div>
                                </div>
                                <div class="bottom part">
                                <div class="holderInfo">
                                    <div class="infoheader vcenter">BALANCE</div>
                                    <div class="infocontent name vcenter">$ 3,355.90</div>
                                </div>
                                <div class="expDate">
                                    <div class="infoheader vcenter">EXP. DATE</div>
                                    <div class="infocontent date vcenter">09/2023</div>
                                </div>
                                </div>
                            </div>
                            </Link>
                    </div>
                    <div class="cardContainer">
                        <div class="card">
                            <img src={chart} alt="visa-1.png" border="0" /> 
                           
                        </div>
                    </div>
                </div>
                <br/>
                <div class="cards">
                        <div class="cardContainer">
                            <div class="card">
                                <div class="top part">
                                <img src="https://static-s.aa-cdn.net/img/ios/1409809284/bd09e3d26f7050a2bf023c66726ff5a2?v=1" alt="visa-1.png" border="0" />
                                </div>
                                <div class="middle part">
                                <div class="infoheader vcenter">SAVINGS</div>
                                <div class="infocontent number vcenter">
                                    <div class="num center">**** **** **** 4567</div>
                                </div>
                                </div>
                                <div class="bottom part">
                                <div class="holderInfo">
                                    <div class="infoheader vcenter">BALANCE</div>
                                    <div class="infocontent name vcenter">$ 25,355.99</div>
                                </div>
                                <div class="expDate">
                                    <div class="infoheader vcenter">EXP. DATE</div>
                                    <div class="infocontent date vcenter">11/2023</div>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div class="cardContainer">
                        <div class="card">
                            <img src={chart} alt="visa-1.png" border="0" />                            
                        </div>
                    </div>
                </div>
                <br/>
                <div class="cards">
                        <div class="cardContainer">
                            <Link to="/Investments" >
                            <div class="card">
                                <div class="top part">
                                <img src="https://static-s.aa-cdn.net/img/ios/1409809284/bd09e3d26f7050a2bf023c66726ff5a2?v=1" alt="visa-1.png" border="0" />
                                </div>
                                <div class="middle part">
                                <div class="infoheader vcenter">INVESTMENTS</div>
                                <div class="infocontent number vcenter">
                                    <div class="num center">**** **** **** 7891</div>
                                </div>
                                </div>
                                <div class="bottom part">
                                <div class="holderInfo">
                                    <div class="infoheader vcenter">BALANCE</div>
                                    <div class="infocontent name vcenter">$ 5,584.09</div>
                                </div>
                                <div class="expDate">
                                    <div class="infoheader vcenter">EXP. DATE</div>
                                    <div class="infocontent date vcenter">11/2023</div>
                                </div>
                                </div>
                            </div>
                            </Link>
                    </div>
                    <div class="cardContainer">
                        <div class="card">
                            <img src={chart} alt="visa-1.png" border="0" />                            
                        </div>
                    </div>
                </div>    




            </div>
            

            );
      }

}
export default Card;