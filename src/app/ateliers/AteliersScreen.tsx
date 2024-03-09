'use client'

import Footer from '@/components/shared/Footer'
import TopMenu from '@/components/shared/TopMenu'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import React, { FC, useEffect, useRef, useState } from 'react'
import Barkley from './Barkley'
import Image from 'next/image'
import Relaxation from './Relaxation'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { appearFromBottom } from '@/animations/appearFromSides'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { NextSeo } from 'next-seo'

const AteliersScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("")
  const [secondInView, setSecondInView] = useState<boolean>(false)
  const [translate, setTranslate] = useState<boolean>(false)
  const [relaxation, setRelaxation] = useState<number>(0)
  const [footerView, setFooterView] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=> {
    setStart(true)
  }, [])


  useEffect(()=> {
    if(window.location.hash && window.location.hash === "#relaxation"){
      window.scrollTo({
        top: relaxation - 75,
        behavior:"smooth"
      })
    }
  }, [relaxation])

  if(!start) return null

  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <NextSeo
        title="Estelle Bétry - Ateliers : Guidance parentale et ateliers relaxation pour enfant"
        description="En plus des soins conventionnels, je propose aussi des ateliers de guidance parentales de type Barkley pour les parent d'enfant TDA/H, ainsi que des ateliers relaxation pour enfant"
      />
      <TopMenu bgColor="bg-mountbatten-pink" />
      <main className={`${bgColor} transition-colors duration-300 overflow-x-hidden pb-24`}>
        <Barkley/>
        <InView threshold={0.2} triggerOnce={true} onChange={(inView, entry)=> setSecondInView(inView)}>
          <section className="w-auto mx-auto px-0 sm:px-5 lg:px-44 flex justify-center py-44" >
            <motion.div className='hidden sm:block' variants={appearFromBottom} initial="initial" animate={`${secondInView ? "animate":""}`} >
              <Image 
                src="/images/plaquette.jpg" 
                alt="Flyer décrivant le programme aux habiletés parentales" 
                className='border-4 border-charcoal' 
                width={800} 
                height={1000} 
                priority
              /> 
            </motion.div>
            <div className='overflow-hidden border-charcoal block sm:hidden relative' style={{width:`360px`, height:`725px`}}>
              <FaArrowCircleLeft 
                size={40} 
                color={"#000000"}
                className={`${!translate ? "hidden":"block"} absolute z-10 top-1/2 left-0 cursor-pointer hover:opacity-100 opacity-70 transition-opacity duration-200`} 
                onClick={()=> setTranslate(false)} 
              />
              <FaArrowCircleRight 
                size={40} 
                color={"#000000"}
                className={`${!translate ? "block":"hidden"} 
                absolute z-10 top-1/2 right-0 cursor-pointer hover:opacity-100 opacity-70 transition-opacity duration-200`} 
                onClick={()=> setTranslate(true)}
              />
              <div style={{width:`720px`, height:`725px`}} className={`${translate ? "-translate-x-1/2":"translate-x-0"} absolute transition-transform duration-200`}>
                <Image 
                  src="/images/plaquette.jpg" 
                  alt="Flyer décrivant le programme aux habiletés parentales" 
                  className='border-4 z-0' 
                  priority
                  fill
                  style={{objectFit: "cover"}}
                /> 
              </div>
            </div>

          </section>
        </InView>
        <Relaxation setRelaxation={setRelaxation} />
      </main>
      <Footer bgColor='bg-eggplant' setFooterView={setFooterView} />
    </SmoothScrollProvider>
  )
}

export default AteliersScreen