import React, { Component } from 'react'

class CBCPropsex1 extends Component {
  render() {
    console.log(this);
    return(
        <div>CBCPROPSX!

            <h1>{this.props.username}</h1>
            <h1>{this.props.age}</h1>
            <div>
              {this.props.desig[0]}
            </div>
            <h2>{this.props.userdetails.area}</h2>

            <button onClick={this.props.sendfun}>Click on the button</button>
        </div>
    )
  }
}
export default CBCPropsex1;