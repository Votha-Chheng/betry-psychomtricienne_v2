'use client'

import HomeTitle from '@/components/shared/HomeTitle'
import { oswald } from '@/fonts/oswald'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { useWindowSize } from 'usehooks-ts'
import TroublesBoard from './TroublesBoard'
import SectionLayout from '@/components/shared/SectionLayout'
import { useMediaQuery } from '@uidotdev/usehooks'
import TroublesBoardSmall from '@/components/mobileComponents/TroublesBoardSmall'

type TroublesProps = {
  setSecondInView: Dispatch<SetStateAction<boolean>>
  footerInView: boolean
  bgColor: string
}

const Troubles: FC<TroublesProps> = ({setSecondInView, footerInView, bgColor}) => {
  const [articleBottom, setArticleBottom] = useState<number>(0)

  const articleRef = useRef<HTMLDivElement>(null)

  const dimensions = useWindowSize()
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1024px)")

  useEffect(()=> {
    if(articleRef.current){
      setArticleBottom(articleRef.current.getBoundingClientRect().bottom)
    }
  }, [articleBottom, setArticleBottom])




  return (
    <SectionLayout bgColor={bgColor}>
      <article ref={articleRef} className='w-full' style={{height:`${!isMediumDevice ? dimensions.height*2.5+"px": "auto"}`}}>
        <HomeTitle title='Quels troubles vise la psycho&shy;motricité ?' lineColor='bg-mountbatten-pink' letterColor='#f4f4f6' />
        <InView onChange={(inView, entry)=> setSecondInView(inView)}>
          <h3 className={`${oswald.className} tracking-wider font-light text-anti-flash-white text-xl md:text-3xl mt-24 mb-24`}>
            Les troubles rele­vant des soins psy­cho­mo­teurs peu­vent être clas­sés selon le type de public touché.
          </h3>
          {
            isMediumDevice
            ?
            <TroublesBoardSmall/>
            :
            <TroublesBoard height={dimensions.height} articleBottom={articleBottom} footerInView={footerInView} />
          }
        </InView>
      </article>
    </SectionLayout>
  )
}

export default Troubles