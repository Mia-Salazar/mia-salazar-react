import React from 'react';
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
		return (
      <header>
        <nav className="navbar is-fixed-top is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item main-title" href="/">
              Peliteca
            </a>
						<FontAwesomeIcon icon={faAsterisk} />
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="http://www.mia-search-movies-project.surge.sh">
                Github link
              </a>
              <a className="navbar-item" href="#search">
                Busca tu peli
              </a>
            </div>
          </div>
        </nav>
      </header>
  	);
	}
  
}

export default Header;