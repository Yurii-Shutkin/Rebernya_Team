import React from 'react'
import './Chat.scss'
import Home from '../../Components/Home'

export default function Chat( {supabase} ) {
  return (
    <div>
      <Home supabase={supabase}/>
      Chat
    </div>
  )
}
