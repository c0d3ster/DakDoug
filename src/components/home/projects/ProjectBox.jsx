import React from 'react'
import { Link } from 'react-router-dom'

const ProjectBox = ({ background, title, link, count }) => {
  let urlRegex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
  const Linker = urlRegex.test(link) ? 'a' : Link
  return (
    <div
      className={`col project-box-container project-box-container--${count}`}
    >
      <Linker to={link} href={link}>
        <div
          className='project-box-background'
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className='project-box-title'>{title}</div>
      </Linker>
    </div>
  )
}

export default ProjectBox
