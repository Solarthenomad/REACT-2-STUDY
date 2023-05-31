import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoints=>dataPoints.value);  //datapoints 객체를 숫자로 변환한다는 의미
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoints => <ChartBar key={dataPoints.id} value={dataPoints.value} maxValue={totalMaximum}label={dataPoints.lable} />)}
    </div>
};

export default Chart;