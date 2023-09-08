import React, { useState } from 'react'
import './Nav.scss'

import AllIcon from '../../Common/SvgIcons/AllIcon'
import NavItem from '../../Common/NavItem/NavItem'
import WorkIcon from '../../Common/SvgIcons/WorkIcon'
import PercentIcon from '../../Common/SvgIcons/PercentIcon'
import InfoIcon from '../../Common/SvgIcons/InfoIcon'
import PhotoIcon from '../../Common/SvgIcons/PhotoIcon'
import ChatIcon from '../../Common/SvgIcons/ChatIcon'


export default function Nav() {
  const [activeItemId, setActiveItemId] = useState(1);

  const items = [
    {id: 1, text: 'Усе', iconSrc: AllIcon},
    {id: 2, text: 'Робочий графік', iconSrc: WorkIcon},
    {id: 3, text: 'Point система', iconSrc: PercentIcon},
    {id: 4, text: 'Інформація', iconSrc: InfoIcon},
    {id: 5, text: 'Ділись спільним', iconSrc: PhotoIcon},
    {id: 6, text: 'Чат', iconSrc: ChatIcon},
  ]

  const onClickHandler = (id) => {
    setActiveItemId(id)
  }

  return (
    <div className='Nav'>
      <ul className='Nav__wrap'>
        {items.map((item) => (
          <NavItem 
            key={item.id}
            iconSrc={item.iconSrc(activeItemId===item.id ? {fill: 'red'} : {fill: '#949494'})}
            iconTitle={item.text}
            itemId={item.id}
            isActive={activeItemId === item.id}
            onItemClick={onClickHandler}
          />
        ))}
      </ul>
    </div>
  )
}
