import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ButtonBackHome extends Component {
    render() {
        return (
            <Link to="/" className="button is-info">Vuelve al incio</Link>

        )
        
    }
}