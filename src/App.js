import Vard from './Card';
import Nav from './Nav'
import Login from './login'
import Home from './Home'
import Investments from './investments/investments'
import Chequing from './chequing/chequing'
import TransactionPie from './chequing/TransactionPie'
import Stock from './investments/stock'

import {Redirect,   HashRouter as Router, Switch, Route,Link } from 'react-router-dom';
import './App.css';
import WatchList from './investments/watchList';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Login} /> */}
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home}/>
        <Route path="/investments" exact component={Investments}/>

        <Route path="/watchlist" exact component={WatchList}/>
        <Route path="/chequing" exact component={Chequing}/>
        <Route path="/transactionpie" exact component={TransactionPie}/>
        <Route path="/stock" exact component={Stock}/>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
