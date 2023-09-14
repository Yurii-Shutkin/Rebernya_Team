import React from 'react'
import './PointSystem.scss'
import Home from '../../Components/Home'

export default function PointSystem({supabase}) {
  return (
    <div>
      <Home supabase={supabase}/>
      PointSystem
    </div>
  )
}
