import { appearFromBottom, appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'
import { oswald } from '@/fonts/oswald'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'

const Photos: FC = () => {
  const [inview, setInview] = useState<boolean>(false) 

  return (
    <SectionLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-4">
        <motion.div variants={appearFromLeft} initial="initial" animate={inview ? "animate":""}>
          <Image 
            className="border-4 border-charcoal rounded-md" 
            alt="Test psychomoteur consistant à mettre des pions dans les trous"
            src="/images/20210611_112350.jpg"
            width={400} 
            height={220} 
          />
        </motion.div>
        <motion.div variants={appearFromRight} initial="initial" animate={inview ? "animate":""}>
          <Image 
            className="border-4 border-charcoal rounded-md" 
            alt="Test psychomoteur consistant à sauter à cloche-pied sur de case en case"
            src={`/images/20210611_111927_001.jpg`} 
            width={400} 
            height={220} 
          />
        </motion.div>
      </div>
      <InView triggerOnce={true} onChange={(inView, entry)=> setInview(inView) } />
      <div className={`${oswald.className} pb-44 lg;pb-0`} style={{textAlign:'center', color:"#28536b", fontSize:"1.1em", fontWeight:"bold"}}>
        <motion.small variants={appearFromBottom} initial="initial" animate={inview ? "animate":""}>
          Quelques exemples de types de tests basiques pouvant être utilisés durant un bilan.
        </motion.small>
      </div>
    </SectionLayout>
  )
}

export default Photos