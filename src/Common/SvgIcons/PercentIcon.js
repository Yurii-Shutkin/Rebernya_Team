import React from 'react'

export default function PercentIcon({fill}) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.42857" cy="6.42857" r="5.42857" stroke={fill} strokeWidth="2"/>
      <circle cx="23.5714" cy="23.5714" r="5.42857" stroke={fill} strokeWidth="2"/>
      <line x1="2.52381" y1="26.0624" x2="26.0952" y2="3.56237" stroke={fill} strokeWidth="2"/>
    </svg>
  )
}
