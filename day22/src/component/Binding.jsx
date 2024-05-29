import React, { Component } from 'react'

export class Binding extends Component {

    constructor(props){
        super(props)

        this.state = {
            message : 'welcome'
        }
    }

    clickHandler = () =>{
       console.log("This Is Binding ! ");
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}> Click </button>
      </div>
    )
  }
}

export default Binding;
