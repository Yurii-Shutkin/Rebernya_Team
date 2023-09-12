import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({ type, title, color, onClickHandler, url }) {
  return (
    <Link  
      to={url}
      type={type} 
      className={'btn ' + color}
      onClick={onClickHandler}
    >
        {title}
    </Link>
  )
}
