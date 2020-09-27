import React, {Component} from 'react';
import './App.css';
import Timer from './timer/timer';


class App extends Component {
  
  render(){
  return (
      <Timer time = {30}
            autostart
            step ={2000} 
            onTick = {(time) => console.log("Залишилось часу: " + time)}
            />
  );
}
}

export default App;
