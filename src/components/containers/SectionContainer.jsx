import React from 'react'
import classnames from 'classnames'

import '../../styles/Section.css'
import Header from '../Header.jsx'

const SectionContainer = ({
  name,
  background,
  title,
  navList,
  iconList,
  contentClass,
  children,
}) => {
  let contentClasses = classnames('section-content-container', contentClass)
  return (
    <div className='section-container' id={name}>
      <div
        className='section-background'
        style={{
          backgroundImage: background.match(/\.(png|jpg)$/)
            ? `url(${background})`
            : `${background}`,
        }}
      />
      <Header title={title} navList={navList} iconList={iconList} />
      <div className={contentClasses}>{children}</div>
    </div>
  )
}

export default SectionContainer
