import React, { useState } from 'react';
import Navigation from './Navigation';
import classes from './Header.module.css';

function Header(props) {
  return (
    <div>
      <h1> Header </h1>
      <Navigation />
    </div>
  );
}

export default Header;
