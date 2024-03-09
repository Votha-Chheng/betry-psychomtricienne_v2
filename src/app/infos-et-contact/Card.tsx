import { oswald } from '@/fonts/oswald'
import { oxygen } from '@/fonts/oxygen'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

type CardProps = {
  link?: string
  title: string
  more?: boolean
  scrollToBottom?: ()=> void
}

const Card: FC<CardProps> = ({link, title, scrollToBottom, more=true}) => {
  return (
    <div className={`w-full sm:w-[450px] h-auto sm:h-[140px] border-4 border-charcoal rounded-md bg-anti-flash-white flex flex-col justify-between`}>
      <h4 className={`${oswald.className} text-charcoal font-bold w-[90%] border-b mx-auto pt-5 pb-2.5 text-center border-charcoal text-xl sm:text-2xl tracking-wide`} >{title}</h4>
      <div className='flex justify-end pb-3.5 px-5 pt-2.5 sm:pt-0' onClick={()=>scrollToBottom ? scrollToBottom() : null}>
        {
          link
          ?
          <Link className='flex bg-mountbatten-pink text-anti-flash-white items-center gap-4 px-3 py-2 rounded-lg' href={`/${link}`} >
            <span className={`${oxygen.className} italic font-bold`}><em>{more ? "En savoir plus":"Me contacter"}</em></span><FaArrowCircleRight/>
          </Link>
          :
          <div className='flex bg-mountbatten-pink text-anti-flash-white items-center gap-4 px-3 py-2 rounded-lg cursor-pointer'>
            <span className={`${oxygen.className} italic font-bold`}><em>{more ? "En savoir plus":"Me contacter"}</em></span><FaArrowCircleRight/>
          </div>
        }
      </div>
    </div>
  )
}

export default Card