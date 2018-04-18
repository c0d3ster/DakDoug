import React from 'react';

import '../../styles/BlockOne.css';
import BlockOneLanding from './BlockOneLanding.jsx';
import EOSBlockExplorer from './EOSBlockExplorer.jsx';
import SteemItCondenser from './SteemItCondenser.jsx';
import Footer from '../Footer.jsx';

/* Create functional stateless components whenever possible, the BlockOne component shouldn't need to manage the child components' states */
const BlockOnePage = () => (
  <div>
    <BlockOneLanding/>
    <EOSBlockExplorer/>
    <SteemItCondenser/>
    <Footer/>
  </div>
);

export default BlockOnePage;
