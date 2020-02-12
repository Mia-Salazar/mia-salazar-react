import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './App.css';

/*Componentes*/
import Header from './components/Header';
import { Title } from './components/Title';
import Search from './components/Search';
import Footer from './components/Footer';
import {Results} from './components/Results';
import {Detail} from './pages/Detail';

class App extends Component {
  state = {
    initialSearch: false,
    results : []
  }
  _handleResults = (results) =>{
    this.setState({results, initialSearch:true })
  }
  _sortMovies(a,b){
    return parseInt(a.Year)  - parseInt(b.Year);
  }
  _renderResults () {
    const { results} = this.state
    return results.sort(this._sortMovies).map(movie => {
      return (
        <Results
          id={movie.imdbID}
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ) 

    })
  }
  _renderResultsForm(){
    return this.state.results.length === 0
    ? <div className="results-options"><h3 className="title is-3">Sin resultados</h3></div>
    : <div className="results-options"><h3 className="title is-3">Con resultados</h3><p>Número total de resultados: {this.state.results.length}</p><div className="result-list">{this._renderResults()}</div></div>
  }
  render () {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId){
      return <Detail id={url.searchParams.get('id')}/>
    }
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
            {this.state.initialSearch ? this._renderResultsForm(): <h3 className="title is-3 results-options">Haz tu primera búsqueda</h3>}
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
