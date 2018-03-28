import React from 'react';

import Section from '../containers/SectionContainer.jsx';
import ProjectBox from './ProjectBox.jsx';
import { Link } from 'react-router-dom';

//store hover item into state so that we can set title appropriately
export default class Projects extends React.Component {
  render() {
    let navList = ['Projects', 'Gallery', 'Contact'];
    let iconList = ['Resume', 'Github'];

    let projectBackgroundList = ['./BlockOne.jpg', './Q.png', './TheHokieForum.png'];
    let projectTitleList = ['Block One', 'CollabQ', 'The Hokie Forum'];
    let projectLinkList = ['/blockone', 'https://ec2-54-200-6-228.us-west-2.compute.amazonaws.com/', 'https://github.com/c0d3ster/The-Hokie-Forum'];

    return (
      <Section name='Projects' background='./Mountain.jpg' title='c0d3ster' navList={navList} iconList={iconList}>
        <div className='row'>
          <h2 className='col center'>Projects</h2>
        </div>
        <div className='row'>
        {projectBackgroundList.map((background, index) => <ProjectBox background={background} key={index} count={index+1} link={projectLinkList[index]} title={projectTitleList[index]}/>)}
        </div>
      </Section>
    );
  }
}
