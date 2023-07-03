import { FC } from 'react'

import { Section } from 'components/molecules'
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
          <a href={links.etsy.url}>
            <div className='gallery-title'>Eclipsed Galaxy</div>
            <video
              className='gallery-video'
              onMouseOver={e => (e.target as any).play()}
              onMouseOut={e => (e.target as any).pause()}
              loop={true}
            >
              <source src='https://drive.google.com/uc?export=download&id=1aV7wxk54UIgb2eHNTJ0dSmg500f3dM3B' type='video/mp4' />
            </video>
          </a>
      </div>
    </Section>
  )
}
