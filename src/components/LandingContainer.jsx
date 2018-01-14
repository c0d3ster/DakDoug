import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxBackground from './ParallaxBackground.jsx';

export default class LandingContainer extends React.Component {
    render() {
    return (
      <div className="landing-container">
        <ParallaxBackground min={-40} max={50} image="./KingsCanyonAstro-2.jpg">
          <div className="landing-content">
          <h3 className="landing-text">Developer</h3>
          <h3 className="landing-text">Photographer</h3>
          <h1>Dakota Douglass</h1>
          <h3 className="landing-text">Inventor</h3>
          <h3 className="landing-text">Explorer</h3>
          </div>
        </ParallaxBackground>
      </div>  
    );
  }
}