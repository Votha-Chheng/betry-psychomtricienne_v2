import { accordion } from '@/animations/accordion'
import { oswald } from '@/fonts/oswald'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { RxCross2 } from 'react-icons/rx'

type AccordionProps = {
  children: ReactNode
  halfWidth: number
  question: string
  setSelected: Dispatch<SetStateAction<string>>
  selected: string
  place:string
}

const Accodion: FC<AccordionProps> = ({halfWidth, children, question, setSelected, selected, place}) => {
  
  return (
    <>
      <div className='flex justify-between items-center bg-charcoal px-5 py-2.5 rounded-md' onClick={()=> setSelected(prev=> prev === place ? "": place)} >
        <h3 className={`${oxygen.className} text-anti-flash-white font-bold text-xl`}><em>{question}</em></h3>
        <RxCross2 
          aria-controls='Afficher ou masquer la réponse' 
          color="#f4f4f6" 
          size={40} 
          className={`${selected === place  ? "rotate-0":"-rotate-45"} transition-transform duration-200 cursor-pointer hover:text-yellow-600`} onClick={()=> setSelected(prev=> prev === place ? "": place)} />
      </div>
      <motion.div 
        variants={accordion} initial="hidden" animate={selected === place ? "show":"hidden"}
        className={`${oswald.className} text-xl md:text-2xl tracking-wide leading-8 md:leading-10 text-charcoal bg-anti-flash-white font-normal rounded-md mx-auto overflow-hidden`} 
        style={{width:`${halfWidth-10}px`}}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Accodion