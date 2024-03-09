import { topMenu } from '@/animations/topMenu'
import { menuItems } from '@/datas/menuItems'
import { marckScript } from '@/fonts/marckScript'
import { oxygen } from '@/fonts/oxygen'
import { useMediaQuery } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

type TopMenuProps = {
  bgColor: string
}

const TopMenu: FC<TopMenuProps> = ({bgColor}) => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const pathname = usePathname()

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 1280px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1281px)");

  useEffect(()=> {
    setBurgerMenu(false)
  }, [isMediumDevice, isLargeDevice, isSmallDevice])

  const returnBgColor = (bgColor: string)=> {
    if(isSmallDevice || isMediumDevice){
      if ((bgColor === "bg-transparent") || (bgColor === "")) return "bg-eggplant"
    }
    return bgColor
  }

  return (
    <motion.nav 
      variants={topMenu} 
      initial={`${pathname === "/" ? "initial":"initialNav"}`} 
      animate="animate" 
      className={`${returnBgColor(bgColor)} fixed z-50 w-screen transition-colors duration-300`}
      
    >
      <div className='w-full relative'>
        <header className={`${returnBgColor(bgColor)} py-5 w-full items-center h-full flex justify-between relative z-10`}>
          <h1 className={`${marckScript.className} pl-8 text-white text-2xl underline underline-offset-[7px]`}>
            {
              isLargeDevice 
              ?
              <Link href="/">Estelle Bétry</Link>
              :
              <div className='w-[50px] h-[50px] relative rounded-full overflow-hidden'>
                <Link href="/"><Image alt="portrait de Estelle Bétry, psychomotricienne" src="https://zupimages.net/up/24/10/hdau.jpg" fill style={{objectFit: 'cover'}}/></Link>
              </div>
            }
            
          </h1>
          {
            isLargeDevice ?
            <ul className={`${oxygen.className} text-white text-xl flex gap-8 font-semibold pr-8`}>
              {
                menuItems.map((item: {item: string, href: string})=> (
                  <li className='cursor-pointer hover:text-yellow-500 text-white' style={{letterSpacing:"1.05px", WebkitTextStroke: '0.1px black'}} key={item.item}>
                    <Link href={`/${item.href}`}>{item.item}</Link>
                  </li>
                ))
              }
            </ul>
            :
            <div className='pr-8' aria-label='menu for small devices'>
              {
                !burgerMenu 
                ?
                <RxHamburgerMenu color='white' size={50} className='cursor-pointer' aria-description='open menu for small devices' onClick={()=> setBurgerMenu(true)} />
                :
                <RxCross2 color='white' size={50} className='cursor-pointer' aria-description='close menu for small devices' onClick={()=> setBurgerMenu(false)} />
              }
            </div>
          }
        </header>
        {
          (isSmallDevice || isMediumDevice) &&
          <ul 
            className={`${oxygen.className} ${returnBgColor(bgColor)} ${burgerMenu ? "translate-y-0":"-translate-y-full"} z-0 w-full py-5 absolute transition-transform duration-300 text-white text-xl flex flex-col items-center gap-5 font-semibold pr-8`} 
            style={{top:"70px"}}
          >
            {
              menuItems.map((item: {item: string, href: string})=> (
                <li className='cursor-pointer hover:text-yellow-500 text-white' style={{letterSpacing:"1.05px", WebkitTextStroke: '0.1px black'}} key={item.item}>
                  <Link href={`/${item.href}`}>{item.item}</Link>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </motion.nav>
  )
}

export default TopMenu
