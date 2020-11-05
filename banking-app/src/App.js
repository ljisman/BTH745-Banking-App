import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/sidebar'
import {Card,Nav } from './homepage/hompage';
import './sidebar/sidebar.css'
import TransactionsList from './transactions/TransactionsList';

const CARD ='CARD'
const TRANSACTION='TRANSACTION'
var view=CARD;

function setVeiw(navView){
    view=navView;
    
  }

function App() {


  

  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="container">
        {/* <header className="App-header"> */}
        <div id="page-wrap">
  <h1>Yes Bank {view}</h1>        
            {view===CARD&&<Card/>}
           {view===TRANSACTION&& <TransactionsList/>}
            <Nav appCallBack={setVeiw}/>
        {/* </header> */}
        </div>
      </div>
    </div>
  );
}

export default App;
