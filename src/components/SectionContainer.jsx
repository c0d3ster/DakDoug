import React from 'react';
import Header from './Header.jsx';
import Observed from 'react-observed';


//add in image prop
const SectionContainer = ({ title, navList, children }) => console.log("rendering section") || (
  <Observed intersectionRatio={.45}>
    {({ isInView, mapRef }) => (             
      <div ref=
      {mapRef} className="section-container">
        {isInView ? <Header title={title} navList={navList}/> : console.log(isInView) || <div>{isInView}</div>}     
        <div className="section-content">{children}</div>
      </div>
    )}
  </Observed>
);


export default SectionContainer;