import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import '../../styles/Landing.css';
import Landing from '../containers/LandingContainer.jsx';

const HomeLanding = () => {
  let scrollOffset = document.documentElement.clientHeight * .28; //dynamic offset TODO if I want to handle resize events I need to import lodash for _.debounce
  return (
    <Landing background='KingsCanyonAstro.jpg' contentClass='landing-content'>
      <div className='row'>
        <ScrollLink className='landing-text col' to='Projects' offset={scrollOffset} smooth='easeOutCubic'>Developer</ScrollLink>
        <ScrollLink className='landing-text col' to='Gallery' offset={scrollOffset} smooth='easeOutCubic'>Photographer</ScrollLink>
      </div>
      <div className='row'>
        <ScrollLink className='landing-title col' to='About' offset={scrollOffset} smooth='easeOutCubic'>Dakota Douglass</ScrollLink>
      </div>
      <div className='row'>
        <ScrollLink className='landing-text col center' to='About' offset={scrollOffset} smooth='easeOutCubic'>Explorer</ScrollLink>
        {//TODO do something cool when user clicks Explorer instead of navigating to about section
        }
        <ScrollLink className='landing-text col center' to='Leadership' offset={scrollOffset} smooth='easeOutCubic'>Leader</ScrollLink>
      </div>
    </Landing>
  );
}

export default HomeLanding;
