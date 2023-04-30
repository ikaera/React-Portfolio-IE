import React, { useState } from 'react';
import './Navigation.css';
import resumePDF from '../assets/Resume-Irakli-E.pdf';
const PDF_Resume =
  'https://docs.google.com/document/d/1677J2jOdyiuQ-0EPw6GkmcUUQn2_Ep26BrRXIZv2amk/edit#heading=h.ptzf6k1s5l03';

function Navigation({ setCurrentPage }) {
  const downloadFile = url => {};
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
          <a
            href={resumePDF}
            download="IrakliEradze.PDF"
            // target="_blank"
            // href="https://docs.google.com/document/d/1677J2jOdyiuQ-0EPw6GkmcUUQn2_Ep26BrRXIZv2amk/edit#heading=h.ptzf6k1s5l03"
            // download="Resume-Irakli-Eradze"
            // onClick={() => downloadFile(PDF_Resume)}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
