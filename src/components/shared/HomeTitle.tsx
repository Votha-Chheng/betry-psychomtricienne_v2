import { oxygen } from '@/fonts/oxygen'
import React, { FC, useState } from 'react'
import UnderlineTitle from './UnderlineTitle'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { titleHome } from '@/animations/titleHome'
import { useMediaQuery } from '@uidotdev/usehooks'

type HomeTitleProps = {
  title: string
  lineColor: string
  letterColor: string
  bottomInView ?: number
}

const HomeTitle: FC<HomeTitleProps> = ({letterColor, lineColor, title, bottomInView = 0}) => {
  const [inview, setInview] = useState<boolean>(false)

  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 1280px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1281px)");

  return (
    <div className='relative'>
      <motion.h2 
        variants={titleHome} 
        initial="initial" 
        animate={inview ? "animate":""} 
        style={{WebkitTextStroke:`${isLargeDevice ? "4px": isMediumDevice ? "2px": "1px"}  ${letterColor}`}} 
        className={`${oxygen.className} text-transparent font-bold uppercase text-center text-3xl md:text-6xl xl:text-8xl tracking-wide py-8  px-2.5 md:px-20 md:leading-[75px] xl:leading-[120px]`}
      >
        {title}
      </motion.h2>
      <UnderlineTitle bgColor={lineColor} inview={inview} />
      <InView onChange={(inView, entry)=> inView && setInview(true) } style={{position:'absolute', bottom:`-${bottomInView}px`}} />
    </div>
      
  )
}

export default HomeTitle