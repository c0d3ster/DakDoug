import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxBackground from './ParallaxBackground.jsx';

export default class LandingContainer extends React.Component {
    render() {
      //https://greensock.com/docs/Plugins/ScrollToPlugin
    return (
      <div className="landing-container">
        <ParallaxBackground min={-40} max={50} background="./KingsCanyonAstro.jpg">
          <div className="landing-content">
            <div className="row">
              <p className="landing-text col">Developer</p>
              <p className="landing-text col">Photographer</p>
            </div>
            <div className="row">
              <h1 className="landing-title col">Dakota Douglass</h1>
            </div>
            <div className="row">
              <p className="landing-text col center">Inventor</p>
              <p className="landing-text col center">Explorer</p>
            </div>
          </div>
        </ParallaxBackground>
      </div>
    );
  }
}
