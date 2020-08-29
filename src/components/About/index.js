import React from 'react';
import Header from '../Header';
import img1 from '../../img/cc.png';
// import img2 from '../../img/222.jpg';

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about__info">
          <h1>about Me</h1>
          <p>
            I am a full-stack developer with a serious passion for
            clean and well organized code, creating an intuitive and
            dynamic user experience
          </p>
          <p>
            I enjoy working with React and Redux for bulding user
            interfaces, Nodejs and Express for the backend and MongoDB
            for managing databases
          </p>
          <p>
            Interested in working on ambitious projects, both frontend
            and backend, and learning new technologies to make user
            experience as enjoyable as possible
          </p>
        </div>
        <div className="about__image">
          <img src={img1} alt="Oludare Odedoyin" />
        </div>
      </div>
    </div>
  );
}

export default About;
