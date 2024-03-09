import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

type FrontFlipProps = {
  children: ReactNode
  rotate: boolean
  setRotate: Dispatch<SetStateAction<boolean>>
  height: number
  width: number
}

const FrontFlip: FC<FrontFlipProps> = ({children, rotate, setRotate, height, width}) => {
  return (
    <div className={`absolute transition-transform duration-500`} style={{transform:`${rotate ?' rotateY(-180deg)': 'rotate(0deg)'}`, transformStyle: 'preserve-3d', backfaceVisibility:'hidden', height:`${height}px`, width:`${width}px`}}>
      {children}
      <FaArrowCircleRight size={40} color='white' className='text-center w-full cursor-pointer' onClick={()=> setRotate(true)} />
    </div>
  )
}

export default FrontFlip
