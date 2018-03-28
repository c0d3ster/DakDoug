import React from 'react';
import ReactTooltip from 'react-tooltip';

import links from '../data/links.js';

const Icon = ({name, tip}) => {
  let tooltipInfo = tip || `Open ${name}`;
  if (name == 'GoogleDrive') {
    tooltipInfo = `Open Pictures on Google Drive`;
  }
  
  return(
    <div className='icon-container'>
      <a href={links[name]} target='_blank'>
        <img src={`icons/${name}.png`} data-tip={tooltipInfo} data-for={name}
        />
      </a>
      <ReactTooltip id={name} delayShow={500}/>
    </div>
  );
}

export default Icon;
