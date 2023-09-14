import React from 'react'
import './Info.scss'
import Home from '../../Components/Home'

export default function Info({supabase}) {
  return (
    <div>
      <Home supabase={supabase}/>
      Info
      </div>
  )
}
