import React from 'react'
import './Header.scss'

import InfoCard from '../../Common/InfoCard/InfoCard'

export default function Header() {
  return (
    <div className="Header">
        <div className="usercard">
          <p className="usercard__username">Кареба Анна</p>
          <p className="usercard__lokalnum">1700000123456</p>
        </div>
        <div className="infoblock">
          <InfoCard />
          <InfoCard />
        </div>
    </div>
  )
}
