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
  statSort = array => {
    if(!this.state.selected) {
     return array.filter(() => true)
  }
    if(this.state.selected === 'attack') {
      return array.sort(function(a, b) {
        return b.attack - a.attack;
       })
    }
    if(this.state.selected === 'defense') {
      return array.sort(function(a, b) {
        return b.defense - a.defense;
       })
    }
    if( this.state.selected === 'mega' ){
      return array.filter(item => {
        return item.pokemon.includes('mega')
      })
    }

    
    else {
      return array.filter(item => {
        return item.type_1 === this.state.selected || item.type_2 === this.state.selected;
   })
    }
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
                    <option value="normal" >normal</option>
                    <option value="fire" >fire</option>
                    <option value="water" >water</option>
                    <option value="grass" >grass</option>
                    <option value="flying" >flying</option>
                    <option value="bug" >bug</option>
                    <option value="poison" >poison</option>
                    <option value="dragon" >dragon</option>
                    <option value="attack" >attack</option>
                    <option value="defense" >defense</option>
                    <option value="mega" >mega</option>






                </select>

            </section>

            <section className="render-section">
              <ul>
                  {
                    this.statSort(this.state.data).map(item => {
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
