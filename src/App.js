import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/pages/Project';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Navigation from './components/Navigation';

import React, { useState } from 'react';

function App() {
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
    <div className="page">
      {/* <h1>Irakli Eradze</h1> */}
      <Navigation setCurrentPage={setCurrentPage} />
      {displayPage()}
      <Footer />
    </div>
  );
}

export default App;
