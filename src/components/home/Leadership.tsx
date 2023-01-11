import React from 'react'

import Section from '../containers/SectionContainer'
import content from '../../data/Home.json'

export default class Leadership extends React.Component {
  render() {
    let navList = ['Leadership', 'Projects', 'Gallery', 'Contact']
    let iconList = ['Resume', 'LinkedIn']

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
}
