import React from 'react'
import './AllInfo.scss'
import Home from '../../Components/Home'

export default function AllInfo({ supabase }) {
  return (
    <div>
      <Home supabase={supabase}/>
      AllInfo
    </div>
  )
}
