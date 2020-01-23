import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item navbar-title" href="https://bulma.io">
              Peliteca
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <h1 class="title is-1">Pasión sin límites</h1>
        <h2 class="title is-2">Peliteca: Tu aliado de fin de semana</h2>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
