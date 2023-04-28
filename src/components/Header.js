import React, { useState } from 'react';
import Navigation from './Navigation';
import classes from './Header.module.css';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header"> Irakli Eradze </h1>
      <Navigation />
    </div>
  );
}

export default Header;
