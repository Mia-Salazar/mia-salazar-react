import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.css';

/*Componentes*/
import Header from './components/Header';
import Footer from './components/Footer';
import {Detail} from './pages/Detail';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';

class App extends Component {
  componentWillUnmount() {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
