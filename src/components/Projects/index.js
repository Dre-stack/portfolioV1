import React, { useEffect, useState } from 'react';
import Header from '../Header';
// import kitWebsite from '../../img/kitwebsite.png';
// import rechat from '../../img/rechat.png';
// import airbnb from '../../img/airbnb.png';
// import erc from '../../img/erc.png';

function Projects() {
  // const imageList = useRef(null);
  // const detailsList = useRef(null);

  const [active, setActive] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => setActive(1), 300);
  // }, []);

  const nextSlide = () => {
    if (active === 4) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  };
  const prevSlide = () => {
    if (active === 1) {
      setActive(4);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="projects">
        <div className="projects-header">Projects</div>
        <div className="projects-container">
          <div className="arrows left" onClick={prevSlide}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="arrows" onClick={nextSlide}>
            <i className="fas fa-arrow-right"></i>
          </div>

          <div
            className={
              active === 1 ? 'project kit active' : 'project kit'
            }
          >
            <div className="image">
              {/* <img src={kitWebsite} alt="kit website" /> */}
            </div>
            <div className="details">
              <div className="title">
                KitStore | A Mordern Ecommerce Platform
              </div>
              <h2 className="heading">Features</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>User
                  Authentication
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Password Reset
                  via Email
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Shopping Cart
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>User Dashboard
                  with profile picture upload
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>
                  Payment Gateway with Paypal and Credit/Debit Cards
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Admin Pages
                  for website management
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Email
                  Notifications for both users and Admin
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Responsive on
                  multiple device sizes
                </h4>
              </div>
              <h2 className="heading">Technologies Used</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>ReactJs &
                  Redux
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>SASS/SCSS
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>NodeJs &
                  ExpressJs
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>MongoDb
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Braintree
                  Payments Gateway
                </h4>
              </div>
              <div className="buttons">
                <a
                  href="https://kitmerch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn left"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Dre-stack/Kitstore-front.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              active === 2
                ? 'project airbnb active'
                : 'project airbnb'
            }
          >
            <div className="image">
              {/* <img src={kitWebsite} alt="kit website" /> */}
            </div>
            <div className="details">
              <div className="title"> Airbnb Clone </div>
              <h2 className="heading">Features</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>User
                  Authentication
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Password Reset
                  via Email
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>
                  Search listings with location auto complete feature
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Goggle Maps
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>User Dashboard
                  with profile picture upload
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Create, edit
                  and delete Listings
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>
                  Payment Gateway with Paypal and Credit/Debit Cards
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i> Book an
                  apartment
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Email
                  Notifications for both users and Admin
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Responsive on
                  multiple device sizes
                </h4>
              </div>
              <h2 className="heading">Technologies Used</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>ReactJs &
                  Redux
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>SASS/SCSS
                </h4>

                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>NodeJs &
                  ExpressJs
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Goggle Maps
                  API
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>MongoDb
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Braintree
                  Payments Gateway
                </h4>
              </div>
              <div className="buttons">
                <a
                  href="https://dreairbnb-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn left"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Dre-stack/airbnbClone-client.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              active === 3
                ? 'project rechat active'
                : 'project rechat'
            }
          >
            <div className="image">
              {/* <img src={kitWebsite} alt="kit website" /> */}
            </div>
            <div className="details">
              <div className="title">
                Rechat | A Webchat Application
              </div>
              <h2 className="heading">Features</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>User
                  Authentication
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Profile
                  Picture Upload
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Send Texts or
                  Images
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Edit Bio and
                  Change Profile Picture
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Responsive on
                  multiple device sizes
                </h4>
              </div>
              <h2 className="heading">Technologies Used</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>ReactJs &
                  Redux
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>SASS/SCSS
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Firebase
                </h4>
              </div>
              <div className="buttons">
                <a
                  href="https://rechat24.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn left"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Dre-stack/rechat24Client.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              active === 4 ? 'project erc active' : 'project erc'
            }
          >
            <div className="image">
              {/* <img src={kitWebsite} alt="kit website" /> */}
            </div>
            <div className="details">
              <div className="title">Exchange Rate Calculator</div>
              <h2 className="heading">Features</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Get Live
                  Currency exchange rates
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Currency
                  conversion
                </h4>
              </div>
              <h2 className="heading">Technologies Used</h2>
              <div className="list">
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>HTML5
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>CSS3
                </h4>
                <h4>
                  {' '}
                  <i className="fas fa-arrow-right"></i>Javascript
                </h4>
              </div>
              <div className="buttons">
                <a
                  href="https://er-calc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn left"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Dre-stack/Exchange-Rate-Calculator-JS.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
