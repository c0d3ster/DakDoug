import { FC, useState } from 'react'
import classnames from 'classnames'

import { Section } from 'components/molecules'
import content from '@/data/Home.json'
import { Link } from '@/types'
import { links } from '@/data/Links'

export const AboutMe: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [displayVideo, setDisplayVideo] = useState<boolean>(false)
  
  const iconList: Link[] = [links.resume, links.linkedIn, links.facebook, links.instagram]
  const navList = ['About', 'Leadership', 'Projects', 'Gallery', 'Contact']
  
  const currItem = content.about[count]
  const prevButton = classnames('about-prev-button', {
    hidden: count == 0 || displayVideo,
  })
  const nextButton = classnames('about-next-button', {
    hidden: count == content.about.length - 1 || displayVideo
  })

  return (
    <Section
      name='About'
      background={currItem.background}
      title='Cody Douglass'
      navList={navList}
      iconList={iconList}
      contentClass='pushed-section-content-container'
    >
      <div className='row center'>
        <div className='col'>
          <label className='about-type-text'>Intro Type:</label>
          <label className='about-type-text'>Text</label>
          <input
            type='radio'
            name='intro'
            id='text'
            onChange={() => setDisplayVideo(!displayVideo)}
            checked={!displayVideo}
          />
          <label className='about-type-text'>Video</label>
          <input
            type='radio'
            name='intro'
            id='video'
            onChange={() => setDisplayVideo(!displayVideo)}
            checked={displayVideo}
          />
        </div>
      </div>
      {displayVideo ? (
        <div className='about-video-container'>
          <iframe
            className='about-video'
            src='https://www.youtube.com/embed/fdzHO2bFIcc'
            frameBorder='0'
            allow='encrypted-media'
            allowFullScreen={true}
          ></iframe>
        </div>
      ) : (
        <div>
          <div className='row even-space'>
            <button className={prevButton} onClick={() => setCount(count-1)}>
              previous
            </button>
            <h2> Who Is Cody Douglass?</h2>
            <button className={nextButton} onClick={() => setCount(count+1)}>
              next
            </button>
          </div>
          <div className='row'>
            <p className='col'>{currItem.description}</p>
          </div>
        </div>
      )}
    </Section>
  )
}
