'use client'

import Footer from '@/components/shared/Footer'
import HomeTitle from '@/components/shared/HomeTitle'
import TopMenu from '@/components/shared/TopMenu'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import React, { FC, useEffect, useRef, useState } from 'react'
import Definition from './Definition'
import Troubles from './Troubles'
import SectionLayout from '@/components/shared/SectionLayout'
import { NextSeo } from 'next-seo'

const PsychomotriciteScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("")
  const [menuColor, setMenuColor] = useState<string>("bg-mountbatten-pink")
  const [secondInView, setSecondInView] = useState<boolean>(false)
  const [footerView, setFooterView] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    setStart(true)
  }, [])

  useEffect(()=> {
    const getBgColor = ()=> {
      if(!secondInView && !footerView){
        setBgColor("bg-anti-flash-white")
        setMenuColor("bg-mountbatten-pink")
      } else if(secondInView && !footerView) {
        setBgColor("bg-charcoal")
        setMenuColor("bg-charcoal")
      } else {
        setBgColor("bg-anti-flash-white")
        setMenuColor("bg-eggplant")
      }
    }
    getBgColor()
  }, [secondInView, footerView])

  if(!start) return null

  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <NextSeo
        title="Estelle Bétry - Psychomotricienne sur Mouriès, Arles, Saint-Martin de Crau et les Alpilles - Déninition de psychomotricité"
        description="Définition de ce qu'est la psychomotricité ainsi que les outils et techniques utilisés dans mes soins."
      />
      <TopMenu bgColor={menuColor} />
      <main className={`${bgColor} transition-colors duration-300 overflow-x-hidden`}>
        <Definition bgColor={bgColor}/>
        <Troubles bgColor={bgColor} footerInView={footerView} setSecondInView={setSecondInView}/>
      </main>
      <Footer bgColor='bg-eggplant' setFooterView={setFooterView} />
    </SmoothScrollProvider>
  )
}

export default PsychomotriciteScreen