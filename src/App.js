import React, { Component } from 'react'
import request from 'superagent';

export default class App extends Component {

  state = { searchQuery: null,
            data: '' }

    handleChange = (event) => {
      const value = event.target.value;
      this.setState( {searchQuery: value} );
  }

  handleClick = async () => {
      const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

      // console.log(requestedData.body.results[0])
      this.setState({ data: requestedData.body.results[0] })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        
        <input onChange={ this.handleChange } ></input>

        <button onClick={ this.handleClick }>Search</button>


      <h1> this is a test {this.state.data.pokemon} </h1>

      </div>
    )
  }
}
