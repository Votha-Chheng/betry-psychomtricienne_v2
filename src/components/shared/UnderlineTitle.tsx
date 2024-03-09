import { lineTitleHome } from '@/animations/titleHome'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

type UnderlineTitleProps = {
  bgColor: string
  inview: boolean
}

const UnderlineTitle: FC<UnderlineTitleProps> = ({bgColor, inview}) => {
  return (
    <motion.div variants={lineTitleHome} initial="initial" animate={inview ? "animate":"" } className={`${bgColor} h-2 rounded-md`}/>
  )
}

export default UnderlineTitle