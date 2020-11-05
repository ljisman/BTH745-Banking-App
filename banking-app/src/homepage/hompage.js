import React from 'react';
import ReactDOM from 'react-dom'
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


export  {Card, Nav}