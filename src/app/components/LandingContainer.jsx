import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxBackground from './ParallaxBackground.jsx';

export default class LandingContainer extends React.Component {
    render() {
    return (
      <div className="landing-container">
        <ParallaxBackground min={-40} max={50} image="./public/KingsCanyonAstro-2.jpg">
          <div className="landing-content">
          <h1>Dakota Douglass</h1>
          </div>
        </ParallaxBackground>
      </div>  
    );
  }
}