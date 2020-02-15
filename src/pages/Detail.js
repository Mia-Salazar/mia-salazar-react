import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const API_KEY = '21248117'
export class Detail extends Component {
    static propTypes = {
        match:PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state={
        movie: {}
    }
    _fetchMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then (movie => {
            console.log({movie})
            this.setState({movie})
        })
    }
    _goBack(){
        window.history.back()
    }
    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    render(){
        const {Title, Year, Runtime, Poster, Plot, Genre, Metascore, Director, Actors, Awards, Writer} = this.state.movie
        return (
            <main className="main detail detail-container">
                <div className="detail-title-wrapper" style={{  
                    backgroundImage: this.state.movie.Poster !== undefined 
                    ? `url(${Poster})`
                    : `url(https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80)`
                    }}>
                    <h1 className="detail-title">{Title}</h1>
                </div>
                <section className="detail-item">
                    <div className="score">
                    <p>{this.state.movie.Metascore !== "N/A" ? <span>Puntuación</span> : <span>Puntuación desconocida</span>}</p>
                    <h2>{this.state.movie.Metascore !== "N/A" ? Metascore : ""}</h2>
                    </div>
                    <button className="button is-info" onClick={this._goBack}>Ir atrás</button>
                    <article className="card result-item">
                        <div className="content result-texts">
                            <p><span>Año de estreno:</span> {Year}</p>
                            <p><span>Duración:</span> {Runtime}</p>
                            <p><span>Género:</span> {Genre}</p>
                            <p><span>Director:</span> {Director}</p>
                            <p><span>Guionista:</span> {Writer}</p>
                            <p><span>Actores:</span> {Actors}</p>
                            <p><span>Argumento:</span> {Plot}</p>
                        </div>
                    </article>
                </section>
                <section className="detail-awards">
                    <div className="detail-icon">
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <p>Premios:</p>
                    <p>{Awards}</p>
                </section>
                    
                </main>

        )
    }

    
}