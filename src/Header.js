import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="header-h1">Jake's PokeDex</h1>
                    <NavLink className="nav-link" to="/"> Home </NavLink>
                    {/* <h1 className="nav-h1">Nav</h1> */}
                </header>
                
            </div>
        )
    }
}
