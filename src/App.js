import React, { Component } from 'react'
import "./style.scss"

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = ()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count: this.state.count -1})
  }
  render() {
    return (
      <div className='container'>
        <div className="box">
          <div className="main">
            <button onClick={this.increment} className='counter'>+</button>
            <button onClick={this.decrement} className='counter'>-</button>
          </div>
          <h2>Your Count is-{this.state.count}</h2>
        </div>
      </div>
    )
  }
}

