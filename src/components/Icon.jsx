import React from 'react';
import ReactTooltip from 'react-tooltip';

import links from '../data/Links.json';

const Icon = ({name, tip}) => {
  let tooltipInfo = tip || `View My ${name}`;
  if (name == 'GoogleDrive') {
    tooltipInfo = `View My Google Drive Photos`;
  }

  return(
    <div className='icon-container'>
      <a href={links[name]} target='_blank'>
        <img src={`icons/${name}.png`} data-tip={tooltipInfo} data-for={name}
        />
      </a>
      <ReactTooltip id={name} delayShow={500} place='bottom'/>
    </div>
  );
}

export default Icon;
