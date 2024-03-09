import { oswald } from '@/fonts/oswald'
import { oxygen } from '@/fonts/oxygen'
import { calculateDelayForSquares } from '@/utils/calculateDelayForSquare'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

type SquareProps = {
  number : number
  start: boolean
  displayVerticalLine?: boolean
}

const Square: FC<SquareProps> = ({number, start, displayVerticalLine = true}) => {

  return (
    <div className='w-[100px] h-[100px] rotate-45 relative my-12 bg-anti-flash-white rounded-md'>
      <motion.div
        className={`${oswald.className} w-[50px] h-[50px] bg-anti-flash-white rounded-sm translate-y-6 translate-x-6 -rotate-45 z-20 flex justify-center items-center text-mountbatten-pink text-5xl font-bold`}
        initial={{opacity: 0}}
        animate={start ? {opacity: 1 } : {}}
        transition={{delay: calculateDelayForSquares(number*0.75, 0.75)}}
      >
        {number}
      </motion.div>
      <motion.div 
        className='top-0 left-0 absolute w-[10px] rounded-md bg-mountbatten-pink z-10'
        initial={{height: 0}}
        animate={start ? {height: 100 }: {}}
        transition={{delay: calculateDelayForSquares(number*0.75, 0.25), duration: 0.25 }}
      />
      <motion.div 
        className='top-0 right-0 absolute h-[10px] rounded-md bg-mountbatten-pink z-10 rotate-180 -translate-x-[100px]'
        style={{originX: 1}}
        initial={{width: 0}}
        animate={start ? {width: 100 }: {}}
        transition={{delay: calculateDelayForSquares(number*0.75, 0.25), duration: 0.25 }}
      />
      <motion.div 
        className='bottom-0 right-0 absolute w-[10px] h-[100px] rounded-md bg-mountbatten-pink z-10 rotate-180 -translate-y-[100px]'
        style={{originY: 1}}
        initial={{height: 0}}
        animate={start ? {height: 100 }: {}}
        transition={{delay:  calculateDelayForSquares(number*0.75, 0.5), duration: 0.25 }}
      />
      <motion.div 
        className='bottom-0 right-0 absolute w-[100px] h-[10px] rounded-md bg-mountbatten-pink z-10 rotate-180 -translate-x-[100px]'
        style={{originX: 1}}
        initial={{width: 0}}
        animate={start ? {width: 100 }: {}}
        transition={{delay: calculateDelayForSquares(number*0.75, 0.5), duration: 0.25 }}
      />
      {
        displayVerticalLine && 
        <motion.div 
          className='w-2.5 h-[300px] rotate-[135deg] origin-bottom-right bg-mountbatten-pink -z-10 absolute rounded-full bottom-1 right-[11px]'
          initial={{height: 0}}
          animate={start ? {height: 300 }: {}}
          transition={{delay: calculateDelayForSquares(number*0.75, 0.75), duration: 0.25 }}
        />
      }
      
    </div>
  )
}

export default Square