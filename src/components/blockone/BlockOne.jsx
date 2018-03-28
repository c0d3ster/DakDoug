import React from 'react';

import BlockOneLanding from './BlockOneLanding.jsx';
import EOSBlockExplorer from './EOSBlockExplorer.jsx';
import SteemItCondenser from './SteemItCondenser.jsx';
import Footer from '../Footer.jsx';

/* Create functional stateless components whenever possible, the BlockOne component shouldn't need to manage the child components' states */
const BlockOne = () => (
  <div>
    <BlockOneLanding/>
    <EOSBlockExplorer/>
    <SteemItCondenser/>
    <Footer/>
  </div>
);

export default BlockOne;
