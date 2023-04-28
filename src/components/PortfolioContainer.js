import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './pages/Project';
import Navigation from './Navigation';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  function displayPage() {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  }

  return (
    <div>
      <Navigation setCurrentPage={setCurrentPage} />

      {displayPage()}
    </div>
  );
}

export default PortfolioContainer;
