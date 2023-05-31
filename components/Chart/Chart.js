import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map(dataPoints => <ChartBar key={dataPoints.id} value={dataPoints.value} maxValue={null}lable={dataPoints.lable} />)}
    </div>
};

export default Chart;