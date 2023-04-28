import React, { useState } from 'react';
import './Navigation.css';

function Navigation({ setCurrentPage }) {
  return (
    <div>
      {/* <h1> Navigation </h1> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#home" onClick={() => setCurrentPage('Home')}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#About" onClick={() => setCurrentPage('About')}>
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#Portfolio" onClick={() => setCurrentPage('Project')}>
            Project
          </a>
        </li>
        <li className="nav-item">
          <a href="#Contact" onClick={() => setCurrentPage('Contact')}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#Resume" onClick={() => setCurrentPage('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
