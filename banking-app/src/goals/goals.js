import React from 'react'
import './goals.css'
import chart from './pieChart.JPG'
class Goals extends React.Component {
    render() {
      return (
        
        <div>
            {/* <button onClick={()=>this.props.onSetView()}>Close</button> */}
        <h1>Goals</h1>
        <div style={{border: "4px", borderColor: "black", borderStyle: "solid" , margin: "5px"}}>
        <h2> Goal: $ 90,000 </h2>
        {/* <div class="breakerDiv"  >  */}
            {/* <h1 style={ { marginBottom: "40px" }}>  Test </h1> */}
            <div class="progress progress-striped">
                    
                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={ {width: "40%"}}   >
                    <span>40% Complete </span>
                </div>
                        
            </div>
        {/* </div> */}
        </div>
        <h2>     --- Categories To Save ---                 </h2>
        <br/>
        <img class="chartImg" src={chart}></img>
        
        </div>
        );
    }
}
export default Goals;