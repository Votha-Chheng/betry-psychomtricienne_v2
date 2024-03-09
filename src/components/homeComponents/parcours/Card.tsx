
import { cardsAppear } from '@/animations/parcoursAnimations'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'

type CardProps = {
  height: number
  left: number
  bottom: number
  children: ReactNode
  periode: string
  position: number
  setRotateCard: Dispatch<SetStateAction<number>>
  rotateCard: number
}

const Card: FC<CardProps> = ({height, children, left, periode, bottom, position, setRotateCard, rotateCard}) => {
  const [hovered, setHovered] = useState<boolean>(false)

  const getRotation = (rotateCard: number) : number[]=> {
    switch(rotateCard){
      case 0 : return [0, 0, 0, 0, 0]
      case 1 : return [85, 0, 0, 0, 0]
      case 2 : return [85, 80, 0, 0, 0]
      case 3 : return [85, 80, 75, 0, 0]
      case 4 : return [85, 80, 75, 70, 0]
      default : return [0, 0, 0, 0, 0]
    }
  }
  const delays = [0, 0.075, 0.15 , 0.225, 0]

  return (
    <motion.article
      variants={cardsAppear}
      className={`bg-anti-flash-white w-[350px] rounded-md px-5 py-4 absolute border border-gray-400 bottom-0 cursor-pointer`}
      style={{
        height:`${height}px`,
        left:`${left}px`,
        bottom:`${bottom}px`,
        transformStyle:"preserve-3d", 
        transformOrigin : "10px 95%", 
        transform : `translateY(${hovered && rotateCard === 0 ? "-35px":"0"}) rotateZ(${getRotation(rotateCard)[position]}deg)`, 
        transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
        transitionDelay : `${delays[position]}s`,
        transitionProperty : "transform background-color",
        userSelect:"none",
        backgroundColor:`${position === rotateCard ? "#f2f4f3" : "#f5f5f5"}`
      }}
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      onClick={()=> setRotateCard(position)}
    >   
      <h4 className={`${oxygen.className} text-lg text-eggplant font-bold border-l-8 border-mountbatten-pink pl-2.5 border-b-2`} >{periode}</h4>    
      {children}
    </motion.article>
  )
}

export default Card