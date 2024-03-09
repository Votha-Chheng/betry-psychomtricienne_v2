'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import AnchorPage from './anchorPage/AnchorPage'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import Steps from './secondSection/Steps'
import TopMenu from '../shared/TopMenu'
import Footer from '../shared/Footer'
import WhoAmI from './whoAmI/WhoAmI'
import Specificities from './specificities/Specificities'
import Parcours from './parcours/Parcours'
import SideTitle from './SideTitle/SideTitle'

const HomeScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("")
  const [menuColor, setMenuColor] = useState<string>("")
  const [offsetY, setOffsetY] = useState<number>(5)
  const [quiSuisJe, setQuiSuisJe] = useState<number>(0)
  const [secondView, setSecondView] = useState<boolean>(false)
  const [thirdView, setThirdView] = useState<boolean>(false)
  const [fourthView, setFourthView] = useState<boolean>(false)
  const [fifthView, setFifthView] = useState<boolean>(false)
  const [footerView, setFooterView] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const partsRef = useRef<HTMLDivElement>(null)


  useEffect(()=> {
    setStart(true)
  }, [])

  useEffect(()=> {
    if(partsRef.current){
      setOffsetY(partsRef.current.offsetTop)
    }
  }, [])


  useEffect(()=> {
    const returnBgColor = ()=> {
      if((secondView && !thirdView && !footerView) || (fourthView && thirdView && !footerView) || (fourthView && !thirdView && !footerView) ){
        setBgColor("bg-anti-flash-white")
        setMenuColor("bg-mountbatten-pink")
      } else if((secondView && thirdView && !footerView) || (!secondView && thirdView && !footerView) || (fifthView && fourthView && !footerView) || (fifthView && !fourthView && !footerView) ) {
        setBgColor("bg-charcoal")
        setMenuColor("bg-charcoal")
      } else if((footerView && !fifthView) || (footerView && fifthView) || (footerView && !secondView && !thirdView && !fourthView) ){
        setBgColor("bg-eggplant")
        setMenuColor("bg-eggplant")
      } else {
        setBgColor("bg-transparent")
        setMenuColor("bg-transparent")
      }
    }
    
    returnBgColor()
  }, [secondView, thirdView, fourthView, fifthView, footerView])

  useEffect(()=> {
    if(window.location.hash && window.location.hash === "#qui-suis-je"){
      window.scrollTo({
        top: quiSuisJe,
        behavior:"smooth"
      })
    }
  }, [quiSuisJe])

  if(!start) return null

  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <TopMenu bgColor={menuColor} />
      <div className='overflow-x-hidden'>
        <AnchorPage bgColor={bgColor} menuColor={menuColor} />
      </div>
      <div ref={partsRef} className='relative'>
        <div className='w-full h-44 blur-xl relative after:w-full after:absolute after:top-0 z-20 after:h-36 after:bg-anti-flash-white' style={{boxShadow : "0px -50px 75px 50px rgba(255,255, 255)"}} />

        <SideTitle title='Comment consulter ?' offsetY={offsetY} menuColor={menuColor} translateX={menuColor === "bg-mountbatten-pink" && secondView} />
        <SideTitle title='Quelques mots sur moi' offsetY={offsetY} menuColor={menuColor} translateX={menuColor === "bg-charcoal" && thirdView} />
        <SideTitle title='Mes spécificités' offsetY={offsetY} menuColor={menuColor} translateX={menuColor === "bg-mountbatten-pink" && fourthView} />
        <SideTitle title='Mon expérience' offsetY={offsetY} menuColor={menuColor} translateX={menuColor === "bg-charcoal" && fifthView && !footerView} />

        <Steps setSecondInView={setSecondView} bgColor={bgColor} />
        <div className={`${bgColor} h-44 md:h-96 transition-colors duration-300`} />
        <WhoAmI bgColor={bgColor} setThirdInView={setThirdView} setQuiSuisJe={setQuiSuisJe}/>
        <Specificities bgColor={bgColor} setFourthInView={setFourthView}/>
        <Parcours bgColor={bgColor} setFifthInView={setFifthView} />
      </div>
      <Footer setFooterView={setFooterView} bgColor={bgColor} />
    </SmoothScrollProvider>
  )
}

export default HomeScreen