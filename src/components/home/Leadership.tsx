import { FC } from 'react'

import { Section } from '@/components/organisms'
import content from '@/data/Home.json'
import { links } from '@/data/Links'
import { Link } from '@/types'

export const Leadership: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Leadership', 'Projects', 'Gallery', 'Contact']

  return (
    <Section
      name='Leadership'
      background='./FadedFire.jpg'
      title='Dakota Douglass'
      navList={navList}
      iconList={iconList}
    >
      <div className='row'>
        <h2 className='col center'>Leadership Development</h2>
      </div>
      <div className='row'>
        <p className='col'>{content.leadership}</p>
      </div>
    </Section>
  )
}