import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Headings } from '../components/Headings';
import { ButtonBackHome } from '../components/ButtonBackHome';

export class NotFound extends Component {
    render() {
        return (
        <div className="error-page">
            <Headings>Esta página no existe</Headings>
            <h2>Welcome to the dark side</h2>
            <figure>
                <img src="https://images.unsplash.com/photo-1484656551321-a1161420a2a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
            </figure>
            <ButtonBackHome></ButtonBackHome>
        </div>
        )
        
    }
}