import React, { useState } from 'react'
import './Input.scss'

export default function Input({ type, name, id, placeholder }) {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <input 
      type={type} 
      name={name} 
      id={id} 
      placeholder={placeholder} 
      onChange={handleInputChange}
      value={inputValue}
      className='input'/>
  )
}
