import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { Icon } from 'components/atoms'
import { Link } from '@/types'

import '@/styles/Header.css'

interface Props {
  title: string
  navList: string[]
  iconList: Link[]
}

export const Header: FC<Props> = ({ title, navList, iconList }) => {
  let scrollOffset = document.documentElement.clientHeight * 0.28 //dynamic offset TODO if I want to handle resize events I need to import lodash for _.debounce
  return (
    <div className='header-container'>
      <h2 className='header-title'>{title}</h2>
      <div className='header-icon-bar'>
        {iconList &&
          iconList.map((iconDetails, key) => <Icon key={key} name={iconDetails.name} url={iconDetails.url} />)}
      </div>
      <ul className='header-nav'>
        {navList.map((navItem, key) => (
          <li key={key} className={`header-item header-item--${key + 1}`}>
            <ScrollLink
              to={navItem}
              smooth='easeOutCubic'
              offset={scrollOffset}
            >
              {navItem}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
