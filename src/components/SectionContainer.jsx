import React from 'react';
import Header from './Header.jsx';
import Observed from 'react-observed';


//add in image prop
const SectionContainer = ({ background, title, navList, children }) => (
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
        {isInView ? <Header title={title} navList={navList}/> :<div>{isInView}</div>}     
        <div className="section-content">{children}</div>
      </div>
    )}
  </Observed>
);


export default SectionContainer;