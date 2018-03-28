import React from 'react';
import classnames from 'classnames';

import Header from './Header.jsx';

const SectionContainer = ({ background, title, navList, iconList, contentClass, children }) => {
  let contentClasses = classnames('section-content-container', contentClass);
  return (
    <div className='section-container'>
      <div
        className='section-background'
        style={{ backgroundImage: background.match(/\.(png|jpg)$/) ? `url(${background})`: `${background}` }}
      />
      <Header title={title} navList={navList} iconList={iconList}/>
      <div className={contentClasses}>{children}</div>
    </div>
  );
}

export default SectionContainer;
