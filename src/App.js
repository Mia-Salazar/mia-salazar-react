import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './App.css';

/*Componentes*/
import Header from './components/Header';
import { Title } from './components/Title';
import Search from './components/Search';
import Footer from './components/Footer';

class App extends Component {
  state = {results : []}
  _handleResults = (results) =>{
    this.setState({results})
  }
  _sortMovies(a,b){
    return parseInt(a.Year)  - parseInt(b.Year);
  }
  _renderResults () {
    const { results} = this.state
    return results.sort(this._sortMovies).map(movie => {
      return <div className="result-item" key={movie.imdbID}>
          <div className="result-texts">
            <h4><span>Título de la película:</span> {movie.Title}</h4>
            <p><span>Año de estreno:</span> {movie.Year}</p>
          </div>
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
    })
  }
  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <section className="jumbotron-container">
            <Title>Pasión por el cine</Title>
            <Subtitle text="Peliteca: El fascinante mundo del séptimo arte"/>
            <a href="https://unsplash.com/@mana5280?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="button is-info">Photo by mana5280</a>
          </section>
          <Search onResults={this._handleResults} />
          <section className="results-container">
            {this.state.results.length === 0 ? <div className="results-list"><h3 className="title is-3">Sin resultados</h3> <p>Haz una búsqueda</p></div> : <div className="results-list"><h3 className="title is-3">Con resultados</h3><p>Número total de resultados: {this.state.results.length}</p><div className="result-list">{this._renderResults()}</div></div>}
          </section>
        </main>
        <Footer />
      </div>
    );
  }

}

class Subtitle extends Component {
  render(){
    return(
      <h2 className="title is-2">{this.props.text}</h2>
    )
  }
}

export default App;
