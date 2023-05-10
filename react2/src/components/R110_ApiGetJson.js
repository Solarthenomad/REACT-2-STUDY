import React from "react";
import { Component } from "react";


class R110_ApiGetJson extends Component {
    componentDidMount = async() =>{
        const response = await fetch('/users');
        const body = await response.json();
        console.log(
            "body.message : "+body.message
        )
    }

    render(){
        return (
            <>
              <h1>Call Node Api GET</h1>
            </>
        )
    }
}

export default R110_ApiGetJson;