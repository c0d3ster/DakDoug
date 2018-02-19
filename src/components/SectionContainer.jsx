import React from 'react';
import Header from './Header.jsx';
import classnames from 'classnames';

const SectionContainer = ({ background, title, navList, contentClass, children }) => {
  let contentClasses = classnames("section-content-container", contentClass);
  return(
  <div className="section-container">
    <div
      className="section-background"
      style={{ backgroundImage: background.match(/\.(png|jpg)$/) ? `url(${background})`: `${background}` }}
    />
    <Header title={title} navList={navList}/>
    <div className={contentClasses}>{children}</div>
  </div>
)};

export default SectionContainer;
