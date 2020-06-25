import React, {Component} from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      doubleCount: false,
    }
   
  }

  increment =()=> {
    // this is where your code goes
    // could have done with one condition for both increment and decrement !!!
    // decrement would have been ( this.state.count > 0)
    // if (this.state.count < 20){
    // this.setState({
    //  count: this.state.count +1
    // })
    // }
   

      if (this.state.doubleCount === false && this.state.count < 20){
        
      this.setState({
       count: this.state.count +1
        })
      }else if (this.state.doubleCount === true && this.state.count < 20){
        this.setState({
          count: this.state.count +2
           })
      }

  
  }

  decrement = () => {

    if (this.state.doubleCount === false && this.state.count > 0 ){
        
      this.setState({
       count: this.state.count - 1
        })
      }else if (this.state.doubleCount === true && this.state.count > 0){
        this.setState({
          count: this.state.count - 2
           })
      }
  }

  clear = ()=> {

    
    this.setState({
      count: this.state.count = 0
    })
  }

  double = () => {
    if(this.state.doubleCount){
      this.setState({
        doubleCount: false,
      })
    } else{
      this.setState({
        doubleCount: true,

      })
    }
  }

  render () {
    return(
      <div className = "container"> 
        <div className = "navBar"> Counter.js</div> 
        <div className ="counter">
          <h1>{this.state.count}</h1>
          <button type = "button" onClick={this.increment}>Increment</button>
          <button type = "button" onClick={this.decrement}>Decrement</button>
          <button type = "button" onClick={this.clear}> clear</button>
          <button type = "button" onClick={this.double}> 
          {this.state.doubleCount ? 'Double Count' : 'Single Count'}</button>
        </div>
      


      </div>
    );
  }
}

export default Counter;