import React, { Component } from 'react'

export default class SearchSection extends Component {
    render() {
        return (
            <div>
                    <input onChange={ this.props.searchSectionHandleChange } ></input>

                    <button onClick={ this.props.searchSectionHandleClick }>Search</button>

                    <select onChange={this.props.searchSectionOptionsChange}>
                        <option value="" >All</option>
                        <option value="normal" >Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water" >Water</option>
                        <option value="grass" >Grass</option>
                        <option value="flying" >Flying</option>
                        <option value="bug" >Bug</option>
                        <option value="poison" >Poison</option>
                        <option value="dragon" >Dragon</option>
                        <option value="attack" >Attack</option>
                        <option value="defense" >Defense</option>
                        <option value="mega" >Mega</option>
                        <option value="hp" >HP</option>                
                    </select>

                    { this.props.pageProp < this.props.lengthProp && <button onClick={ this.props.routeToNextPageProp }>Next</button> }
                      { this.props.pageProp > 1 && <button onClick={ this.props.routeToPreviousPageProp }>Previous</button> }
                      { <h3> page: {this.props.pageProp } / { this.props.lengthProp } </h3> }

            </div>
        )
    }
}
