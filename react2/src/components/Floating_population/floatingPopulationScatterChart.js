import React from "react";
import { Component } from "react";
import { ScatterChart, Scatter, XAxis, YAxis , CartesianGrid, Tooltip } from "recharts";
import axios from 'axios';

class floatingPopulationScatterChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList : '',
            append_FPList : '',
        }
    }

    componentDidMount = async() =>{
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&' + 'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=5', {})
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&' + '', {})
        .then(response =>{
            try {
                this.setState({
                    responseFPList : response
                });
                this.setState({
                    append_FPList : this.state.responseFPList.data.entry
                });

            } catch(error) {
                alert(error);

            }
        }).catch(error => {alert(error);
        return false;});
    }

    render(){
        return (
            <ScatterChart
               width = {1000}
               height={300}
               margin = {{
                top : 5, right : 50, left : 20, bottom : 5, 

               }}
            >
                <CartesianGrid />
                <XAxis type = "number" dataKey ="연령대(10세 단위)" name = "연령대"  uint="세"/>
                <YAxis type = "number" dataKey = "유동 인구 수" name = "유동 인구 수" unit="명"/>
                <Tooltip cursor = {{strokeDasharray : '3 3'}} />
                <Scatter data = {this.state.append_FPList} fill = "#003458" />
            </ScatterChart>
        )
    }





}