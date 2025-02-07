import React, { Component } from 'react'

class CBCStateEx extends React.Component {
    constructor(){
        super();
        this.state={
            username:"user",
            count:0
        };
    }
    // changename=()=>{
    //     this.setState({username : "user1 is the twin of user"});
    // }
    increment=()=>{
        this.setState({count:this.state.count + 1})
    }
    decrement=()=>{
        this.setState({count:this.state.count - 1})
    }
    reset=()=>{
        this.setState({count:0})
    }
  render() {
    console.log(this);
    return (
      <div>
        CBCStateEx
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changename} >Update the state</button> */}

        <h1>{this.state.count}</h1>
        <div>
            <button onClick={this.increment} >Increment</button>
            <button onClick={this.decrement} >Decrement</button>
            <button onClick={this.reset} >Reset</button>
        </div>
      </div>
    )
  }
}
export default CBCStateEx;



//! trying a counter with state and onClick (ps: it failed)
// import React, { Component } from 'react'

// class CBCStateEx extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             count:0,
//         };
//     }
//     countnum=()=>{
//         this.setState({count:count++})
//     }
//   render() {
//     return (
//       <div>
//         Counter
//         <h1>{this.state.count}</h1>
//         <button onClick={this.countnum}>Click to count</button>
//       </div>
//     )
//   }
// }
// export default CBCStateEx;