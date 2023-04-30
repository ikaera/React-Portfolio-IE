import React from 'react';
import './Home.css';
import myphoto from './../../assets/passport.jpg';

export default function Home() {
  return (
    <div className="hero">
      {/* <h1>Home Page</h1> */}
      <div className="logo-box">
        <img src={myphoto} alt="my-photo" className="logo my-photo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          Hello, this is
          <span className="heading-primary-main"> Irakli Eradze </span>
          <a className="heading-primary-sub" href="#work">
            Web Developer
          </a>
        </h1>
      </div>
    </div>
  );
}
