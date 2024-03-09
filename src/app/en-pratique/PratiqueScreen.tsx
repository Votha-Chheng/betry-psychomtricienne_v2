'use client'

import Footer from '@/components/shared/Footer'
import TopMenu from '@/components/shared/TopMenu'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import React, { FC, useEffect, useRef, useState } from 'react'
import BilanPsy from './BilanPsy'
import Outils from './Outils'
import Photos from './Photos'
import { NextSeo } from 'next-seo'

const PratiqueScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("")
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
      } else if(secondInView && !footerView) {
        setBgColor("bg-mountbatten-pink")
      } else {
        setBgColor("bg-anti-flash-white")
      }
    }
    getBgColor()
  }, [secondInView, footerView])

  if(!start) return null

  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <NextSeo
        title="Estelle Bétry - Pratiques : le bilan psychomoteur et les outils et techniques utilisés pour les soins"
        description="Définition du bilan psychomteur et outils et techniques utilisés pour les soins."
      />
      <TopMenu bgColor="bg-mountbatten-pink" />
      <main className={`${bgColor} transition-colors duration-300 overflow-x-hidden`}>
        <BilanPsy />
        <Photos/>
        <Outils setSecondInView={setSecondInView}/>
      </main>
      <Footer bgColor='bg-eggplant' setFooterView={setFooterView} />
    </SmoothScrollProvider>
  )
}

export default PratiqueScreen