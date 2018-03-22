import React from 'react';
import BlockOneLandingContainer from './BlockOneLandingContainer.jsx';
import EOSBlockExplorer from './EOSBlockExplorer.jsx';
import SteemItCondenser from './SteemItCondenser.jsx';
import Footer from '../Footer.jsx';

/* Create functional stateless components whenever possible, the BlockOne component shouldn't need to manage the child components' states */
const BlockOne = () => (
  <div>
    <BlockOneLandingContainer/>
    <EOSBlockExplorer/>
    <SteemItCondenser/>
    <Footer/>
  </div>
);

export default BlockOne;
