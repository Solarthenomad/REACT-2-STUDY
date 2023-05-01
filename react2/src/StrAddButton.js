import React, {Component} from 'react';
import {add} from './actions';
import {Connect} from 'react-redux;'

class StrAddButton extends Component {
    render() {
        return (
        //    <input value = 'Add200' type = "button" onClick = {this.addString}/>
              <input value = "200" type = "button" onClick = {this.props.addString} />
        )
    }

    addString =()=>{
        this.props.store.dispatch(add());

    }
}

let mapDispatchToPRops = (dispatch, props) =>{
    console.log('Props from App.js : ' + props.AddProp)
    return {
        addString : () => dispatch(add())
    };
};

StrAddButton = Connect(null, mapDispatchToPRops)(StrAddButton);

export default StrAddButton;