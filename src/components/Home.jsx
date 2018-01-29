import React from 'react';
import Landing from './LandingContainer.jsx';
import AboutMe from './AboutMe.jsx';
import Leadership from './Leadership.jsx';
import Projects from './Projects.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';


const Home = () => (
  <div>
    <Landing/>
    <AboutMe/>
    <Leadership/>
    <Projects/>
    <Gallery/>
    <Footer/>
  </div>
);

export default Home;
