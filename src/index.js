import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    name: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const cstore = createStore(rootReducer,{name:'hello'}, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render( <Provider store ={cstore}> <App/> </Provider>, document.getElementById('root'));



