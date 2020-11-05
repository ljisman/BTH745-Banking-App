import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/sidebar'
import {Card,Nav } from './homepage/hompage';
import './sidebar/sidebar.css'

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="container">
        {/* <header className="App-header"> */}
        <div id="page-wrap">
          <h1>Yes Bank</h1>        
            <Card/>
            <Nav/>
        {/* </header> */}
        </div>
      </div>
    </div>
  );
}

export default App;
