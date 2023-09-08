import React from 'react';
import './NavItem.scss'

const NavItem = ({ iconSrc, iconTitle, itemId, isActive, onItemClick }) => {

  const handleClick = () => {
    onItemClick(itemId)
  };

  return (
   <li 
      className={isActive ? 'Nav__item active' : 'Nav__item'}
      onClick={handleClick}
    >
      <div>{iconSrc}</div>
      <p>{iconTitle}</p>
   </li>

  );
};

export default NavItem;
