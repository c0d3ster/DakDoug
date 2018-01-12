import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxBackground from './ParallaxBackground.jsx';

export default class LandingContainer extends React.Component {
    render() {
    return (
      <div className="landing-container">
        <ParallaxBackground min={-40} max={50} background="linear-gradient(-10deg, lightgray, darkblue, black)">
          <div className="landing-content">
          <h1>Insert Landing Page Title</h1>
          </div>
        </ParallaxBackground>
      </div>  
    );
  }
}