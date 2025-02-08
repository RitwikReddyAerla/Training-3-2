import React from 'react'
import "./mystyles.css"

function FunctionalComponent(props){
    console.log(props);
    let className = props.apply ? 'heading':'';
    let inline = {
        color: 'Red',
        fontSize:'100px'
    }

  return (
    <div>
      <h1 style={inline} >Welcome to mru {props.city}, {props.state}</h1>
      {props.children}
    </div>
  )
}

export default FunctionalComponent
