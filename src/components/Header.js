import React, { useState } from 'react';
import Navigation from './Navigation';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header"> Irakli Eradze </h1>
      <Navigation />
    </div>
  );
}

export default Header;
