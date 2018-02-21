import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxBackground from '../ParallaxBackground.jsx';

export default class LandingContainer extends React.Component {
    render() {
      //https://greensock.com/docs/Plugins/ScrollToPlugin
    return (
      <div className="landing-container">
        <ParallaxBackground min={-40} max={50} background="./BlockOneLanding.png">
          <div className="block-one-landing-content row">
              <h1 className="block-one-landing-title-left col">Welcome</h1>
              <h1 className="block-one-landing-title-right col">BlockOne!</h1>
          </div>
        </ParallaxBackground>
      </div>
    );
  }
}
