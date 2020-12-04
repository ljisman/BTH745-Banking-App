import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./PieChart.module.css";
import { getRoles } from '@testing-library/react';

export default class PieChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Restaurants", "Payroll", "Gas", "Utilities" , "Groceries", "Entertainment"],
                datasets: [
                    {
                        label: '$',
                        data: [1000, 2500.85, 3040.44, 6000.44, 4000.00, 6000],
                        backgroundColor: ["#2ecc71",
                        "#3498db",
                        "#95a5a6",
                        "#9b59b6",
                        "#f1c40f",
                        "#e74c3c",
                        "#34495e"]
                    }
                ]
            },
            options: {
                legend: {
                    display: true,
                    position: "right"
                },
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: false },
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