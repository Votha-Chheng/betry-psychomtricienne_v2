import { whiteLine } from '@/animations/anchorTitle'
import { smallTitle } from '@/animations/smallTitle'
import { marckScript } from '@/fonts/marckScript'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import React, { FC, useEffect, useRef, useState } from 'react'

const SmallTitle: FC = () => {
  const [lineWidth, setLineWidth] = useState<number>(0)

  const nomRef=useRef<HTMLSpanElement>(null)

  useEffect(()=> {
    if(nomRef.current){
      setLineWidth(nomRef.current.clientWidth)
    }
  }, [setLineWidth])

  return (
    <aside className='w-full mx-auto'>
      <h2 className={`${marckScript.className} w-full items-center flex flex-col justify-end text-white text-4xl overflow-hidden`}>
        <motion.span variants={smallTitle} initial="initialName" animate="animateName" ref={nomRef} className='w-auto'>Estelle Bétry</motion.span>
        <motion.div variants={smallTitle} initial="initialLine" animate="animateLine" style={{originX:0, width:`${lineWidth}px`}} className='h-1 bg-white rounded-lg z-0'/>
      </h2>
      <h2 className={`${oxygen.className} overflow-hidden w-auto text-white text-center text-xl pt-1 flex flex-col`}>
        <motion.span variants={smallTitle} initial="initialPsy" animate="animatePsy" className='tracking-wide'><em><b>Psychomotricienne D.E.</b></em></motion.span>
      </h2 >
    </aside> 
  )
}

export default SmallTitle
