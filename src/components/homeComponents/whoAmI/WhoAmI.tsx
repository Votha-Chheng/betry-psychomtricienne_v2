import HomeTitle from '@/components/shared/HomeTitle'
import { oswald } from '@/fonts/oswald'
import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react'
import { InView } from 'react-intersection-observer'
import BigWords from './BigWords'
import { motion } from 'framer-motion'
import { appearFromBottom, appearFromLeft } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'
import { useMediaQuery } from '@uidotdev/usehooks'

type WhoAmIProps = {
  bgColor: string
  setThirdInView: Dispatch<SetStateAction<boolean>>
  setQuiSuisJe: Dispatch<SetStateAction<number>>
}

const WhoAmI: FC<WhoAmIProps> = ({setThirdInView, bgColor, setQuiSuisJe}) => {
  const [sectionView, setSectionView] = useState<boolean>(false)
  
  const quiSuisJeRef = useRef<HTMLDivElement>(null)

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)")
  
  useEffect(()=> {
    if(quiSuisJeRef.current){
      setQuiSuisJe(quiSuisJeRef.current.getBoundingClientRect().top)
    }
  }, [setQuiSuisJe])

  return (
    <SectionLayout bgColor={bgColor} noPaddingX={true}>
      <InView 
        onChange={(inView, entry)=> {
          setThirdInView(inView)
        }}
      >
        <article ref={quiSuisJeRef} className='p-2 sm:px-8 xl:px-44 overflow-hidden'>
          <HomeTitle title='Qui suis-je ?' letterColor='white' lineColor='bg-mountbatten-pink' bottomInView={50} />
          <InView triggerOnce={true} onChange={(inView, entry)=> setSectionView(inView)} threshold={isSmallDevice ? 0.25 : 0.5} className='flex flex-col sm:block items-center'>
            <motion.div 
              variants={appearFromLeft} 
              initial="initial" 
              animate={sectionView ? "animate": ""} 
              style={{position:"relative", float:"left"}} 
              className='overflow-hidden w-36 h-36 border-4 rounded-full border-mountbatten-pink mt-20 mr-5'
            >
              <Image alt="portrait de Estelle Bétry, psychomotricienne" src="/images/IMG_20210422_0017.jpg" style={{objectFit:"cover"}} fill/> 
            </motion.div>  
            <motion.div  
              variants={appearFromBottom} 
              initial="initial" 
              animate={sectionView ? "animate": ""} 
              className={`${oswald.className} text-anti-flash-white text-2xl sm:text-3xl leading-10 sm:leading-[50px] font-light tracking-wider px-1.5 sm:px-0 pt-5 sm:pt-24 text-justify indent-8`}
            >
              <p>
                De nature curieuse, j’ai&shy;me obser&shy;ver, com&shy;pren&shy;dre, en&shy;quê&shy;ter et ac&shy;qué&shy;rir de nou&shy;vel&shy;les con&shy;nais&shy;san&shy;ces. Je m’in&shy;té&shy;res&shy;se par&shy;ti&shy;cu&shy;lière&shy;ment au dé&shy;velop&shy;pement per&shy;son&shy;nel, au champ des é&shy;mo&shy;tions, à la com&shy;mu&shy;ni&shy;cation ver&shy;ba&shy;le et non ver&shy;bale ain&shy;si qu’aux mé&shy;thodes d’ap&shy;pren&shy;tis&shy;sa&shy;ge. Ma pra&shy;ti&shy;que s’en&shy;richit de tous ces cen&shy;tres d’inté&shy;rêt pour la met&shy;tre au ser&shy;vi&shy;ce de vo&shy;tre san&shy;té, cel&shy;le de vo&shy;tre en&shy;fant, cel&shy;le de vo&shy;tre bébé.
              </p>
              <p>
                Selon moi, une pri&shy;se en soin qui a du sens est cel&shy;le qui per&shy;met, grâ&shy;ce à une re&shy;la&shy;tion de con&shy;fi&shy;ance, de vous fai&shy;re com&shy;pren&shy;dre vo&shy;tre fonc&shy;tion&shy;ne&shy;ment glo&shy;bal pour que <b><em>vous puis&shy;siez vous épa&shy;nouir</em></b> en re&shy;trou&shy;vant <b><em>un équi&shy;li&shy;bre en&shy;tre corps, esprit, émo&shy;tions et fonctions cogni&shy;ti&shy;ves</em></b>.
              </p>   
            </motion.div>
          </InView>
        </article>
        <BigWords/>
      </InView>
    </SectionLayout>
  )
}

export default WhoAmI