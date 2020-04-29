import React, { Component } from 'react'

export default class App extends Component {

  state = { searchQuery: null }

    handleChange = (event) => {
      const value = event.target.value;
      this.setState( {searchQuery: value} );
  }

  handleClick = () => {
    console.log('hello')
  }

  render() {

    return (
      <div>
        
        <input onChange={ this.handleChange } ></input>
        <button onClick={ this.handleClick }>Search</button>


      </div>
    )
  }
}
