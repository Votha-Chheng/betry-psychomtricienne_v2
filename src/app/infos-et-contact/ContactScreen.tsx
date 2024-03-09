'use client'

import { atelierParent, imgBg, vignetteParent } from '@/animations/ateliers'
import Footer from '@/components/shared/Footer'
import HomeTitle from '@/components/shared/HomeTitle'
import TopMenu from '@/components/shared/TopMenu'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'
import Card from './Card'
import Vignette from '@/components/homeComponents/secondSection/Vignette'
import { InView } from 'react-intersection-observer'
import { appearFromBottom, appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'
import Link from 'next/link'

const ContactScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [partOneInView, setPartOneInView] = useState<boolean>(false)
  const [tarifsInView, setTarifsInView] = useState<boolean>(false)
  const [refundInView, setRefundInView] = useState<boolean>(false)
  const [footerView, setFooterView] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=> {
    setStart(true)
  }, [])

  const scrollToBottom = ()=> window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  if(!start) return null

  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <TopMenu bgColor="bg-mountbatten-pink" />
      <main className={`bg-anti-flash-hite transition-colors duration-300 overflow-x-hidden`}>
        <SectionLayout noPaddingTop={false} noPaddingX={true}>
          <article className='px-2 sm:px-8 xl:px-44'>
            <HomeTitle title="Info & contact" lineColor='bg-charcoal' letterColor='#9f7f92' />
          </article>
          <article className='w-full flex relative mb-36 lg:px-44'>
            <motion.div variants={imgBg} initial="initial" animate={partOneInView ? "animate":""} >
              <Image src="/images/20210422_145038.jpg" alt="Commode et horloge du cabinet de psychomotricité" fill style={{objectFit: "cover"}} className='absolute top-0 z-0 blur-sm opacity-70'/>
            </motion.div>
            <aside className='px-2.5 xl:px-12 z-10 py-24'>
              <motion.h4 
                variants={appearFromLeft} 
                initial="initial" 
                animate={partOneInView ? "animate":""} 
                className={`${oxygen.className} px-2 font-bold text-2xl md:text-4xl mb-4 text-eggplant`}
              >
                Liste des services proposées
              </motion.h4>
              <InView triggerOnce={true} onChange={(inView, entry)=> setPartOneInView(inView)} />
              <motion.div variants={appearFromRight} initial="initial" animate={partOneInView ? "animate":""} className='bg-charcoal w-full h-0.5' />
              <motion.div variants={vignetteParent} initial="initial" animate={partOneInView ? "animate":""} className='py-8 px-2.5 mb-36 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-8 justify-center'>
                <motion.div variants={appearFromRight}>
                  <Card title='Bilan psychomoteur' link='en-pratique' />
                </motion.div>
                <motion.div variants={appearFromRight}>
                  <Card title='Suivi individuel et/ou groupal' scrollToBottom={scrollToBottom} more={false}/>
                </motion.div>
                <motion.div variants={appearFromRight}>
                  <Card title='Equipe éducative/réunion pédagogique' scrollToBottom={scrollToBottom} more={false} />
                </motion.div>
                <motion.div variants={appearFromRight}>
                  <Card title='Entretien parental' scrollToBottom={scrollToBottom} more={false} />
                </motion.div>
                <motion.div variants={appearFromRight}>
                  <Card title='Atelier guidance parentale (BARKLEY)' link='ateliers' />
                </motion.div>
                <motion.div variants={appearFromRight}>
                  <Card title='Atelier de relaxation pour enfant' link='ateliers/#relaxation' />
                </motion.div>
              </motion.div>
              <motion.h4 variants={appearFromLeft} initial="initial" animate={tarifsInView ? "animate":""} className={`${oxygen.className} px-2 font-bold text-2xl lg:text-4xl mb-4 text-eggplant`}>Tarifs</motion.h4>
              <InView triggerOnce={true} onChange={(inView, entry)=> setTarifsInView(inView)} />
              <motion.div variants={appearFromRight} initial="initial" animate={tarifsInView ? "animate":""} className='bg-charcoal w-full h-0.5' />
              <motion.div variants={appearFromBottom} initial="initial" animate={tarifsInView ? "animate":""} className='py-8 px-2'>
                <Vignette width='100%'>
                  <p className='text-xl lg:text-3xl p-2 indent-5 lg:indent-10 text-justify leading-9 lg:leading-[3rem]'>
                    La publication des tarifs pour les sé&shy;an&shy;ces <b>li&shy;ées à un par&shy;cours de soins psy&shy;chomoteurs (et non les ate&shy;liers)</b> sur in&shy;ter&shy;net peut être <b>con&shy;si&shy;dé&shy;rée com&shy;me de la pu&shy;bli&shy;ci&shy;té</b>. En re&shy;van&shy;che, <b>les mon&shy;tants des soins sont af&shy;fichés au ca&shy;bi&shy;net de psy&shy;cho&shy;mo&shy;tri&shy;ci&shy;té</b>. Vous pou&shy;vez me con&shy;tac&shy;ter par té&shy;lé&shy;pho&shy;ne ou par e-mail pour tout ren&shy;seigne&shy;ment ou de&shy;man&shy;de de de&shy;vis.
                  </p>
                </Vignette>
              </motion.div>
              <motion.h4 variants={appearFromLeft} initial="initial" animate={refundInView ? "animate":""} className={`${oxygen.className} px-2 mt-28 font-bold text-2xl lg:text-4xl mb-4 text-eggplant`}>
                Remboursement des soins
              </motion.h4>
              <InView triggerOnce={true} onChange={(inView, entry)=> setRefundInView(inView)} />
              <motion.div variants={appearFromRight} initial="initial" animate={refundInView ? "animate":""} className='bg-charcoal w-full h-0.5' />
              <motion.div variants={appearFromBottom} initial="initial" animate={refundInView ? "animate":""} className='py-8 px-2'>
                <Vignette width='100%'>
                  <p className='text-xl lg:text-3xl p-2 indent-5 md:indent-10 text-justify leading-9 lg:leading-[3rem]'>
                    <b>Les soins psychomo&shy;teurs ne sont pas rem&shy;bour&shy;sés par la Sé&shy;cu&shy;ri&shy;té so&shy;ciale</b> mais vous pou&shy;vez vous ren&shy;seigner au&shy;près de <b>vo&shy;tre mu&shy;tuel&shy;le qui peut pren&shy;dre en char&shy;ge quel&shy;ques sé&shy;an&shy;ces</b> (comme <em>MGEN, AG2R,</em> etc.).
                  </p>
                  <p className='text-xl lg:text-3xl p-2 indent-5 lg:indent-10 text-justify leading-9 lg:leading-[3rem]'>
                    La <Link href="http://www.mdph13.fr" className='font-bold underline italic hover:text-yellow-600' target="_blank">MDPH des Bou&shy;ches-du-Rhô&shy;ne</Link> peut al&shy;louer une al&shy;lo&shy;ca&shy;tion <b>(AEEH, AAH)</b> en fonction de cer&shy;tains cri&shy;tè&shy;res. Vous pou&shy;vez vous ren&shy;sei&shy;gner au&shy;près du <b>CCAS de vo&shy;tre vil&shy;le</b> pour avoir une ai&shy;de à la cons&shy;ti&shy;tu&shy;tion d’un dos&shy;sier.
                  </p>
                </Vignette>
              </motion.div>
            </aside>      
          </article>
        </SectionLayout>
      </main>
      <Footer bgColor='bg-eggplant' setFooterView={setFooterView} />
    </SmoothScrollProvider>
  )
}

export default ContactScreen