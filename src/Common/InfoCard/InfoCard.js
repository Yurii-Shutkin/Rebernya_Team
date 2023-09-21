import React from 'react'
import './InfoCard.scss'
import infoIcon from '../../img/icons/info_icon.svg'

export default function InfoCard({ title }) {
  return (
    <div className='InfoCard'>
      <p className='InfoCard__title'>
        {title}
      </p>
      <img className='InfoCard__icon' src={infoIcon} alt="infoIcon" />
    </div>
  )
}
