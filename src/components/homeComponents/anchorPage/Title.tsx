'use client'

import { bottomTitle, insideImage, upTitle, vignette, whiteLine } from '@/animations/anchorTitle'
import { marckScript } from '@/fonts/marckScript'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'

const Title: FC = () => {
  const [asideWidth, setAsideWidth] = useState<number>(0)
  const [overflowTop, setOverflowTop] = useState<boolean>(true)

  const asideRef = useRef<HTMLElement>(null)

  useEffect(()=> {
    if(asideRef.current){
      setAsideWidth(asideRef.current.clientWidth)
    }
  }, [])

  useEffect(()=> {
    setTimeout(()=> {
      setOverflowTop(false)
    }, 3500)
  }, [])

  return (
    <div className='flex overflow-hidden h-[205px] pt-8 pl-[26.5px] pr-5'>
      <motion.div variants={vignette} initial='initial' animate='animate' className="overflow-hidden relative w-36 h-36 bg-white border-white rounded-md z-20">
        <motion.div variants={insideImage} initial='initial' animate='animate' className="overflow-hidden absolute m-[9px] w-32 h-32 border-charcoal border-4 rounded-lg">
          <Image src='/images/20210611_104823mod.jpg' priority alt='portrait' width={200} height={150} className='-translate-y-[55px] translate-x-[15px] scale-150 rotate-[135deg]'/>
        </motion.div>
      </motion.div>  
      <aside ref={asideRef}>
        <h2 className={`${marckScript.className} ${ overflowTop ? "overflow-hidden": "" } h-[69px] w-full flex flex-col justify-end pl-8 text-white text-6xl`}>
          <motion.span variants={upTitle} initial="initial" animate="animate">Estelle Bétry</motion.span>
        </h2>
        <motion.div style={{width:`${asideWidth}px`}} className='h-1.5 bg-white rounded-lg z-0' variants={whiteLine} initial='initial' animate='animate'/>
        <h2 className={`${oxygen.className} overflow-hidden h-[69px] w-full pl-8 text-white text-3xl pt-1 flex flex-col`}>
          <motion.span className='tracking-wide' variants={bottomTitle} initial="initial" animate="animate"><em><b>Psychomotricienne D.E.</b></em></motion.span>
        </h2 >
      </aside> 
    </div>
  )
}

export default Title
