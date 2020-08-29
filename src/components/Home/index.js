import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../doc/resume2.pdf';

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <img src={require('../../img/drelogo1.png')} alt="logo" />
      </div>
      <div className="home__main">
        <h1>Hello,</h1>
        <h3>
          I am <span className="name">Oludare Odedoyin</span>,
        </h3>
        <h3>a full-stack web developer.</h3>
      </div>
      <div className="home__actions">
        <ul className="home__actions-nav">
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
