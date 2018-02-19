import React from 'react';
import EOSBlockExplorer from './EOSBlockExplorer.jsx';
import Footer from '../Footer.jsx';

/* Create functional stateless components whenever possible, the BlockOne component shouldn't need to manage the child components' states */
const BlockOne = () => (
  <div>
    <EOSBlockExplorer/>
    <Footer/>
  </div>
);

export default BlockOne;
