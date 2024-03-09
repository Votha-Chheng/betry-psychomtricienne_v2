import { appearFromBottom } from '@/animations/appearFromSides'
import { appearOpacity } from '@/animations/appearOpacity'
import { oswald } from '@/fonts/oswald'
import { inView, motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'

type TroubleCaseSmallProps = {
  image: string
  alt: string
  title: string
  children: ReactNode
  bgColorTitle: string
}

const TroubleCaseSmall: FC<TroubleCaseSmallProps> = ({image, alt, children, title, bgColorTitle}) => {

  const [inview, setInview] = useState<boolean>(false)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(containerRef.current){
      setContainerWidth(containerRef.current.clientWidth)
    }
  }, [])

  useEffect(()=> {
    if(textRef.current){
      setContainerHeight(textRef.current.clientHeight)
    }
  }, [])

  return (

    <motion.div 
      ref={containerRef} 
      variants={appearOpacity} 
      initial="initial" animate={inview ? "animate":""} 
      className='relative w-full overflow-hidden border-4 border-anti-flash-white'
      style={{backgroundImage:`url('/images/${image}')`}}
    >
      <div style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
        <InView triggerOnce={true} onChange={(inView, entry)=> setInview(inView)} />
        <h3 className={`${bgColorTitle} static mb-7 text-xl sm:text-2xl text-center tracking-wide text-anti-flash-white font-bold p-2.5`}>{title}</h3>
        <div className='px-5 pb-5'>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default TroubleCaseSmall