"use client"

import { oswald } from '@/fonts/oswald'
import React, { FC, ReactNode } from 'react'

type VignetteProps = {
  children: ReactNode
  height?: string
  width?: string
}

const Vignette: FC<VignetteProps> = ({children, height="auto", width="375px"}) => {
  

  return (
    <div className={`${oswald.className} text-charcoal tracking-wide text-lg bg-white border-charcoal border-l-8 border-t-2 border-r-2 border-b-2 p-2.5`} style={{width, height}}>
      {children}
    </div>
  )
}

export default Vignette
