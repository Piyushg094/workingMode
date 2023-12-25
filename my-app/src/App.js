import React, { Component } from 'react'
import Counter from './Counter';
 class App extends Component {
   constructor(){
    super();
    this.state={
      value:1,
      image:"none"
   }
  }


  componentDidMount(){
    console.log("piyush gupta first time");
  }

  increment()
  { 
    this.setState({value: this.state.value+1})
  }
  decrement()
  { 
    this.setState({value: this.state.value-1})
  }

  componentWillUnmount()
  {
    console.log("remove");
  }
 
  render() {
    return (
      <div>
        {/* <Counter num={this.state.value}></Counter> */}
       <button onClick={()=>{this.increment()}}>click +</button>
       <button onClick={()=>{this.decrement()}}>click -</button>
      </div>
    )
      
  }
}

export default App;