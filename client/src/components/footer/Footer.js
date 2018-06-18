import React from 'react';
import iconFB from './icon_fb.png';
import iconInsta from './icon_insta.png';
import iconEmail from './icon_email.png';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="message">♥ Equipe {'{reprograma}'} ♥</p>
      <div>
        <a className="network-social" href="https://www.facebook.com/ReprogramaBr" target="_blank" rel="noopener noreferrer">
          <img src={iconFB} alt="Logo Facebook" id="fb" />
          <label htmlFor="fb">Facebook</label>
        </a>

        <a className="network-social" href="https://www.instagram.com/reprogramabr/" target="_blank" rel="noopener noreferrer">
          <img src={iconInsta} alt="Logo Instagram" id="insta" />
          <label htmlFor="insta">Instagram</label>
        </a>
      </div>

      <div>
        <div className="network-social">
          <img src={iconEmail} alt="Logo Email" id="email" />
          <label htmlFor="email">info@reprograma.com.br</label>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
