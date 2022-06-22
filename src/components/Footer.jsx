import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
       <div className="titles">
       <h2>Thanks athira_tj for design</h2>
        </div>  
       <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="author">
            <h2>All Rights Reserved Ⓒ Orkhan Allahverdiyev</h2>
            </div>

    </div>
  )
}

export default Footer