import React, { Component } from 'react'
import request from 'superagent';
import PokemonList from './PokemonList';
// import './detail-page.css';
import Header from './Header'
import './App.css'

export default class DetailPage extends Component {

    state = {
        data: []
    }

    async componentDidMount() {

        const requestedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
        console.log(requestedData.body)
        this.setState({ data: requestedData.body.results })
    }

    render() {
        return (
            <div>
                <Header/>
                <ul>
                {
                    this.state.data
                    ? this.state.data.map(item => <PokemonList pokemonProp = { item } />)
                    : <div>Loading</div>
                }
                </ul>
                
            </div>
        )
    }
}
// `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`