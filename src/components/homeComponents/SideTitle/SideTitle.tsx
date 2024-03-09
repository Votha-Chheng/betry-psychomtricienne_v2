import { marckScript } from '@/fonts/marckScript'
import { useScrollY } from '@/hooks/useScrollTop'
import { motion, useAnimationControls } from 'framer-motion'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

type SideTitleProps = {
  menuColor: string
  translateX: boolean
  offsetY: number
  title: string
}

const SideTitle: FC<SideTitleProps> = ({menuColor, offsetY, title, translateX}) => {

  const size = useWindowSize()
  const Y = useScrollY()
  
  const getTextColor = (menuColor: string): string=> {
    switch(menuColor){
      case "bg-transparent" : return "text-transparent"
      case "bg-mountbatten-pink" : return "text-mountbatten-pink"
      case "bg-charcoal" : return "text-anti-flash-white"
      case "bg-eggplant" : return "text-anti-flash-white"
      default: return "text-transparent"
    }
  }


  return (
    <aside 
      style={{position:`${Y-offsetY<0?"absolute":"fixed"}`, height:`${size.height - 70}px`, transform:`translateX(${translateX ? "0":"-100"}%)`, transition:"0.25s transform ease-out"}} 
      className={`z-30 top-[70px] w-44 overflow-x-hidden flex justify-center items-center invisible xl:visible`}
    >
      <p style={{writingMode:"vertical-lr"}} className={`${marckScript.className} text-6xl p-5 rotate-180 ${getTextColor(menuColor)}`}>{title}</p>
    </aside>
      
  )
}

export default SideTitle