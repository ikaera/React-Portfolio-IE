import React, { useState } from 'react';
// import classes from './Project.module.css';
import './Project.css';
import img1 from '../../assets/Booze-Hound.jpg';
import img2 from '../../assets/P2P Vinyl & CD Resale/discexchange favorited items.png';

function Project(props) {
  const projects = [
    {
      title: 'Booze-Hound',
      image: img1,
      gitHub: 'https://github.com/Jsrra/Booze-Hound',
      diployedApp: 'https://jsrra.github.io/Booze-Hound/',
    },
    {
      title: 'P2P Vinyl & CD Resale',
      image: img2,
      gitHub: 'https://github.com/ikaera/Project-2',
      diployedApp: 'https://serene-forest-09402.herokuapp.com/',
    },
  ];
  return (
    <div className="projects">
      <h1> Projects </h1>
      {projects.map(project => (
        <div className="project card" key={project.title}>
          <h3 className="card-title">{project.title}</h3>
          <img className="card-image" src={project.image}></img>
          <a className="card-link" href={project.gitHub} target="_blank">
            GitHub
          </a>
          <a className="card-link" href={project.diployedApp} target="_blank">
            Live App
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
