'use client'

import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import Square from './Square'
import { oswald } from '@/fonts/oswald'
import Vignette from './Vignette'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import HomeTitle from '@/components/shared/HomeTitle'
import SectionLayout from '@/components/shared/SectionLayout'
import { oxygen } from '@/fonts/oxygen'
import { useMediaQuery } from '@uidotdev/usehooks'

type StepsProps = {
  setSecondInView: Dispatch<SetStateAction<boolean>>
  bgColor: string
}

const Steps: FC<StepsProps> = ({setSecondInView, bgColor}) => {

  const [stepTwoPosition, setStepTwoPosition] = useState(0)
  const [stepThreePosition, setStepThreePosition] = useState(0)
  const [stepFourPosition, setStepFourPosition] = useState(0)
  const [asideInView, setAsideInView] = useState<boolean>(false)

  const isSmallDevice = useMediaQuery("only screen and (max-width : 568px)")
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1281px)")

  const asideRef = useRef<HTMLDivElement>(null)

  const vignette2 = useRef<HTMLDivElement>(null)
  const vignette3 = useRef<HTMLDivElement>(null)
  const vignette4 = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(vignette2.current && asideRef.current){
      setStepTwoPosition(vignette2.current.offsetTop - asideRef.current.offsetTop)
    }
  }, [])

  useEffect(()=> {
    if(vignette3.current && asideRef.current){
      setStepThreePosition(vignette3.current.offsetTop - asideRef.current.offsetTop)
    }
  }, [])

  useEffect(()=> {
    if(vignette4.current && asideRef.current){
      setStepFourPosition(vignette4.current.offsetTop - asideRef.current.offsetTop)
    }
  }, [])

  return (
    <SectionLayout bgColor={bgColor} >
      <HomeTitle bottomInView={50} lineColor='bg-charcoal' letterColor='#9f7f92' title='Faire appel à une psycho&shy;motricienne'/>
      <InView 
        onChange={(inView, entry) => {
          inView && setAsideInView(true)
          setSecondInView(inView)
        }}
        style={{height: "100%", overflow:"hidden"}}
      >
        <aside ref={asideRef} className='flex justify-center mt-24'>
          <div className='hidden sm:flex relative w-44 lg:w-[660px]  flex-col items-center'>
            <div className='flex gap-0 lg:gap-16 items-center'>
              <motion.h4 
                initial={{opacity: 0}} 
                animate={ asideInView ? {opacity:1} : {}} transition={{delay: 0.5, duration: 0.5}} 
                className={`${oswald.className} hidden lg:block text-2xl xl:text-3xl tracking-wide text-charcoal font-bold w-[300px] text-right xl:text-left`}
              >
                Le premier contact téléphonique
              </motion.h4>
              <div className='w-44 lg:w-[300px]'>
                <Square 
                  number={1}
                  start={asideInView}
                />
              </div>
            </div>
            <div className='flex gap-16 items-center absolute' style={{top: `${stepTwoPosition}px`}} >
              <motion.h4 
                initial={{opacity: 0}} 
                animate={ asideInView ? {opacity:1} : {}} transition={{delay: 1, duration: 0.5}} 
                className={`${oswald.className} hidden lg:block text-2xl xl:text-3xl tracking-wide text-charcoal font-bold w-[300px] text-right xl:text-left`}
              >
                Le premier entretien au cabinet de psychomotricité
              </motion.h4>
              <div className='w-44 lg:w-[300px]'>
                <Square 
                  number={2}
                  start={asideInView}
                />
              </div>
            </div>
            <div className='flex gap-16 items-center absolute' style={{top: `${stepThreePosition}px`}} >
              <motion.h4 
                initial={{opacity: 0}} 
                animate={ asideInView ? {opacity:1} : {}} transition={{delay: 1.5, duration: 0.5}} 
                className={`${oswald.className} hidden lg:block text-2xl xl:text-3xl tracking-wide text-charcoal font-bold w-[300px] text-right xl:text-left`}
              >
                Le bilan psychomoteur
              </motion.h4>
              <div className='w-44 lg:w-[300px]'>
                <Square 
                  number={3}
                  start={asideInView}
                />
              </div>
            </div>
            <div className='flex gap-16 items-center absolute' style={{top: `${stepFourPosition}px`}} >
              <motion.h4 
                initial={{opacity: 0}} 
                animate={ asideInView ? {opacity:1} : {}} transition={{delay: 2, duration: 0.5}} 
                className={`${oswald.className} hidden lg:block text-2xl xl:text-3xl tracking-wide text-charcoal font-bold w-[300px] text-right xl:text-left`}
              >
                Restitution du bilan, suivi et rééducation
              </motion.h4>
              <div className='w-44 lg:w-[300px]'>
                <Square 
                  number={4}
                  start={asideInView}
                  displayVerticalLine={false}
                />
              </div>
            </div>
          </div>
          <article className={`flex flex-col gap-8 sm:gap-44`}>
            <motion.div initial={{opacity: 0, x:100}} animate={ asideInView ? {opacity:1, x: 0} : {}} transition={{delay: 0.75, duration: 0.3, ease:"easeOut"}} >
              <Vignette width={isMediumDevice ? "auto":undefined}>
                <h4 className={`${oxygen.className} text-eggplant text-md block lg:hidden mb-5 font-bold`}>	&#8883; Le premier contact téléphonique</h4>
                <p>
                  <b>Durant ce 1er contact téléphonique,</b> vous me préciserez vos demandes (qui est le patient concerné, si un(e) enseignant(e) vous a orienté vers une consultation en psychomotricité, le trouble concerné, etc.). Nous pourrons dès lors fixer un 1er rendez-vous.
                </p>
              </Vignette>
            </motion.div>
            <motion.div ref={vignette2} initial={{opacity: 0, x:100}} animate={ asideInView ? {opacity:1, x: 0} : {}} transition={{delay: 1.5, duration: 0.3, ease:"easeOut"}}>
              <Vignette width={isMediumDevice ? "auto":undefined}>
                <h4 className={`${oxygen.className} text-eggplant text-md block lg:hidden mb-5 font-bold`}>	&#8883; Le premier entretien au cabinet de psychomotricité</h4>
                <p>
                  <b>Un entretien préliminaire,</b> à l’aide de questionnaires si besoin, permettra de retracer l’histoire de vie de la personne et de mieux comprendre son fonction&shy;nement dans son environnement. Il permettra aussi, le cas échéant, de choisir les tests pertinents qui seront utilisés pour le bilan psychomoteur.
                </p>
              </Vignette>
            </motion.div>
            <motion.div ref={vignette3} initial={{opacity: 0, x:100}} animate={ asideInView ? {opacity:1, x: 0} : {}} transition={{delay: 2.25, duration: 0.3, ease:"easeOut"}}>
              <Vignette width={isMediumDevice ? "auto":undefined}>
              <h4 className={`${oxygen.className} text-eggplant text-md block lg:hidden mb-5 font-bold`}>	&#8883; Le bilan psychomoteur</h4>
                <p>
                  <b>Le bilan psychomoteur se fait sur <u>prescription médicale.</u></b> Il consiste en une série de tests standardisés couplés à une observation clinique qui permettront d’orienter le diagnostic psychomoteur, d’évaluer la relation à l’autre, les fonctions psychomotrices performantes et celles perturbées.
                </p>
              </Vignette>
            </motion.div>
            <motion.div ref={vignette4} initial={{opacity: 0, x:100}} animate={ asideInView ? {opacity:1, x: 0} : {}} transition={{delay: 3, duration: 0.3, ease:"easeOut"}}>
              <Vignette width={isMediumDevice ? "auto":undefined}>
                <h4 className={`${oxygen.className} text-eggplant text-md block lg:hidden mb-5 font-bold`}>	&#8883; Restitution du bilan, suivi et rééducation</h4>
                <p>
                  <b>La durée d&apos;un suivi ou d&apos;une rééducation peut fortement varier d&apos;une personne à l&apos;autre</b> et dépendra du type de trouble à soigner, de l&apos;investissement du patient ainsi que de la régularité dans les séances du suivi et de rééducation. Les objectifs de ce suivi dépendront quant à eux des conclusions du bilan psychomoteur.
                </p>
              </Vignette>
            </motion.div>
          </article>
        </aside>
      </InView>
    </SectionLayout>
  )
}

export default Steps
