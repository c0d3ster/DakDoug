import React from 'react';

import Landing from '../containers/LandingContainer.jsx';

//https://greensock.com/docs/Plugins/ScrollToPlugin
const HomeLanding = () => (
  <Landing background='KingsCanyonAstro.jpg' contentClass='landing-content'>
    <div className='row'>
      <p className='landing-text col'>Developer</p>
      <p className='landing-text col'>Photographer</p>
    </div>
    <div className='row'>
      <h1 className='landing-title col'>Dakota Douglass</h1>
    </div>
    <div className='row'>
      <p className='landing-text col center'>Inventor</p>
      <p className='landing-text col center'>Explorer</p>
    </div>
  </Landing>
);

export default HomeLanding;
