import React from 'react';

const Header = ({ title, navList }) => (
  <div className="header-container">
    <h2 className="header-title">{title}</h2>
    <ul className="header-nav">
      {navList.map((navItem, key) => <li key={key} className={`header-item header-item--${key+1}`}>{navItem}</li>)}
    </ul>
  </div>
);

export default Header;
