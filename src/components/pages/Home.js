import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="hero">
      {/* <h1>Home Page</h1> */}
      <div className="logo-box">
        <img src="/passport.jpg" alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main"> Irakli Eradze </span>
          {/* <a className="heading-primary-sub" href="#work">
            Projects
          </a> */}
        </h1>
      </div>
    </div>
  );
}
