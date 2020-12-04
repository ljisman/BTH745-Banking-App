import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import { getRoles } from '@testing-library/react';

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "April" , "May", "June"],
                datasets: [
                    {
                        label: '$',
                        data: [1000, 2500.85, 3040.44, 6000.44, 4000.00, 6000],
                        backgroundColor: "green"

                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
               
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}