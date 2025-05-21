import { appearFromBottom, appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import HomeTitle from '@/components/shared/HomeTitle'
import SectionLayout from '@/components/shared/SectionLayout'
//import Tooltip from '@/components/shared/Tooltip'
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@/components/ui/tooltip'
import { marckScript } from '@/fonts/marckScript'
import { oswald } from '@/fonts/oswald'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { InView } from 'react-intersection-observer'

type DefinitionProps = {
  bgColor: string
}

const Definition: FC<DefinitionProps> = ({bgColor}) => {
  const [textInView, setTextInView] = useState<boolean>(false)
  const [imageInView, setImageInView] = useState<boolean>(false)
  const [displayTooltip, setDisplayTooltip] = useState<boolean>(false)
  const [wordY, setWordY] = useState<number>(0)
  const [wordX, setwordX] = useState<number>(0)

  const [tooltipTop, setTooltipTop] = useState<number>(0)
  const motRef = useRef<HTMLSpanElement>(null)
  
  useEffect(()=> {
    if(motRef.current){
      setTooltipTop(motRef.current.offsetTop)
      setWordY(motRef.current.getBoundingClientRect().height) 
      setwordX(motRef.current.getBoundingClientRect().x )
    }
  }, [])
  
  return (
    <SectionLayout bgColor={bgColor} noPaddingTop={false}>
      <HomeTitle title='La Psycho&shy;motricité' lineColor='bg-charcoal' letterColor='#9f7f92' />
      <article className={`${oswald.className} text-charcoal font-light tracking-wider pt-14 pb-44 md:pb-96 text-justify indent-5 md:indent-10`}>
        <motion.div variants={appearFromBottom} initial="initial" animate="animate" className='text-mountbatten-pink w-4/5 mx-auto mb-20 md:mb-32'>
          <FaQuoteLeft size={25} className='float-left' />
          <h3 className={`${marckScript.className} indent-0 text-mountbatten-pink text-3xl md:text-6xl text-center`} >
            &nbsp;Corps, intelligence et émotions sont intimement liés...
          </h3>
          <FaQuoteRight size={25} className='float-right' />
        </motion.div>
        <InView onChange={(inView, entry)=> setTextInView(inView)} triggerOnce={true} />
        <motion.p variants={appearFromLeft} initial="initial" animate={textInView ? "animate":""} className='text-xl lg:text-3xl p-2.5 md:p-0 leading-10 lg:leading-[50px]'>
          La psychomotricité est une <span className='font-bold'>pro&shy;fes&shy;sion pa&shy;ra&shy;mé&shy;di&shy;cale</span>, auxi&shy;li&shy;aire de la mé&shy;de&shy;ci&shy;ne. El&shy;le est en&shy;ca&shy;drée par le mi&shy;ni&shy;stère de la san&shy;té via un di&shy;plô&shy;me d’&Eacute;tat. Son exer&shy;ci&shy;ce est ré&shy;gi par le <Link href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006703759/2004-08-07/" target="_blank" className='hover:text-yellow-600 underline underline-offset-2'>dé&shy;cret de com&shy;pé&shy;ten&shy;ce n°88-659 du 6 mai 1988</Link>.
        </motion.p>
        <motion.p variants={appearFromRight} initial="initial" animate={textInView ? "animate":""} className='text-xl lg:text-3xl p-2.5 md:p-0 leading-10 lg:leading-[50px]'>
          Le travail de la psycho&shy;motri&shy;cien&shy;ne con&shy;si&shy;ste à 
          <span className='font-bold'>
            &nbsp;pré&shy;ve&shy;nir, dé&shy;pi&shy;ster, trai&shy;ter les trou&shy;bles et dys&shy;fonc&shy;tion&shy;ne&shy;ments psy&shy;cho&shy;mo&shy;teurs
          </span>
          , en plus de fai&shy;re de 
          <span className='font-bold'>&nbsp;l’édu&shy;ca&shy;tion à la san&shy;té</span>
          . Elle va s’in&shy;té&shy;res&shy;ser à la 
          <span className='font-bold'>&nbsp;glo&shy;ba&shy;li&shy;té</span>
          &nbsp;de la per&shy;son&shy;ne, à son 
            <span className='font-bold'>&nbsp;hi&shy;stoi&shy;re de vie</span>
            , son <span className='font-bold'>environ&shy;nement</span> 
            &nbsp;et aux fonc&shy;tions psy&shy;cho&shy;mo&shy;tri&shy;ces que sont la
            <span className='font-bold'>&nbsp;motricité globale</span> 
            &nbsp;(co&shy;ordi&shy;na&shy;tions, équi&shy;li&shy;bre, etc.), la 
            <span className='font-bold'>&nbsp;mo&shy;tri&shy;ci&shy;té fi&shy;ne</span> 
            &nbsp;(dexté&shy;ri&shy;té di&shy;gi&shy;ta&shy;le et ma&shy;nuel&shy;le, etc.), le sché&shy;ma cor&shy;po&shy;rel, l’orien&shy;ta&shy;tion et l’orga&shy;ni&shy;sa&shy;tion dans le temps et l’es&shy;pace, le to&shy;nus, la po&shy;stu&shy;re. Elle va aus&shy;si être at&shy;ten&shy;ti&shy;ve à la 
            <span className='font-bold'>&nbsp;com&shy;mu&shy;ni&shy;ca&shy;tion</span>
            , la 
            <span className='font-bold'>&nbsp;gestion des émo&shy;tions</span> 
            &nbsp;et aux&nbsp; 
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger className='underline decoration-dotted cursor-help'>fonctions exécutives</TooltipTrigger>
                <TooltipContent className='bg-charcoal ml-0 max-w-lg indent-0 text-center'>
                  <p className='text-anti-flash-white'>Habiletés cog&shy;ni&shy;tives qui per&shy;met&shy;tent d'exé&shy;cu&shy;ter des tâches en con&shy;trô&shy;lant son com&shy;por&shy;te&shy;ment, par op&shy;po&shy;sition à au&shy;to&shy;ma&shy;tisme.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className='font-bold'>&nbsp;pour mi&shy;eux com&shy;pren&shy;dre l’in&shy;di&shy;vi&shy;du</span>.
        </motion.p>
        <InView onChange={(inView, entry)=> setImageInView(inView)} triggerOnce={true} />
        <motion.div variants={appearFromBottom} initial="initial" animate={imageInView ? "animate":""}>
          <Image style={{margin: "100px auto"}} src="/images/Psychomotricité.png" alt="Schéma montrant que la psychomotricité agit sur 3 éléments : le corps, le mental et les émotions." width={450} height={450} />
        </motion.div>
        <motion.p variants={appearFromBottom} initial="initial" animate={imageInView ? "animate":""} className='text-xl lg:text-3xl p-2.5 md:p-0 leading-10 lg:leading-[50px]'>
          Le but étant d’amener la person&shy;ne à un <span className='font-bold'>équi&shy;libre entre le corps, les émo&shy;tions, l’aspect psy&shy;chi&shy;que et cogni&shy;tif</span> et ce, a&shy;fin de pou&shy;voir <span className='font-bold'>s&apos;épa&shy;nouir</span> et de&shy;ve&shy;nir <span className='font-bold'>auto&shy;nome</span> dans son quo&shy;tidien en ac&shy;cep&shy;tant, ré&shy;duisant, ré&shy;édu&shy;quant et/ou com&shy;pen&shy;sant le trou&shy;ble psy&shy;cho&shy;mo&shy;teur.
        </motion.p>
      </article>
    </SectionLayout>
  )
}

export default Definition