import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
		return (
            <footer className="footer-container">
                <div className="footer-title">
                    <p className="main-title">Peliteca</p>
                    <FontAwesomeIcon icon={faAsterisk} />
                </div>
                <div className="footer-wrapper-body">
                    <div className="footer-author">
                        <p>Autora: <a href="www.miasalazar.com">Mía Salazar </a></p>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/miasalazar/">Linkedin</a>
                            <a href="https://github.com/Mia-Salazar/">Github</a>
                            <a href="mailto:maria.sgr@gmail.com">Mail</a>
                        </div>
                    </div>
                    <div className="content has-text-centered footer-code">
                        <p> Created with <a href="http://opensource.org/licenses/mit-license.php"> Bulma</a>
                        </p>
                        <p> Created with <strong>React</strong>
                        </p>
                        <p><a href="http://www.omdbapi.com/">OMBD API </a >used
                        </p>
                    </div>
                </div>

            </footer>
  	    );
	}
  
}

export default Footer;