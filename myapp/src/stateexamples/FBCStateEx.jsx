import React, { useState } from 'react'

const FBCStateEx = () => {
    // const data = React.useState(100);
    // console.log(data[0])
    // console.log(data[1])

    const [value, setValue] = useState("mru");
    // console.log(value);
    let changename=()=>{
        setValue("mallareddy university")
    }

    //! using usestate for counter
    // const [count, setCount] = useState(0);
    // let  increment = ()=>{
    //     setCount(count+1)
    // }
    // let  decrement = ()=>{
    //     setCount(count-1)
    // }
    // let  reset = ()=>{
    //     setCount(0)
    // }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changename} >Change state</button>
        {/*//! using usestate for counter*/}
        {/* <h1>{count}</h1>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={reset} >Reset</button> */}
    </div>
  )
}

export default FBCStateEx
