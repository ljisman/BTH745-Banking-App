import React from 'react';
import ReactDOM from 'react-dom'
import { PieChart } from 'react-minimal-pie-chart';
import { Button } from 'react-bootstrap';
const INVESTMENT ='INVESTMENT';
const TRANSACTION ="TRANSACTION"
const GOALS = 'GOALS'

class Card extends React.Component{
  render(){
    return(
      
      <div class="card">
      <div class="card__front card__part">
        <p class="card__front-square card__square">Balance: $129,902</p>
        {/* <img class="card__front-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png"/> */}
        <img class="card__front-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"/>
        <p class="card_numer">**** **** **** 6258</p>
        
        <div class="card__space-25">
          <span class="card__label">Expires</span>
                <p class="card__info">10/25</p>
        </div>
      </div>
      
      <div class="card__back card__part">
        <div class="card__black-line"></div>
        <div class="card__back-content">
          <div class="card__secret">
            <p class="card__secret--last">420</p>
          </div>
          <img class="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png"/>
          <img class="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"/>
          
        </div>
      </div>
      
    </div>
    
    );
  }
}
class Nav extends React.Component{
  navigate(location){
    this.props.appCallBack(location)
  }
  render(){
    return(
      
      <div className="nav">
         <button onClick={()=>this.navigate('TRANSACTION')}>
       Trasactions
      </button>
         <button onClick={()=>this.navigate('CARD')}>
       Insights
      </button>
        <button >
       Rewards
      </button>
      </div>
    );
  }
}

class PrototypeHomepage extends React.Component{
  render(){
    return(
      
      <div className="nav">
      <b>Accounts<hr style={{borderWidth:'10px',backgroundColor:'black'}}/></b>

      <Button onClick={()=>this.props.onSetView(TRANSACTION)}>Checking $900 ></Button>
      <Button onClick={()=>this.props.onSetView(TRANSACTION)}>Savings $900 ></Button>
      <Button onClick={()=>this.props.onSetView(INVESTMENT)}>Investments ></Button>
      <Button onClick={()=>this.props.onSetView(GOALS)}>Goals ></Button>
      {/* <hr style={{borderWidth:'10px',backgroundColor:'black'}}/> */}
      <b><hr style={{borderWidth:'10px',backgroundColor:'black'}}/>Total $900<hr style={{borderWidth:'10px',backgroundColor:'black'}}/> </b>
      {/* <hr style={{borderWidth:'10px',backgroundColor:'black'}}/> */}
      <button >
      <b>C/C *** *** *** 9084 $900 ></b>
      </button>
      <button >
      <b>C/C *** *** *** 5084  $900 ></b>
      </button>
      <b style={{paddingTop:'20px',fontSize:'30px'}}>Spending Insights </b>
      <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>
      </div>
    );
  }
}


export  {Card, Nav,PrototypeHomepage}