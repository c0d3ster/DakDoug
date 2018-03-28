import React from 'react';

import Section from '../containers/SectionContainer.jsx';

const SteemItCondenser = () => {
  return (
    <Section contentClass='pushed-section-content-container' background='./SteemIt.jpg' title='Block One' navList={['Steem', 'Contact']}>
      <div className='row'>
        <h2 className='center col'>SteemIt Condenser Instance</h2>
      </div>
      <div className='row'>
        <button className='steemit-button' onClick={() => window.location.href = `http://${window.location.hostname}:8080`}> Click here to navigate to my instance!</button>
      </div>
    </Section>
  );
};

export default SteemItCondenser;
