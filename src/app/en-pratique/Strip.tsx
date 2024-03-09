import { rotations } from '@/animations/rotationsShow';
import { motion } from 'framer-motion';
import Image from 'next/image'
import React, { FC, ReactNode } from 'react'
import { IoIosArrowForward } from "react-icons/io";

type StripProps = {
  image: string
  alt: string
  children: ReactNode
  startAnimation: boolean
  translation?: {x:string, y:string}
}

const Strip: FC<StripProps> = ({image, children, alt, startAnimation, translation = {x:"0", y:"0"}}) => {
  return (
    <motion.article className='flex flex-col-reverse md:flex-row mt-16 mb-44 md:my-44 w-full md:w-auto relative'>
      <IoIosArrowForward className='self-center mr-8 hidden 2xl:block' color="#ffffff" size={75} />
      <motion.div variants={rotations} initial="initial" animate={`${startAnimation ? "animateX":""}`} className="md:min-w-[400px] min-h-[300px] relative overflow-hidden border-8 border-double border-anti-flash-white">
        <Image src={`/images/${image}`} alt={alt} style={{objectFit:"cover", transform:`translate(${translation.x}, ${translation.y})`}} fill /> 
      </motion.div>
      <div className='ml-5 relative'>
        {children}
      </div>
    </motion.article>
  )
}

export default Strip