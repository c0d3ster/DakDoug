import { FC } from 'react'

import { Section } from 'components/molecules'
import { InfoBox } from 'components/atoms'
import { Link } from '@/types'
import { links } from '@/data/Links'
import ProjectData from '@/data/Projects.json'

export const Projects: FC = () => {
  const iconList: Link[] = [links.resume, links.github]
  const navList = ['Projects', 'Gallery', 'Contact']

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
          <InfoBox
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
