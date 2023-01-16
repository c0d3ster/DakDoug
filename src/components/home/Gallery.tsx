import { FC } from 'react'

import Section from '../containers/SectionContainer'
import { links } from '../../data/Links'

const Gallery: FC = () => {
  const navList = ['Gallery', 'Contact']
  const iconList = ['googleDrive', 'instagram']

  return (
    <Section
      name='Gallery'
      background='./Horizon.jpg'
      title='DakDoug'
      navList={navList}
      iconList={iconList}
    >
      <div className='row'>
        <h2 className='col center'>Gallery</h2>
      </div>
      <div className='row'>
        <h2 className='col center'>Coming soon...</h2>
      </div>
      <div className='row'>
        <a href={links.GoogleDrive} target='_blank' className='col center'>
          Click here to view my Finalized Shots folder on Google Drive in the
          meantime
        </a>
      </div>
    </Section>
  )
}

export default Gallery