import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const API_KEY = '21248117'
export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
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
        const {id} = this.props
        this._fetchMovie({id})
    }
    render(){
        const {Title, Year, Runtime, Poster, Plot, Genre, Metascore, Director, Actors, Awards, Writer} = this.state.movie
        return (
            <div class="detail-container">
                <Header/>
                <main className="main detail">
                    <div className="detail-title-wrapper"style={{  
                        backgroundImage: `url(${Poster})`
                        }}>
                        <h1 className="detail-title">{Title}</h1>
                    </div>
                    <section className="detail-item">
                        <div class="score">
                            <p>Puntuación</p>
                            <h2>{Metascore}</h2>
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

                <Footer />
            </div>

        )
    }

    
}