import React from 'react';

import Icon from './Icon.jsx';

const Header = ({ title, navList, iconList }) => (
  <div className='header-container'>
    <h2 className='header-title'>{title}</h2>
    <div className='header-icon-bar'>
      {console.log(iconList)}
      {iconList && iconList.map((iconName, key) => <Icon key={key} name={iconName}/>)}
    </div>
    <ul className='header-nav'>
      {navList.map((navItem, key) => <li key={key} className={`header-item header-item--${key+1}`}>{navItem}</li>)}
    </ul>
  </div>
);

export default Header;
