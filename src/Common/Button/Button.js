import React from 'react'
import './Button.scss'

export default function Button({ type, title, color, onClickHandler }) {
  return (
    <button 
      type={type} 
      className={'btn ' + color}
      onClick={onClickHandler}
    >
        {title}
      </button>
  )
}
