import React, { Component} from 'react';
import { Headings } from './Headings';
import logo from '../assets/images/camera.PNG';

const API_KEY = '21248117'
export class Search extends Component {
    state = {
        inputMovie: '',
        contador: 0
    }
    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {contador: prevState.contador + 1}
         })
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then (results => {
                console.log(results)
                const {Search = [], totalResults = "0"} = results
                this.props.onResults(Search)
            })
    }
    render() {
		return (
            <section id="search">
                <form className="search-container" onSubmit={this._handleSubmit}>
                    <Headings>Busca, pequeño padawan</Headings>
                    <p>¿Quieres conocer más información sobre una película? ¿No sabes qué puntuación tiene? ¿Quieres saber quién dirigió una cinta? No te quedes con la intriga</p>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Escribe tu película" onChange={this._handleChange} />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                            Search
                            </button>
                        </div>
                    </div>
                </form>
                <article className="search-number-container">
                    <div className="search-number-number-container">
                        <Headings>Número de búsquedas realizadas con éxito</Headings>
                        <p className="number">{this.state.contador}</p>
                        {this.state.contador === 0 ? <p className="search-start">Pulsa en buscar para empezar a sumar búsquedas exitosas</p> : <p className="search-start">The more the merrier, ¡sigue buscando!</p>}
                    </div>
                    <figure>
                        <img src={logo} alt="camara"/>
                    </figure>
                </article>
            </section>

  	    );
	}
  
}

export default Search;