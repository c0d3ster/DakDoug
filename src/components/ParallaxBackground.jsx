import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxBackground = ({ image, background, min, max, children }) => (
    <div className="parallax-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="parallax-image"
                style={{ backgroundImage: image?`url(${image})`:`${background}` }}
            />
        </Parallax>
        <div className="parallax-children">{children}</div>
    </div>
);

export default ParallaxBackground;