import React from 'react';

import ParallaxBackground from './ParallaxBackground.jsx';

const LandingContainer = ({background, contentClass, children}) => (
  <div className='landing-container'>
    <ParallaxBackground min={-40} max={50} background={background}>
      <div className={contentClass}>{children}</div>
    </ParallaxBackground>
  </div>
);

export default LandingContainer;
