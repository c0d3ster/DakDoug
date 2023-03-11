import { FC } from 'react'

import { Link } from '@/types'
import { Section } from 'components/molecules'
import { links } from '@/data/Links'

export const DesignConsiderations: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Considerations', 'Contact']

  return (
    <Section
      name='Considerations'
      background='./AudiusStudio.png'
      title='The Thought'
      navList={navList}
      iconList={iconList}
    >
      <div className='row'>
        <h2 className='col center'>Design Considerations</h2>
      </div>
      <div className='row'>
        <p className='col center'>test</p>
      </div>
    </Section>
  )
}