import HomeTitle from '@/components/shared/HomeTitle'
import { oswald } from '@/fonts/oswald'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import Accordion from './Accordion'
import { FaArrowCircleRight } from 'react-icons/fa'
import { TbLocationFilled } from 'react-icons/tb'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { atelierParent, fromLeftWithDelay, imgBg, vignetteParent } from '@/animations/ateliers'
import { appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'
import { useMediaQuery } from '@uidotdev/usehooks'

type RelaxationProps={
  setRelaxation: Dispatch<SetStateAction<number>>
}

const Relaxation: FC<RelaxationProps> = ({setRelaxation}) => {
  const [halfWidth, setHalfWidth] = useState<number>(0)
  const [selected, setSelected] = useState<string>("")
  const [view, setView] = useState<boolean>(false)

  const articleRef = useRef<HTMLDivElement>(null)
  const atelierRelax = useRef<HTMLDivElement>(null)
  const isMediumDevice = useMediaQuery("only screen and (max-midth:1280px)")

  useEffect(()=> {
    if(articleRef.current){
      setHalfWidth(articleRef.current.clientWidth)
    }
  }, [])

  useEffect(()=> {
    if(atelierRelax.current){
      setRelaxation(atelierRelax.current.getBoundingClientRect().top)
    }
  }, [setRelaxation])

  return (
    <SectionLayout noPaddingX={true} >
      <article className='px-2 sm:px-8 xl:px-44' ref={atelierRelax}>
        <HomeTitle title='Atelier de relaxation' lineColor='bg-charcoal' letterColor='#9f7f92' />
      </article>
      <InView triggerOnce={true} onChange={(inView, entry)=> setView(inView)} />
      <motion.article variants={atelierParent} initial='initial' animate={view ? "animate":""} className='w-full flex flex-col-reverse items-center xl:flex-row gap-12 relative p-12'>
        <motion.div variants={imgBg}>
          <Image src="/images/Relaxation-6.jpg" alt="Tapis de sport disposés par terre" className='absolute z-0 blur-sm opacity-50' style={{objectFit:"cover"}} fill />
        </motion.div>
        <motion.aside variants={vignetteParent} initial='initial' animate={view ? "animate":""} ref={articleRef} className='w-full xl:w-1/2 z-10 flex flex-col gap-2.5 pt-1'>
          <motion.div variants={appearFromLeft}>
            <Accordion halfWidth={halfWidth} question="À qui s'adresse cet atelier ?" setSelected={setSelected} selected={selected} place="1">
              <ul className='py-2.5 px-5' style={{listStyleType:"square"}}>
                <p className='indent-5 text-justify pb-2.5 leading-8'>
                  Cet atelier est proposé à <span className='font-bold'>tout en&shy;fant et son pa&shy;rent dé&shy;si&shy;reux de pas&shy;ser un mo&shy;ment de qua&shy;li&shy;té</span> à tra&shy;vers le mé&shy;dia&shy;teur qu’est la re&shy;la&shy;xa&shy;tion. Les tran&shy;ches d’âge pro&shy;po&shy;sées sont : 
                </p>
                <li className='ml-8 font-bold'>de 5 à 6 ans</li>
                <li className='ml-8 font-bold'>de 7 à 10 ans</li>
              </ul>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromLeft}>
            <Accordion halfWidth={halfWidth} question="&Agrave; quoi ça sert ?" setSelected={setSelected} selected={selected} place="2">
              <p className='pt-2.5 px-5 indent-5 text-justify leading-8'>
                Il permet à l’enfant et à son parent de vi&shy;vre une <span className='font-bold'>ex&shy;périen&shy;ce po&shy;si&shy;ti&shy;ve</span> grâ&shy;ce à la re&shy;la&shy;xa&shy;tion. Ce mé&shy;dia&shy;teur est un outil puis&shy;sant per&shy;met&shy;tant l’<span className='font-bold'>apai&shy;se&shy;ment des ten&shy;sions cor&shy;po&shy;rel&shy;les</span>, la <span className='font-bold'>di&shy;mi&shy;nu&shy;tion de l’agi&shy;ta&shy;tion mo&shy;tri&shy;ce</span>, une <span className='font-bold'>meil&shy;leu&shy;re gestion des émo&shy;tions</span>, d’acqué&shy;rir une <span className='font-bold'>meil&shy;leu&shy;re con&shy;nais&shy;san&shy;ce de soi, de ses res&shy;sen&shy;tis et de son corps</span>.
              </p>
              <p className='pb-2.5 px-5 indent-5 text-justify leading-8'>
                Dans un monde où il existe une pres&shy;sion (chez les adul&shy;tes comme chez les en&shy;fants) de la per&shy;for&shy;man&shy;ce et de la vi&shy;tes&shy;se, où les é&shy;crans biaisent les rap&shy;ports hu&shy;mains, ce temps de&shy;vient <span className='font-bold'>une bul&shy;le d’oxy&shy;gè&shy;ne</span>. Il per&shy;met de se res&shy;sour&shy;cer et ex&shy;pé&shy;ri&shy;men&shy;ter un mo&shy;ment fort pour être pré&shy;sent à son en&shy;fant.
              </p>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromLeft}>
            <Accordion halfWidth={halfWidth} question="Comment ça se passe ?" setSelected={setSelected} selected={selected} place="3">
              <p className='pt-2.5 px-5 indent-5 text-justify leading-8'>
                L’atelier se déroule <span className='font-bold'>pendant les pe&shy;ti&shy;tes et gran&shy;des va&shy;can&shy;ces sco&shy;lai&shy;res</span>. Il du&shy;re <span className='font-bold'>1h30</span> et est pro&shy;po&shy;sé en pe&shy;tit grou&shy;pe de plu&shy;sieurs fa&shy;mil&shy;les com&shy;po&shy;sées <span className='font-bold'>d’un en&shy;fant et de l’un de ses pa&shy;rents</span>. L’ate&shy;lier se dé&shy;com&shy;po&shy;se en trois temps im&shy;por&shy;tants : l’in&shy;stal&shy;la&shy;tion, les exer&shy;ci&shy;ces de re&shy;la&shy;xa&shy;tion et en&shy;fin un temps de ver&shy;ba&shy;li&shy;sa&shy;tion pour ex&shy;pri&shy;mer ses res&shy;sen&shy;tis.
              </p>
              <p className='pb-2.5 px-5 indent-5 text-justify leading-8'>
                Dif&shy;fé&shy;ren&shy;tes techni&shy;ques sont mi&shy;ses en oeuvre tel&shy;les que <span className='font-bold'>la respi&shy;ra&shy;tion con&shy;trô&shy;lée ou les ap&shy;puis cor&shy;po&shy;rels</span>. Des tech&shy;niques et des <span className='font-bold'>ou&shy;tils con&shy;crets</span> sont uti&shy;li&shy;sés pour per&shy;met&shy;tre de les uti&shy;li&shy;ser par la suite chez soi.
              </p>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromLeft}>
            <Accordion halfWidth={halfWidth} question="Qui anime l'atelier ?" setSelected={setSelected} selected={selected} place="4">
              <p className='py-2.5 px-5 indent-5 text-justify leading-8'>
                L&apos;atelier est pro&shy;po&shy;sé par moi-même, Estelle Bétry, psy&shy;cho&shy;mo&shy;tri&shy;cien&shy;ne D.E. for&shy;mée à dif&shy;fé&shy;ren&shy;tes tech&shy;ni&shy;ques de re&shy;la&shy;xa&shy;tion, à la gestion de l’anxiété.<br/>
              </p>
              <Link href={{ pathname: "/", hash: "qui-suis-je"}} className='font-bold flex hover:text-yellow-600 px-5 py-2.5 gap-3 items-center'>Voir ma présentation <FaArrowCircleRight/></Link>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromLeft}>
            <Accordion halfWidth={halfWidth} question="Infos pratiques" setSelected={setSelected} selected={selected} place="5">
              <div className='p-5'>
                <h4 className='font-bold'>Tarifs :</h4>
                <p className='py-2.5 px-5 text-justify'>
                  Les places étant limitées, il est né&shy;ces&shy;sai&shy;re de s’in&shy;scri&shy;re pour par&shy;ti&shy;ciper à l’ate&shy;lier.
                </p>
                <p className='ml-5'>
                  &#8227; Le prix est de <span className='font-bold'>30 €</span> par fa&shy;mil&shy;le <span className='font-bold'>(un enfant et un parent)</span>.
                </p>
                <p className='ml-5'>
                  &#8227; Durée : <span className='font-bold'>1H30</span>
                </p>
                <div className='flex gap-2.5 border-4 border-charcoal mt-5 p-2.5 rounded-lg'>
                  <TbLocationFilled className='mt-2.5' />
                  <Link className='hover:text-yellow-600' href="https://www.google.com/maps?ll=43.693808,4.855409&z=16&t=m&hl=fr&gl=FR&mapclient=embed&cid=9569642781889889108" target='_blank'>
                    <b>Espace paramédical du DEVENSON<br/>Route de Maussane CD 17<br/>13890 MOURI&Egrave;S</b>
                  </Link>
                </div> 
              </div>
            </Accordion>
          </motion.div>
        </motion.aside>
        <motion.aside 
          variants={isMediumDevice ? fromLeftWithDelay: appearFromRight} 
          className={`${oswald.className} text-lg sm:text-xl md:text-2xl text-charcoal tracking-wider leading-8 md:leading-10 p-5 w-full xl:w-1/2 z-10 bg-anti-flash-white rounded-lg indent-5 md:indent-10 text-justify xl:self-start`}
        >
          <p>
            Notre mode de vie est mar&shy;qué par le stress, tant au tra&shy;vail que dans la vie quo&shy;ti&shy;dien&shy;ne. Mal&shy;heu&shy;reu&shy;se&shy;ment, ce stress peut aus&shy;si dé&shy;tein&shy;dre sur nos en&shy;fants en pre&shy;nant no&shy;tam&shy;ment la for&shy;me <b>d&apos;une cer&shy;tai&shy;ne an&shy;xiété ou d&apos;un man&shy;que de con&shy;cen&shy;tra&shy;tion</b>. Dès lors, il est im&shy;por&shy;tant pour eux de se trou&shy;ver des mo&shy;ments du&shy;rant les&shy;quels ils peu&shy;vent se rela&shy;xer et se re&shy;cen&shy;trer. <b>Cet&shy;te re&shy;la&shy;tion à soi-même ne coule pas de sour&shy;ce et bien sou&shy;vent, l&apos;en&shy;fant a be&shy;soin d&apos;aide pour en pren&shy;dre con&shy;science.</b> C&apos;est dans cet&shy;te perspec&shy;ti&shy;ve que j&apos;ai mis en pla&shy;ce au sein de mon ca&shy;bi&shy;net des <b>ate&shy;liers de re&shy;la&shy;xa&shy;tion ré&shy;ser&shy;vés aux en&shy;fants de 5 à 10 ans</b>.
          </p>
          <p>
            La relaxation est <b>un relâ&shy;che&shy;ment et une dé&shy;ten&shy;te phy&shy;si&shy;que et men&shy;ta&shy;le</b> qui con&shy;duit au bien-être et à un si&shy;len&shy;ce in&shy;té&shy;rieur a&shy;pai&shy;sant. Elle rend l&apos;en&shy;fant at&shy;ten&shy;tif à ce qu&apos;il res&shy;sent et lui fait pren&shy;dre con&shy;science de ses émo&shy;tions. En ou&shy;tre, la re&shy;la&shy;xa&shy;tion <b>ré&shy;équi&shy;li&shy;bre le système ner&shy;veux, cal&shy;me les ten&shy;sions, apai&shy;se les peurs et ai&shy;de à re&shy;trou&shy;ver con&shy;fian&shy;ce</b>.
          </p>
        </motion.aside>
      </motion.article>
    </SectionLayout>
  )
}

export default Relaxation