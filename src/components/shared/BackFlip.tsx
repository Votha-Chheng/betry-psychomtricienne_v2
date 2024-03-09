import { oxygen } from '@/fonts/oxygen';
import Link from 'next/link';
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";

type BackFlipProps = {
  children: ReactNode
  rotate: boolean
  setRotate: Dispatch<SetStateAction<boolean>>
  height: number
  width: number
}
const BackFlip: FC<BackFlipProps> = ({children, rotate, setRotate, height, width}) => {
  return (
    <section className='bg-white transition-transform duration-500 w-[250px] h-[300px] border-2 border-charcoal rounded-lg' style={{transform:`${!rotate ?' rotateY(-180deg)': 'rotate(0deg)'}`, transformStyle: 'preserve-3d', backfaceVisibility:'hidden', height:`${height}px`, width:`${width}px`}}>
      {children}
      <article className='flex flex-col justify-center items-center gap-5'>
        <div className={`${oxygen.className} w-32 rounded-md cursor-pointer bg-mountbattent-pink font-bold bg-mountbatten-pink text-white p-2 text-center`}>
          <Link href="/psychomotricite/#troubles-adulte" >En savoir plus</Link>
        </div> 
        <FaArrowCircleLeft onClick={()=> setRotate(false)} size={30} color='#9f7f92' className='cursor-pointer' />
      </article>
    </section>
  )
}

export default BackFlip
