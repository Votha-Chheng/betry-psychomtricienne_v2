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
      style={{height:`${containerHeight + 100}px`}} 
      variants={appearOpacity} 
      initial="initial" animate={inview ? "animate":""} 
      className='relative w-full overflow-hidden border-4 border-anti-flash-white'
    >
      <InView triggerOnce={true} onChange={(inView, entry)=> setInview(inView)} />
      <Image 
        src={`/images/${image}`} 
        alt={alt} 
        style={{objectFit:"cover"}} 
        className='brightness-125'
        fill
      />
      <div style={{height:`${containerHeight+100}px`}} className='absolute w-screen top-0 bg-white opacity-70' />
      <div style={{width: `${containerWidth}px`, height:`${containerHeight+100}px`}} className='absolute top-0 p-5'>
        <div ref={textRef}>
          <h3 className={`${bgColorTitle} mb-7 text-xl sm:text-2xl text-center tracking-wide text-anti-flash-white font-bold p-2.5`}>{title}</h3>
          <div>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TroubleCaseSmall