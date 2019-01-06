import React from 'react';

import Section from '../../containers/SectionContainer.jsx';
import ProjectBox from './ProjectBox.jsx';
import ProjectData from '../../../data/Projects.json';

//store hover item into state so that we can set title appropriately
export default class Projects extends React.Component {
  render() {
    let navList = ['Projects', 'Gallery', 'Contact'];
    let iconList = ['Resume', 'Github'];
    return (
      <Section name='Projects' background='./Mountain.jpg' title='c0d3ster' navList={navList} iconList={iconList}>
        <div className='row'>
          <h2 className='col center'>Projects</h2>
        </div>
        <div className='row'>
        {ProjectData.map((info, index) => <ProjectBox background={info.background} key={index} count={index+1} link={info.link} title={info.title}/>)}
        </div>
      </Section>
    );
  }
}
