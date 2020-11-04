import logo from './logo.svg';
import './App.css';
import {Card,Nav } from './homepage/hompage';


function App() {
  return (
    <div className="container">
      {/* <header className="App-header"> */}
        <Card/>
        <Nav/>
      {/* </header> */}
    </div>
  );
}

export default App;
