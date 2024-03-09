'use client'

import { questionAppear } from '@/animations/bilanPsyAnim'
import Vignette from '@/components/homeComponents/secondSection/Vignette'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

type QuestionBilanProps={
  children: ReactNode
  question: string
  startAnimation: boolean
}

const QuestionBilan: FC<QuestionBilanProps> = ({children, question, startAnimation}) => {
  const [heightQuestion, setHeightQuestion] = useState<number>(0)

  const questionRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(()=> {
    if(questionRef.current){
      setHeightQuestion(questionRef.current.getBoundingClientRect().height)
    }
  }, [])
  
  
  return (
    <article className='flex flex-col lg:flex-row w-full my-28 px-2.5 sm:px-24 lg:px-0'>
      <h3 className={`${oxygen.className} text-mountbatten-pink text-3xl lg:text-5xl font-bold tracking-wide w-full h-auto lg:w-2/5 text-center lg:text-right overflow-hidden`}>
        <motion.span className='inline-block pr-2.5' variants={questionAppear} initial='initialQuestion' animate={`${startAnimation ? "animateQuestion":""}`} ref={questionRef}>{question}</motion.span>
      </h3>
      <div className='w-1 relative hidden lg:block'>
        <motion.div variants={questionAppear} initial="initialLine" animate={`${startAnimation ? "animateLine":""}`} className='bg-charcoal w-full rounded-md absolute'/>
      </div>
      <div className='overflow-x-hidden w-full lg:w-3/5'>
        <motion.div variants={questionAppear} initial='initialVignette' animate={`${startAnimation ? "animateVignette":""}`} className={` h-auto indent-5 text-justify pl-2.5`} style={{paddingTop: `${heightQuestion + 10}px`}} >
          <Vignette  width="100%">
            {children}
          </Vignette>
        </motion.div>
      </div>
    </article>
  )
}

export default QuestionBilan