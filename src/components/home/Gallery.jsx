import React from 'react';

import Section from '../containers/SectionContainer.jsx';
import links from '../../data/links';

export default class Gallery extends React.Component {
  render() {
    let navList = ['Gallery', 'Contact'];
    let iconList = ['GoogleDrive', 'Instagram'];

    return (
      <Section name='Gallery' background='./Horizon.jpg' title='DakDoug' navList={navList} iconList={iconList}>
        <div className='row'>
          <h2 className='col center'>Gallery</h2>
        </div>
        <div className='row'>
          <h2 className='col center'>Coming soon...</h2>
        </div>
        <div className='row'>
          <a href={links.GoogleDrive} target='_blank' className='col center'>Click here to view my Finalized Shots folder on Google Drive in the meantime</a>
        </div>
      </Section>
    );
  }
}
