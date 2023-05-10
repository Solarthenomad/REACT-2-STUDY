import React from "react";
import { Component} from "react";

const axios = require('axios');

class R111_ApiPostJson extends Component {
    componentDidMount() {
        axios.post('/users', {}).then(response = > {
            console.log("response.data.message" + message.data.message)
        })
    }

    render() {
        return (
            <>
               <h1>Call Node Api Post</h1>
            </>
        )
    }

}

export default R111_ApiPostJson;