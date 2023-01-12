import { FC } from 'react'

import Section from '../containers/SectionContainer'
import content from '../../data/Home.json'

const Leadership: FC = () => {
  const navList = ['Leadership', 'Projects', 'Gallery', 'Contact']
  const iconList = ['resume', 'linkedIn']

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

export default Leadership