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
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="http://www.miasalazar.com">
                Autora
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  Utilidades
                </div>
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="#search">
                    Busca tu peli
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  	);
	}
  
}

export default Header;