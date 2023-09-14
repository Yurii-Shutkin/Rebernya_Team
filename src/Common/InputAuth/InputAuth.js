import React, { useState } from 'react'
import './InputAuth.scss'

export default function InputAuth({ type, name, id, placeholder, supabase, clickState }) {
  const [inputValue, setInputValue] = useState('')

  async function addNewUser() {
    const { data, error } = await supabase
      .from('users') 
      .insert([ 
        {
          name: inputValue
        },
      ]);
  
    if (error) {
      console.error(error);
      return;
    }
  
    console.log('User added successfully:', data);
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  if (clickState) {
    addNewUser()
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
