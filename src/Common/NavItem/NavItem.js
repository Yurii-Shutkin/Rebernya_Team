import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './NavItem.scss'

const NavItem = ({ iconSrc, iconTitle, isActive, onItemClick, pageSrc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeItemPath, setActiveItemPath] = useState(null);

  useEffect(() => {
    setActiveItemPath(pageSrc)
  }, [pageSrc])

  const handleClick = () => {
    setActiveItemPath(currentPath);
    onItemClick(activeItemPath)
    navigate(pageSrc)
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
