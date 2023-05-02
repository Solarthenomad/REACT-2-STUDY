import React from "react";
import { ReactDOM } from "react-dom";
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reudcers from './reducers';
import {applyMiddleware} from 'redux';
import {BrouserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

/*const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer 실행 전');
  console.log('2. action.type : ' + action.type+', store str: ' + store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : ' + action.type + ', store str :' + store.getState().data.str );
  return result;
}


const store = createStore(reudcers, applyMiddleware(CallMiddleware));

const listener =() =>{
  ReactDOM.render (
    <Provider store= {store} >
      <App indexProp = "react"/>
    </Provider>,
    document.getElementById('root')
  );

};

store.subscribe(listener);
listener(); */

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('root'));
