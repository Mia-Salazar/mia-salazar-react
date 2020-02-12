import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

export class Results extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }
    render(){
        const {id, poster, title, year} = this.props
    
        return ( 
            <article className="card result-item">
                <div className="content result-texts">
                    <h4><span>Título de la película:</span> {title}</h4>
                    <p><span>Año de estreno:</span> {year}</p>
                    <a href={`?id=${id}`} className="button is-info">Más información</a>
                </div>
                <div className="card-image">
                    <figure className="image">
                        <img src={poster} alt={title}/>
                    </figure>
                </div>
            </article>
        )
    }

    
}