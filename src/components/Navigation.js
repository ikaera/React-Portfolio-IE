import React, { useState } from 'react';
import classes from './Navigation.module.css';

function Navigation({ setCurrentPage }) {
  return (
    <div>
      {/* <h1> Navigation </h1> */}
      <ul>
        <li>
          <a href="#home" onClick={() => setCurrentPage('Home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => setCurrentPage('About')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#Portfolio" onClick={() => setCurrentPage('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={() => setCurrentPage('Contact')}>
            Contact
          </a>
        </li>
        <li>
          <a href="#Resume" onClick={() => setCurrentPage('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
