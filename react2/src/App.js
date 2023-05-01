import React from "react";
import { Component } from "react";
import {Connect} from 'react-redux;'
import StrAddButton from "./StrAddButton";
import CookieSave from './R085_cookieSave';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React App copyright by  @Solarthenomad</h1>
        {/* <span>{this.props.store.getState().data.str}</span><br/>*/}
        <span>{this.props.str}</span><br/>
        {/*<StrAddButton store = {this.props.store}/> */}
        <CookieSave />
        <StrAddButton AppProp="200"/>
      </div>
      
      
    );
  };
};

let mapStateToProps = (state, props) =>{
  console.log('Props from index.js :' + props.indexProp)
  return {
    str : state.data.str,
  };
};

App = Connect(mapStateToProps, null)(App);

export default App;
