import React from "react";
import { Component } from "react";
import {Connect} from 'react-redux;'
import StrAddButton from "../StrAddButton";
import CookieSave from './R085_cookieSave';
import {Route} from 'react-router-dom';
import reactRouter from './R089_reactRouter'
import reactRouter2 from './reactRouter2';
import reactDebounce from './R094_reactDebounce';
import reactThrottle from './R095_reactThrottle';
import floatingPopulationList from "./Floating_population/floatingPopulazzzzxationList";
import reactsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart';
import reactProxy from './R109_reactProxy';

//css
import '../css/new.css';

//header
import HeaderAdmin from './Header/Header admin';

//footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';



class App extends Component {
  render() {
    return (
      <div className = "App">
        <HeaderAdmin />
        <h1>Start React App copyright by  @Solarthenomad</h1>
        <Route exact path = '/' component = {LoginForm}/>
        {/* <span>{this.props.store.getState().data.str}</span><br/>*/}
        <span>{this.props.str}</span><br/>
        {/*<StrAddButton store = {this.props.store}/> */}
        <CookieSave />
        <StrAddButton AppProp="200"/>
        <Route exact path = '/' component={reactRouter}/>
        <Route  exact path = '/reactRouter2' component= {reactRouter2}/>
        <Route exact path = '/' component={LoginForm}/>
        <Route exact path = '/Debounce' component={reactDebounce}/>
        <Route exact path='./Throttle' component= {reactThrottle}/>
        <Route path='/floatPopulationList' component={floatingPopulationList}/>
        <Route path ='/rechartsSimpleLineChart' component={reactsSimpleLineChart}/>
        <Route path = '/floatingPopulationListChart' component= {floatingPopulationListChart} />
        <Route exact path = '/reactProxy' component = {reactProxy} />
        <Footer />
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
