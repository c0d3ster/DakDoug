import { FC } from 'react'

import { Section } from 'components/organisms'
import { links } from '@/data/Links'
import { Link } from '@/types'

export const Gallery: FC = () => {
  const iconList: Link[] = [links.googleDrive, links.instagram]
  const navList = ['Gallery', 'Contact']

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
        <a href={links.googleDrive.url} target='_blank' className='col center'>
          Click here to view my Finalized Shots folder on Google Drive in the
          meantime
        </a>
      </div>
    </Section>
  )
}
