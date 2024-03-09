import HomeTitle from '@/components/shared/HomeTitle'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import EventailParcours from './EventailParcours'
import { oxygen } from '@/fonts/oxygen'
import EventailFormations from './EventailFormations'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { appearFromBottom } from '@/animations/appearFromSides'
import { parentsTitleCards } from '@/animations/parcoursAnimations'
import SectionLayout from '@/components/shared/SectionLayout'

type ParcoursProps = {
  bgColor: string
  setFifthInView: Dispatch<SetStateAction<boolean>>
}

const Parcours: FC<ParcoursProps> = ({setFifthInView, bgColor}) => {
  const [cardsInView, setCardsInView] = useState<boolean>(false)

  return (
    <SectionLayout bgColor={bgColor}>
      <InView onChange={(inView, entry)=> setCardsInView(inView)} style={{position:"absolute", top:"25%"}} triggerOnce={true}/>
      <InView onChange={(inView, entry)=> setFifthInView(inView)} className='h-[2800px] lg:h-[200vh] py-96 '>
        <HomeTitle title='Mon Parcours' lineColor='bg-mountbatten-pink' letterColor='white' bottomInView={125} />
        <motion.div variants={parentsTitleCards} initial="initial" animate={cardsInView ? "animate": ""} className='flex gap-64 justify-center relative mt-28 items-center flex-col lg:flex-row'>
          <div className="w-[380px] h-[750px] lg:h-auto">
            <motion.div variants={appearFromBottom} className='relative w-[380px] h-16'>
              <h3 className={`${oxygen.className} tracking-wide left-1/2 absolute text-4xl md:text-5xl text-mountbatten-pink -translate-x-1/2`} >EXP&Eacute;RIENCES</h3>
              <h3 style={{WebkitTextStroke: "2px #9f7f92"}} className={`${oxygen.className} tracking-wide left-1/2 -translate-x-1/2 absolute text-4xl md:text-5xl text-transparent z-30`}>EXP&Eacute;RIENCES</h3>
              <EventailParcours cardsInView={cardsInView}/>  
            </motion.div>
          </div>
          <div className="w-[380px]">
            <motion.div variants={appearFromBottom} className='relative w-[380px] h-16'>
              <h3 className={`${oxygen.className} left-1/2 absolute text-4xl md:text-5xl tracking-wide text-mountbatten-pink -translate-x-1/2`} >FORMATIONS</h3>
              <h3 style={{WebkitTextStroke: "2px #9f7f92"}} className={`${oxygen.className} tracking-wide left-1/2 -translate-x-1/2 absolute text-4xl md:text-5xl text-transparent z-30`}>FORMATIONS</h3>
              <EventailFormations cardsInView={cardsInView}/>
            </motion.div>
          </div>
        </motion.div>
      </InView>
    </SectionLayout>
  )
}

export default Parcours