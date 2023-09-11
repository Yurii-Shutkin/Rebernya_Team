import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './Nav.scss'

import NavItem from '../../Common/NavItem/NavItem'
import AllIcon from '../../Common/SvgIcons/AllIcon'
import WorkIcon from '../../Common/SvgIcons/WorkIcon'
import PercentIcon from '../../Common/SvgIcons/PercentIcon'
import InfoIcon from '../../Common/SvgIcons/InfoIcon'
import PhotoIcon from '../../Common/SvgIcons/PhotoIcon'
import ChatIcon from '../../Common/SvgIcons/ChatIcon'


export default function Nav() {
  const [activePath, setActivePath] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setActivePath(currentPath)
  }, [currentPath])

  const items = [
    {text: 'Усе', iconSrc: AllIcon, pageSrc: '/all_info'},
    {text: 'Робочий графік', iconSrc: WorkIcon, pageSrc: '/work_shedule'},
    {text: 'Point система', iconSrc: PercentIcon, pageSrc: '/point_system'},
    {text: 'Інформація', iconSrc: InfoIcon, pageSrc: '/info'},
    {text: 'Ділись спільним', iconSrc: PhotoIcon, pageSrc: '/share_common'},
    {text: 'Чат', iconSrc: ChatIcon, pageSrc: '/chat'},
  ]

  const onClickHandler = (path) => {
    setActivePath(path)
  }

  return (
    <div className='Nav'>
      <ul className='Nav__wrap'>
        {items.map((item) => (
          <NavItem 
            key={item.pageSrc}
            iconSrc={item.iconSrc(activePath === item.pageSrc ? {fill: '#E10413'} : {fill: '#949494'})}
            iconTitle={item.text}
            itemId={item.id}
            isActive={activePath === item.pageSrc}
            onItemClick={onClickHandler}
            pageSrc={item.pageSrc}
          />
        ))}
      </ul>
    </div>
  )
}
