import React from 'react';
import Landing from './LandingContainer.jsx';
import AboutMe from './AboutMe.jsx';

const Home = () => (
  <div>
    <Landing/>
    <AboutMe/>
    <AboutMe second/>
  </div>
);

export default Home;