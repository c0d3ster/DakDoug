import React from 'react';
import Observed from 'react-observed';
import classnames from 'classnames';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count : 0 };
  }

  nextItem() {
    this.setState({ count : this.state.count + 1});
  }

  prevItem() {
    this.setState({ count : this.state.count - 1});
  }
  render() {
    let navList = ["About Me", "Leadership", "Projects", "Gallery", "Contact"];
    let contentList = ["who", "childhood", "teenage", "college"];
    let backgroundList = ["","./VirginiaBeach.jpg"];
    let currItem = contentList[this.state.count];
    let prevButton = classnames("about-prev-button", "col", {
      'hidden': this.state.count == 0
    });
    let nextButton = classnames("about-next-button", "col", {
      'hidden': this.state.count == contentList.length-1
    });
    return (
      <Section background="./VirginiaBeach.jpg" title="Cody Douglass" navList={navList}>
        <div className="row">
          <button className={prevButton} onClick={this.prevItem.bind(this)}>prev</button>
          <h2 className="col center"> Who Is Cody Douglass?</h2>
          <button className={nextButton} onClick={this.nextItem.bind(this)}>next</button>
        </div>
        <div className="row">
          <p className="col">{content[currItem]}</p>
        </div>
        <iframe className="about-video"
          src="https://www.youtube.com/embed/fdzHO2bFIcc"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen>
        </iframe>
      </Section>
    );
  }
}
