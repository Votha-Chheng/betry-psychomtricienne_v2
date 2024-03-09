import React, { FC, ReactNode } from 'react'

type SectionLayoutProps = {
  children: ReactNode
  bgColor?: string
  noPaddingX?: boolean
  noPaddingTop?: boolean
}


const SectionLayout: FC<SectionLayoutProps> = ({children, bgColor="", noPaddingX=false, noPaddingTop=true}) => {
  return (
    <section className={`py-0 ${noPaddingX ? "px-0" : "px-2 sm:px-8 xl:px-44"} ${noPaddingTop ? "pt-0" : "pt-24 lg:pt-44"} w-full transition-colors duration-300 relative ${bgColor}`}>
      {children}
    </section>
  )
}

export default SectionLayout