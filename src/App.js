import React, { useEffect } from 'react';
import './sass/app.scss';
import Home from './components/Home';
import ParticlesBg from './components/utils/Particles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ParticlesBg />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
