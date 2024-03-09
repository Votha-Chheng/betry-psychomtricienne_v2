import HomeTitle from '@/components/shared/HomeTitle'
import { oswald } from '@/fonts/oswald'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import Accordion from './Accordion'
import { FaPhone } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";
import { motion } from 'framer-motion'
import { atelierParent, imgBg, vignetteParent } from '@/animations/ateliers'
import { InView } from 'react-intersection-observer'
import { appearFromBottom, appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'

const Barkley: FC = () => {
  const [halfWidth, setHalfWidth] = useState<number>(0)
  const [selected, setSelected] = useState<string>("")
  const [view, setView] = useState<boolean>(false)


  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(articleRef.current){
      setHalfWidth(articleRef.current.clientWidth)
    }
  }, [])


  return (
    <SectionLayout noPaddingX={true} noPaddingTop={false}>
      <article className='px-2 sm:px-8 xl:px-44'>
        <HomeTitle title='Atelier de guidance parentale barkley' lineColor='bg-charcoal' letterColor='#9f7f92' />
      </article>
      <InView triggerOnce={true} onChange={(inView, entry)=> setView(inView)} />
      <motion.article variants={atelierParent} initial='initial' animate={view ? "animate":""} className='w-full flex items-center lg:items-start flex-col xl:flex-row gap-12 relative px-2.5 md:px-12 py-12 '>
        <motion.div variants={imgBg}>
          <Image src="/images/20210611_114122.jpg" alt="Chaises disposées en cercle" className='absolute z-0 blur-sm opacity-50' style={{objectFit:"cover"}} fill />
        </motion.div>
        <motion.aside 
          variants={appearFromLeft} 
          className={`${oswald.className} text-lg sm:text-xl md:text-2xl text-charcoal tracking-wider leading-8 md:leading-10 p-5 w-full xl:w-1/2 z-10 bg-anti-flash-white rounded-lg indent-5 md:indent-10 text-justify xl:self-start`}
        >
          <p className='pb-2.5'>
            Certains parents d&apos;enfant diag&shy;nos&shy;ti&shy;qué TDA/H (ou appa&shy;renté) sont très sou&shy;vent con&shy;fron&shy;tés à des pro&shy;blè&shy;mes de com&shy;por&shy;tement de la part de leur en&shy;fant. Dans cet&shy;te opti&shy;que, je co-ani&shy;me a&shy;vec ma con&shy;soeur psy&shy;cho&shy;lo&shy;gue spé&shy;cia&shy;li&shy;sée en neu&shy;ro&shy;psy&shy;cho&shy;lo&shy;gie des <b>ate&shy;liers de gui&shy;dan&shy;ce pa&shy;ren&shy;ta&shy;le ba&shy;sés sur le&nbsp;
            <Link className='underline underline-offset-4 italic' href='https://www.tdah-france.fr/Programme-d-entrainement-aux-habiletes-parentales-de-Barkley.html' target="_blank">pro&shy;gram&shy;me de BARKLEY</Link></b>.
          </p>
          <p>
            Ces ateliers visent à ai&shy;der ceux-ci fa&shy;ce aux ré&shy;ac&shy;tions op&shy;posan&shy;tes et dé&shy;fian&shy;tes de leur en&shy;fant en en&shy;seignant, dans une per&shy;spec&shy;tive psy&shy;cho&shy;édu&shy;ca&shy;ti&shy;ve, des tech&shy;ni&shy;ques de gestion de ces com&shy;por&shy;te&shy;ments dans le quo&shy;ti&shy;dien. Ce ty&shy;pe de pro&shy;gram&shy;me a mon&shy;tré <b>son ef&shy;fi&shy;ca&shy;ci&shy;té sur la fré&shy;quen&shy;ce et l’in&shy;ten&shy;si&shy;té des com&shy;por&shy;te&shy;ments per&shy;turba&shy;teurs des en&shy;fants</b>, en plus de re&shy;don&shy;ner un <b>senti&shy;ment de com&shy;pé&shy;ten&shy;ce aux pa&shy;rents</b>.
          </p>
        </motion.aside>
        <motion.aside  variants={vignetteParent} initial='initial' animate={view ? "animate":""} ref={articleRef} className='w-full xl:w-1/2 z-10 flex flex-col gap-2.5 pt-1'>
          <motion.div variants={appearFromRight}>
            <Accordion halfWidth={halfWidth} question="À qui s'adresse cet atelier ?" setSelected={setSelected} selected={selected} place="1">
              <p className='px-5 py-2.5 indent-5 text-justify'>Ils s’adressent aux <span className='font-bold'>parents d’un enfant diag&shy;nostiqué comme ayant un TDA/H ou un trou&shy;ble appa&shy;renté</span>, et qui en font la demande.</p>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromRight}>
            <Accordion halfWidth={halfWidth} question="&Agrave; quoi ça sert ?" setSelected={setSelected} selected={selected} place="2">
              <div>
                <p className='px-5 pt-2.5 indent-5 text-justify'>
                  Les entretiens proposés ont pour ob&shy;jectif de mieux com&shy;pren&shy;dre le fonction&shy;ne&shy;ment de son en&shy;fant TDA/H. <span className='font-bold'>Ils per&shy;met&shy;tent de trou&shy;ver des so&shy;lu&shy;tions con&shy;crètes pour pal&shy;lier les difficultés vécues au quo&shy;ti&shy;dien a&shy;fin de restau&shy;rer un lien re&shy;la&shy;tion&shy;nel fa&shy;mi&shy;lial de qua&shy;li&shy;té.</span> 
                </p>
                <p className='px-5 pb-2.5 indent-5 text-justify'>
                  Il per&shy;met éga&shy;le&shy;ment de di&shy;mi&shy;nuer le stress pa&shy;ren&shy;tal et ce&shy;lui de l’enfant. Il per&shy;met&shy;tra aussi à l’en&shy;fant de mieux ac&shy;cep&shy;ter et vi&shy;vre&nbsp;avec son TDA/H.
                </p>
              </div>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromRight}>
            <Accordion setSelected={setSelected} selected={selected} place="3" question='Comment ça se passe ?' halfWidth={halfWidth}>
              <p className='p-5 pb-0 indent-5 text-justify'>
                Un entretien préalable avec chaque fa&shy;mille per&shy;met de pré&shy;ci&shy;ser la de&shy;man&shy;de pa&shy;ren&shy;ta&shy;le. Le pro&shy;gram&shy;me est sui&shy;vi  <span className='font-bold'>pen&shy;dant 10 sé&shy;ances en grou&shy;pe fer&shy;mé</span> et consti&shy;tué de 5 à 8 fa&shy;mil&shy;les.
              </p>
              <p className='p-5 pt-0 indent-5 text-justify'>
                &Agrave; chaque réunion, un point es&shy;sen&shy;tiel du TDA/H est ap&shy;pro&shy;fon&shy;di tel que ses symp&shy;tô&shy;mes, les dif&shy;fi&shy;cul&shy;tés de mo&shy;ti&shy;va&shy;tion, de per&shy;ception du temps, de gestion de la co&shy;lère, les con&shy;sé&shy;quen&shy;ces sur l’esti&shy;me de soi, la sco&shy;la&shy;ri&shy;té. Des stra&shy;té&shy;gies ef&shy;fi&shy;ca&shy;ces et des ou&shy;tils con&shy;crets  <span className='font-bold'>(va&shy;li&shy;dés&nbsp;sci&shy;en&shy;ti&shy;fi&shy;que&shy;ment auprès de ce public)</span> sont pro&shy;po&shy;sées.
              </p>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromRight}>
            <Accordion question='Qui sommes-nous ?' setSelected={setSelected} selected={selected} place="4"  halfWidth={halfWidth}>
              <div>
                <div className='px-5 pt-2.5'>Le programme est proposé par :</div>
                <div className='px-5'>&#9658; moi-même, <span className='italic font-bold underline underline-offset-2'>Estelle B&Eacute;TRY</span>, psycho&shy;motricienne D.E.</div>
                <div className='px-5 pb-2.5'>&#9658; ma consoeur <b><Link className='italic underline underline-offset-2 hover:text-yellow-600' href="https://www.doctolib.fr/psychologue/maussane-les-alpilles/sandie-chambardon" target='_blank'>Sandie Chambardon</Link></b> psycho&shy;logue spécialisée en neuro-psychologie.</div>
              </div>
            </Accordion>
          </motion.div>
          <motion.div variants={appearFromRight}>
            <Accordion question='Nous contacter' halfWidth={halfWidth} setSelected={setSelected} selected={selected} place="5">
              <div className='flex flex-col items-center w-full p-5' >
                <div className="flex flex-col items-center sm:flex-row justify-between p-2 md:p-7 gap-8 w-full">
                  <div className={`${oswald.className} bg-charcoal leading-10 text-anti-flash-white tracking-wide w-full sm:w-1/2 flex flex-col items-center justify-center p-2.5 rounded-lg`}>
                    <h2 className='font-bold tracking-wider text-xl'>Estelle Bétry</h2>
                    <h3 className='italic tracking-wider text-xl'>Psychomotricienne</h3>
                    <Link className='flex items-center gap-2.5 hover:text-yellow-600 font-bold text-xl' href="tel:0644851800"><FaPhone />06 44 85 18 00</Link>
                  </div>
                  <div className={`${oswald.className} bg-charcoal leading-8 text-anti-flash-white tracking-wide w-full sm:w-1/2 flex flex-col items-center border-4 border-charcoal rounded-lg p-2.5`}>
                    <h2 className='text-center tracking-wide text-xl font-bold'>Sandie Chambardon</h2>
                    <h3 className='text-center italic tracking-normal text-xl 2xl:tracking-wide'>Psychologue/Neuropsychologue</h3>
                    <Link href="tel:0601152203" className='flex items-center gap-2.5 hover:text-yellow-600 font-bold text-xl'><FaPhone />06 01 15 22 03</Link>
                  </div>
                </div>
                <div className='flex gap-2.5 border-4 border-charcoal p-2.5 rounded-lg'>
                  <TbLocationFilled className='mt-2.5' />
                  <Link className='hover:text-yellow-600 font-bold' href="https://www.google.com/maps?ll=43.693808,4.855409&z=16&t=m&hl=fr&gl=FR&mapclient=embed&cid=9569642781889889108" target='_blank'>
                    Espace paramédical du DEVENSON<br/>Route de Maussane CD 17<br/>13890 MOURI&Egrave;S
                  </Link>
                </div> 
              </div> 
            </Accordion>
          </motion.div>
        </motion.aside>
      </motion.article>
    </SectionLayout>
  )
}

export default Barkley