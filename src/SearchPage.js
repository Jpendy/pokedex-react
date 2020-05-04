import React, { Component } from 'react'
import request from 'superagent';
import './App.css'
import Header from './Header'
import PokemonList from './PokemonList'
import SearchSection from './SearchSection'

export default class SearchPage extends Component {

  state = { 
            searchQuery: null,
            selected: '',
            data: [],
            loading: true,
            page: 1,
            info: {} 
          }

    handleChange = (event) => {
      const value = event.target.value;
      this.setState( {searchQuery: value} );
  }

  getInitialData = async () => {

    const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`);

    this.setState({ data: requestedData.body.results })
  }
  
  componentDidMount() {
    try { this.getInitialData() }
    finally { this.setState({ loading: false }) };
console.log(this.state.selected)
}

  handleClick = async () => {
      const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

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
    if(this.state.selected === 'hp') {
      return array.sort(function(a, b) {
        return b.hp - a.hp;
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

    if(this.state.loading) {
      return ( <img src="http://placekitten.com/200/300" alt="" /> )
    }

    console.log(this.getInitialData)
    console.log(this.state.data)
    return (
      <div>
        

        <Header/>
        
        <main className="main-section">

            <section className="search-section">
                  <SearchSection
                      searchSectionHandleChange={this.handleChange}
                      searchSectionHandleClick={this.handleClick}
                      searchSectionOptionsChange={this.handleOptionChange}
                  />
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
