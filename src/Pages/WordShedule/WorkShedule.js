import React from 'react'
import './WorkShedule.scss'
import Home from '../../Components/Home'

export default function WorkShedule({supabase}) {
  return (
    <div>
      <Home supabase={supabase}/>
      WorkShedule
    </div>
  )
}
