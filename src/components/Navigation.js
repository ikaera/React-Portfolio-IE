import React, { useState } from 'react';
import classes from './Navigation.module.css';

function Navigation(props) {
  return (
    <div>
      {/* <h1> Navigation </h1> */}
      <ul>
        <li>
          <a
            href="#home"
            // onClick={() => handlePageChange('Home')}
          >
            Home
          </a>
        </li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Navigation;
