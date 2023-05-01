import React, { Component } from "react";
import cookie from 'react-cookies';

class R087_cookieRemove extends Component{
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "react",{
            path :'/',
            expires,
            //secure : true,
            //httpOnly : true
        });
        setTimeout(function() {
            cookie.remove('userid', {
                
            })
        })
    }
}