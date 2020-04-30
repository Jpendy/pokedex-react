import React, { Component } from 'react'
import request from 'superagent';
import './App.css'
import Header from './Header'
import PokemonList from './PokemonList'

export default class App extends Component {

  state = { searchQuery: null,
            selected: '',
            data: [] }

    handleChange = (event) => {
      const value = event.target.value;
      this.setState( {searchQuery: value} );
  }
  getInitialData = async () => {
    const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`);

    this.setState({ data: requestedData.body.results })
  }
  
  componentWillMount() {
this.getInitialData()
console.log(this.state.selected)
}
  handleClick = async () => {

      const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

      // console.log(requestedData.body.results[0])
      this.setState({ data: requestedData.body.results })

      console.log(requestedData)
  }

  handleOptionChange = (e) => {
    this.getInitialData()
    this.setState({ selected: e.target.value });
  }


  render() {

    console.log(this.getInitialData)
    console.log(this.state.data)
    return (
      <div>
        

        <Header/>
        
        <main className="main-section">

            <section className="search-section">
                  
                <input onChange={ this.handleChange } ></input>

                <button onClick={ this.handleClick }>Search</button>

                <select onChange={this.handleOptionChange}>
                    <option value="" >All</option>
                    <option value="noraml" >normal</option>
                    <option value="fire" >fire</option>
                    <option value="water" >water</option>
                    <option value="grass" >grass</option>
                    <option value="flying" >flying</option>
                    <option value="bug" >bug</option>
                    <option value="poison" >poison</option>
                    <option value="dragon" >dragon</option>




                </select>

            </section>

            <section className="render-section">
              <ul>
                  {
                    this.state.data.filter(item => {
                      if (!this.state.selected) return true;
                      return  item.type_1 === this.state.selected || item.type_2 === this.state.selected;

                    }).map(item => {
                      return <PokemonList pokemonProp = { item } />;
                        
                    })


                  }
              </ul>
              </section>

          </main>
      </div>
    )
  }
}
