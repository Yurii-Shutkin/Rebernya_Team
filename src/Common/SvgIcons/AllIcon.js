import React from 'react'

export default function AllIcon({fill}) {
  return (
    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" width="18" height="2" fill={fill}/>
      <rect x="7" y="4" width="15" height="2" fill={fill}/>
      <path d="M0 0H6V6H0V0Z" fill={fill}/>
      <rect x="1" y="9" width="26" height="20" stroke={fill} strokeWidth="2"/>
    </svg>

  )
}
