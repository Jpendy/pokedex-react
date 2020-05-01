import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokemonList extends Component {
    render() {
        const pokemon = this.props.pokemonProp;
        return (
            <div>
                <li>
                    <Link to={`/pokemon/${pokemon.pokemon}`}>
                        
                     <h1> { this.props.pokemonProp.pokemon.toUpperCase() } </h1>
                     <img src= { this.props.pokemonProp.url_image } alt = '' />

                     <h1 className="type"> { `Type: ${ this.props.pokemonProp.type_1 } / ${ this.props.pokemonProp.type_2 }  ` } </h1>
                     <h1> { `HP: ${ this.props.pokemonProp.hp } ` } </h1>

                     <h1> { `Attack: ${ this.props.pokemonProp.attack } ` } </h1>
                     <h1> { `Defense: ${ this.props.pokemonProp.defense } ` } </h1>
                     <h1> { `Ability: ${ this.props.pokemonProp.ability_1 } ` } </h1>
                     <h1> { `Hidden-Ability: ${ this.props.pokemonProp.ability_hidden } ` } </h1>

                     </Link>
                </li>
            </div>
        )
    }
}
