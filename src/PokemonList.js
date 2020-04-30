import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        return (
            <div>
                <li>

                     <h1> { this.props.pokemonProp.pokemon.toUpperCase() } </h1>
                     <img src= { this.props.pokemonProp.url_image } alt = '' />

                     <h1 className="type"> { `Type: ${ this.props.pokemonProp.type_1 } / ${ this.props.pokemonProp.type_2 }  ` } </h1>

                </li>
            </div>
        )
    }
}
