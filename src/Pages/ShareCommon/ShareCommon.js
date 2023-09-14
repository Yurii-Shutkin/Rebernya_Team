import React from 'react'
import './ShareCommon.scss'
import Home from '../../Components/Home'

export default function ShareCommon({supabase}) {
  return (
    <div>
      <Home supabase={supabase}/>
      ShareCommon
      </div>
  )
}
