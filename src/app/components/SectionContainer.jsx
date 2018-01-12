import React from 'react';
import content from '../data/content';

export default class SectionContainer extends React.Component {
    render() {
    return (
      <div className="section-container">
        {/*<header className="sectionHeader">
        dak doug
        </header>*/}      
        <div className="section-content">
            <p>{content.about}</p>    
        </div>
      </div>
    );
  }
}