import React from 'react'

import Section from '../../containers/SectionContainer'
import ProjectBox from './ProjectBox'
import ProjectData from '../../../data/Projects.json'

const Projects: React.FC = () => {
  const navList = ['Projects', 'Gallery', 'Contact']
  const iconList = ['Resume', 'Github']

  return (
    <Section
      name='Projects'
      background='./Mountain.jpg'
      title='c0d3ster'
      navList={navList}
      iconList={iconList}
    >
      <div className='row'>
        <h2 className='col center'>Projects</h2>
      </div>
      <div className='row'>
        {ProjectData.map((info, index) => (
          <ProjectBox
            background={info.background}
            key={index}
            count={index + 1}
            link={info.link}
            title={info.title}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects
