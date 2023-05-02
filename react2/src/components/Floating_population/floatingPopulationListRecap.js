import React from "react";
import { Component } from "react";
import axios from "axios";

class floatingPopulationListRecap extends Component {
    constructor(props) {
        super(props);

        this.state= {
            responseFPList : '',
            append_FPList : '',
        }
    }

    componentDidMount() {
        
    }

    callFloatPopulListApi =async() =>{
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&' +'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=30',{} )
        .then(response => {
            try {
                this.setState({
                    responseFPList :response
                });
                this.setState({append_FPList:this.FloatPopulListAppend()});
            } catch(error) {
                alert(error);
            }
        }).catch(error => { alert(error); return false; })

    }

    FloatPopulListAppend =() =>{

    }
}