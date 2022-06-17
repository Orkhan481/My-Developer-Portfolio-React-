import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavbarAndHeader = () => {
    return (
        <div className="n-and-h">
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" id='logo'>LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="header">
                <h1>Orkhan Allahverdiyev</h1>
                <div className="typed">
                    <Typed
                        strings={[
                            'Junior Front-End Developer',
                            'System Engineering']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                </div>
                <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>

    )
}

export default NavbarAndHeader