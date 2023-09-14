import React from 'react'
import './Header.scss'

import InfoCard from '../../Common/InfoCard/InfoCard'

export default function Header({firstName, lastName, lokalNum}) {
  return (
    <div className="Header">
        <div className="usercard">
          <p className="usercard__username">{firstName + ' ' + lastName}</p>
          <p className="usercard__lokalnum">{lokalNum}</p>
        </div>
        <div className="infoblock">
          <InfoCard />
          <InfoCard />
        </div>
    </div>
  )
}
