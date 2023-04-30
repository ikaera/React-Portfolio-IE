import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="footer">
      {/* <h1> Footer </h1> */}
      <p>
        <span className="copyright">Copyright &copy; 2023</span>
      </p>
      <ul className="footer-ul">
        <li>
          <a
            href="https://www.linkedin.com/in/irakli-eradze-8317545/"
            target="_blank"
            rel="noreferrer"
            className="footer-anchor"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#6d6d6e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ikaera?tab=repositories"
            target="_blank"
            rel="nonreferrer"
            className="footer-anchor"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#6d6d6e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:IrakliEradzeG@gmail.com"
            target="_blank"
            rel="nonreferrer"
            className="footer-anchor"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#6d6d6e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
