import { FC } from 'react'

import { Link } from '@/types'
import { Section } from 'components/molecules'
import { links } from '@/data/Links'

export const TrackUploader: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Uploader', 'Considerations', 'Contact']

  return (
    <Section
      name='Uploader'
      background='./PurpleMilkyWay.jpg'
      title='The Prompt'
      navList={navList}
      iconList={iconList}
    >
      <div className='row'>
        <h2 className='col center'>Track Uploader</h2>
      </div>
      <div className='row'>
        <p className='col center'>test</p>
      </div>
    </Section>
  )
}