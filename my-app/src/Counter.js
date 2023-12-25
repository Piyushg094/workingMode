import React, { Component } from 'react'

 class Counter extends Component {
   

    componentDidUpdate(prevprops,prevState)
    {   console.log(prevState);
        console.log(prevprops); 
        if(prevprops !==prevState)
        {
            console.log("component updated");
        }
    }
  
    render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
        </div>
    )
  }
}

export default Counter;