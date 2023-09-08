import React from 'react'

export default function WorkIcon({fill}) {
  return (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="23" height="28" stroke={fill} strokeWidth="2"/>
      <path d="M4 5H10V11H4V5Z" fill={fill}/>
      <rect x="13" y="5" width="8" height="2" fill={fill}/>
      <rect x="13" y="9" width="8" height="2" fill={fill}/>
      <rect x="4" y="13" width="17" height="2" fill={fill}/>
      <rect x="4" y="21" width="17" height="2" fill={fill}/>
      <rect x="4" y="17" width="17" height="2" fill={fill}/>
    </svg>
  )
}
