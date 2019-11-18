import React from 'react';

import './App.css';
import { userAction } from './actions/userAction';
import { connect } from 'react-redux';





function App(props) {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <div className="App">
      <h1>{props.userName}</h1>
      <button onClick= {() => {props.changeName('welcome')}}>change</button>
    </div>
  );
}

//retrive data
const mapStateToPorps = state =>{
  return{
    userName: state.name
  }
}

//insert data
const mapDispatchToPorps = dispatch =>{
  
  return{
    changeName:(name) => {dispatch(userAction(name))}
    
  }
} 

export default connect(mapStateToPorps,mapDispatchToPorps)(App);
