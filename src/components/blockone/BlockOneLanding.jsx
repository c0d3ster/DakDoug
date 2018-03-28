import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Landing from '../LandingContainer.jsx';

const BlockOneLanding = () => (
  <Landing background='BlockOneLanding.png' contentClass='block-one-landing-content row'>
    <h1 className='block-one-landing-title-left col'>Welcome</h1>
    <h1 className='block-one-landing-title-right col'>BlockOne!</h1>
  </Landing>
);

export default BlockOneLanding;
