import React from 'react';
import ReactDOM from "react-dom";
import { Line } from 'react-chartjs-2'
import { Row,Col,Button,Badge } from 'react-bootstrap';
const INVESTMENT ='INVESTMENT'
const HOMEPAGE = 'HOMEPAGE'
var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "APPL",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "AMZN",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
			label: "BABA",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [12, 23, 54, 19, 544, 65, 90]
		}
	]
};
var options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  }
export default class Investments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data:'',axes:'', ticker1:387,ticker2:898,ticker3:388,ticker:'appl',screen:'WATCHLIST',justBought:false};  

    }

    randomNumber(){
        setInterval(()=>{
           
            this.setState( {ticker1:Math.floor(Math.random() * this.state.ticker1+50) + 1});
            this.setState( {ticker2:Math.floor(Math.random() * this.state.ticker2+50) + 1});
            this.setState( {ticker3:Math.floor(Math.random() * this.state.ticker3-50) + 1});
        },180000)

    }
     
    componentDidMount() { 
        
        this.randomNumber()
  
  
        }
        
            
        
        setTicker(ticker){
            this.setState({ticker:ticker})
        }  
        
        switchScreen(screen){
            this.setState({screen:screen})
        }

        close(){
            this.props.onSetView(HOMEPAGE)
        }
     
    
    render(){
      return(
        
        <div >
 {  this.state.screen==='WATCHLIST'&&         <div>
 {/* <Chart data={this.data} axes={this.axes} /> */}
 <div style={{padding:10}}>
     <Row style={{marginLeft:'90px'}}>
     <h3>Investments</h3>
     </Row>
     
 <Line data={data} options={ options} width="600" height="250"/>
 <div>Total investment 90$</div>
 <div>
     <Button variant="success" onClick={()=>this.switchScreen('SELECTTICKER')}>Buy</Button>
 </div>
 <div>
     <Button style={{margin:2, fontSize:'10px'}}variant="info">Charts</Button>
     <Button style={{margin:2, fontSize:'10px'}}variant="info">Best Preforming</Button>
     <Button style={{margin:2, fontSize:'10px'}}variant="info">All Investments</Button>
 </div>
 <div>
 <table style={{width:'100%'}} >
  <tr>
    <th>Holdings</th>
    <th>Stock</th>
    <th>Profit</th>
  </tr>
  {this.state.ticker==="BABA"&& this.state.justBought&&<tr>
    <td>BABA</td>
    <td>3000</td>
    <td>50+</td>
  </tr>}
  <tr>
    <td>APPL</td>
    <td>900</td>
    <td>940-</td>
  </tr>
  {this.state.ticker==="MSFT"&&this.state.justBought&&<tr>
    <td>MSFT</td>
    <td>900</td>
    <td>940-</td>
  </tr>}
  {this.state.ticker==="AMZN"&&this.state.justBought&&<tr>
    <td>AMZN</td>
    <td>900</td>
    <td>940-</td>
  </tr>}
  {this.state.ticker==="TCEHY"&&this.state.justBought&&<tr>
    <td>TCEHY</td>
    <td>900</td>
    <td>940-</td>
  </tr>}
  <tr>
    <td>FB</td>
    <td>900</td>
    <td>940-</td>
  </tr>
</table> 
 </div>
 </div>
 </div>}
{<div>
{this.state.screen==='BUY'||this.state.screen==='SELECTTICKER'&&<h3>Buy/Sell</h3>}
<div>
    {this.state.screen==='BUY'&&<div style={{flexDirection:'row',padding:10,marginTop:40}}>
                    {this.state.ticker==='FB'&&<h2>FB <Badge variant="success">${this.state.ticker1}</Badge></h2>}
                    {this.state.ticker==='TCEHY'&&<h2>TCEHY <Badge variant="success">${this.state.ticker2}</Badge></h2>}
                    {this.state.ticker==='AMZN'&&<h2>AMZN <Badge variant="danger">${this.state.ticker2}</Badge></h2>}
                    {this.state.ticker==='MSFT'&&<h2>MSFT <Badge variant="danger">${this.state.ticker1}</Badge></h2>}
    <Row>
        <div style={{flex:1}} >
        <input style={{width:'30%'}} type="text"></input> Buy
        </div>
        <div style={{flex:1}}>
        <input style={{width:'30%'}} type="text"></input> Sell
        </div>
        </Row>
        <Button style={{margin:2}} variant="success"  onClick={()=>{this.switchScreen('WATCHLIST')
    this.setState({justBought:true})
    }}>Submit</Button>
       
    </div>}
{   this.state.screen==='SELECTTICKER'&&<div>
    Watch List
<table style={{width:'100%'}} >
  <tr>
    <th>Selected</th>
    <th>Ticker</th>
    <th>Holding</th>
    <th>Price</th>
  </tr>
  <tr>
  <td><input type="button" onClick={()=>{
      this.setTicker('FB')
      this.switchScreen('BUY')
      
  }} value='Select'></input></td>
    <td><Badge variant="secondary">FB</Badge></td>
    <td>0</td>
    <td>{this.state.ticker1}</td>
  </tr>
  <tr>
  <td><input type="button" value='Select' onClick={()=>{
      this.setTicker('TCEHY')
      this.switchScreen('BUY')
      
  }} ></input></td>
  <td><Badge variant="secondary">TCEHY</Badge></td>
  <td>0</td>
    
    <td>{this.state.ticker2}</td>
  </tr>
  <tr>
  <td><input type="button" onClick={()=>{
      this.setTicker('AMZN')
      this.switchScreen('BUY')
      
  }} value='Select'></input></td>
    <td><Badge variant="secondary">AMZN</Badge></td>
    <td>0</td>
    <td>{this.state.ticker1}</td>
  </tr>
  <tr>
  <td><input type="button" onClick={()=>{
      this.setTicker('MSFT')
      this.switchScreen('BUY')
      
  }} value='Select'></input></td>
    <td><Badge variant="secondary">MSFT</Badge></td>
    <td>0</td>
    <td>{this.state.ticker1}</td>
  </tr>
</table> 
</div>}
</div>
 </div> }
      </div>
     
      );
    }
  }

  