import React from 'react';
import Header from './Header.jsx';
import Observed from 'react-observed';

const SectionContainer = ({ background, title, navList, contentClass, children }) => (
  <Observed
    intersectionRatio={.44}
    options={{
      root: null,
      rootMargin: '0px',
      threshold: [.22, .66],
    }}
    >
    {({ isInView, mapRef }) => (

      <div ref={mapRef} className="section-container">
        <div
            className="section-background"
            style={{ backgroundImage: background.match(/\.(png|jpg)$/) ? `url(${background})`: `${background}` }}
        />
      {console.log(isInView)}
      {isInView && <Header title={title} navList={navList}/>}
        <div className={contentClass ? contentClass : "section-content-container"}>{children}</div>
      </div>
    )}
  </Observed>
);


export default SectionContainer;
