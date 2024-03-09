'use client'

import React, { FC, } from 'react'

type TooltipProps ={
  text: string
  width: number
  bgColor: string
  textColor: string
  displayTooltip: boolean
  top: number
  left: number

}

const Tooltip: FC<TooltipProps> = ({text, width, bgColor, textColor, displayTooltip, top, left}) => {

  return (
    <span 
      className={`${bgColor} ${displayTooltip ? "opacity-100": "opacity-0"} text-center transition-opacity duration-300 absolute w-full -translate-x-[100%] p-2.5 font-light rounded-md inline-block`} 
      style={{lineHeight:"0.5rem", textIndent:"0", letterSpacing:"0.75px", width:`${width}px`, left:`${left}px`, top:`${top}px`}}
    >
      <span className={`tooltip-top -translate-x-1/2 bg-charcoal`} style={{top:`-10%`, left:"50%"}} />
      <span className={`${textColor} text-sm`}>
        {text}
      </span>
    </span>
  )
}

export default Tooltip