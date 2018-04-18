import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import '../styles/Parallax.css';

const ParallaxBackground = ({ background, min, max, children }) => (
  <div className="parallax-container">
      <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div
              className="parallax-image"
              style={{ backgroundImage: background.match(/\.(png|jpg)$/) ? `url(${background})`: `${background}` }}
          />
      </Parallax>
      <div className="parallax-children">{children}</div>
  </div>
);

export default ParallaxBackground;
