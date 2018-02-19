import React from 'react';
import Observed from 'react-observed';
import classnames from 'classnames';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      video: false
      };
  }

  switchContent() {
    this.setState({video: !this.state.video});
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
    let backgroundList = ["./VirginiaBeachSnowySunrise.jpg","./VirginiaBeach.jpg", "OceanLakes.jpg", "./Blacksburg.jpg"];
    let currItem = contentList[this.state.count];
    let prevButton = classnames("about-prev-button", {
      'hidden': (this.state.count == 0) || this.state.video
    });
    let nextButton = classnames("about-next-button", {
      'hidden': (this.state.count == contentList.length-1) || this.state.video
    });
    return (
      <Section background={backgroundList[this.state.count]} title="Cody Douglass" navList={navList} contentClass="about-content-container">
        <div className="row center">
          <div className="col">
            <label className="about-type-text">Intro Type:</label>
            <label className="about-type-text">Text</label><input type="radio" name="intro" id="text"
            onChange={this.switchContent.bind(this)} checked={!this.state.video} />
            <label className="about-type-text">Video</label><input type="radio" name="intro" id="video" onChange={this.switchContent.bind(this)} checked={this.state.video}/>
          </div>
        </div>
        {this.state.video ?
          <div className="about-video-container">
            <iframe className="about-video"
            src="https://www.youtube.com/embed/fdzHO2bFIcc"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen>
            </iframe>
          </div> :
          <div>
            <div className="row even-space">
              <button className={prevButton} onClick={this.prevItem.bind(this)}>previous</button>
              <h2> Who Is Cody Douglass?</h2>
              <button className={nextButton} onClick={this.nextItem.bind(this)}>next</button>
            </div>
            <div className="row">
              <p className="col">{content.about[currItem]}</p>
            </div>
          </div>
        }
      </Section>
    );
  }
}
