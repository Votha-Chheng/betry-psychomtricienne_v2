'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { oxygen } from '@/fonts/oxygen'
import FlipCard from '../../shared/FlipCard'
import { motion } from 'framer-motion'
import { flipCardsHome } from '@/animations/flipCardsHome'
import FrontFlipHomeChild from './FrontFlipHomeChild'
import Title from './Title'
import BackFlipChild from './BackFlipChild'
import FrontFlipHomeAdult from './FrontFlipHomeAdult'
import BackFlipAdult from './BackFlipAdult'
import { useMediaQuery } from '@uidotdev/usehooks'
import SmallTitle from '@/components/mobileComponents/SmallTitle'

type AnchorPageProps = {
  bgColor: string
  menuColor: string
}

const AnchorPage: FC<AnchorPageProps> = ({bgColor, menuColor}) => {
  const [marginTopSection, setMarginTopSection] = useState<number>(0)
  const [bottomSection, setBottomSection] = useState<number>(0)

  const [rotateCardChild, setRotateCardChild] = useState<boolean>(false)
  const [rotateCardAdult, setRotateCardAdult] = useState<boolean>(false)

  const headerRef =  useRef<HTMLElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 1280px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1281px)");

  useEffect(()=> {
    if(headerRef.current){
      setMarginTopSection(headerRef.current.offsetTop + headerRef.current.clientHeight)
    }
  }, [])

  useEffect(()=> {
    if(sectionRef.current){
      setBottomSection(sectionRef.current.clientHeight)
    }
  }, [])

  return (
    <main style={{height:`${marginTopSection + bottomSection + 375}px`}} className='w-screen relative z-0'>
      <div 
        className='w-screen absolute blur-md brightness-[0.6] contrast-100 z-10 -translate-x-2.5' 
        style={{backgroundImage:'url("/images/20210422_144500.jpg")', backgroundSize:'auto 175vh', height:`${marginTopSection + bottomSection + 375}px`}}
      />
      <div 
        className={`${bgColor} w-screen absolute z-20 -translate-x-2.5 transition-colors duration-300`}
        style={{height:`${marginTopSection + bottomSection + 375}px`}}
      />
      <header ref={headerRef} className='z-30 w-[90%] xl:w-auto absolute -translate-x-1/2 left-1/2 top-[150px] xl:top-[15vh]'>
        {
          isLargeDevice
          ?
          <Title/>
          :
          <SmallTitle/>
        }
      </header>
      <motion.section ref={sectionRef} variants={flipCardsHome} initial='initial' animate='animate' style={{transform: `translateY(${marginTopSection + 100}px)`}} className='w-full absolute z-30'>
        <h2 className={`${oxygen.className} text-xl sm:text-3xl text-center text-white tracking-wider`} ><em>Quand faire appel à une psychomotricienne...</em></h2>
        <article className={`${menuColor === "bg-mountbatten-pink" ? "opacity-0":"opacity-100"} flex items-center lg:flex-row flex-col gap-16 justify-center w-full mt-12`}>
          <FlipCard 
            frontChildren={FrontFlipHomeChild}
            backChildren={BackFlipChild}
            height={500}
            width={isLargeDevice ? 360:330}
            rotate={rotateCardChild}
            setRotate={setRotateCardChild}
          />
          <FlipCard 
            frontChildren={FrontFlipHomeAdult}
            backChildren={BackFlipAdult}
            height={500}
            width={isLargeDevice ? 360:330}
            rotate={rotateCardAdult}
            setRotate={setRotateCardAdult}
          />
        </article>
      </motion.section>
    </main>
  )
}

export default AnchorPage
