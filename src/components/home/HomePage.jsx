import React from 'react';

import HomeLanding from './HomeLanding.jsx';
import About from './About.jsx';
import Leadership from './Leadership.jsx';
import Projects from './Projects.jsx';
import Gallery from './Gallery.jsx';
import Footer from '../Footer.jsx';


const HomePage = () => (
  <div>
    <HomeLanding/>
    <About/>
    <Leadership/>
    <Projects/>
    <Gallery/>
    <Footer/>
  </div>
);

export default HomePage;
