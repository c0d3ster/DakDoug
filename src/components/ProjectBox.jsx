import React from 'react';

const ProjectBox = ({background, title, count}) => (
  <div className={`col project-box-container project-box-container--${count}`}>
    <div
      className="project-box-background"
      style={{ backgroundImage: `url(${background})`}}
    />
  <div className="project-box-title">{title}</div>
  </div>
);

export default ProjectBox;
