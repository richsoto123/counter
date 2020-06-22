import React, {Component} from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }
  render () {
    return(
      <div className = "container"> 
        <div className = "navBar"> Counter.js</div> 
        <div className ="counter">
          <h1>{this.state.count}</h1>
          <button type = "button">Increment</button>
          <button type = "button">Decrement</button>
        </div>
      


      </div>
    );
  }
}

export default Counter;