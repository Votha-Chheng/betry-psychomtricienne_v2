import HomeTitle from '@/components/shared/HomeTitle'
import React, { Dispatch, FC, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import Strip from './Strip'
import Tooltip from '@/components/shared/Tooltip'
import { oxygen } from '@/fonts/oxygen'
import { oswald } from '@/fonts/oswald'
import Vignette from '@/components/homeComponents/secondSection/Vignette'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { appearFromBottom } from '@/animations/appearFromSides'
import SectionLayout from '@/components/shared/SectionLayout'
import { useMediaQuery } from '@uidotdev/usehooks'

type OutilsProps = {
  setSecondInView: Dispatch<SetStateAction<boolean>>
}

const Outils: FC<OutilsProps> = ({setSecondInView}) => {
  const [tooltip, setTooltip] = useState<boolean>(false)
  const [titles, setTitles] = useState<number[]>([0, 0, 0, 0, 0 ,0 ,0 ,0])
  const [inview1, setInview1] = useState<boolean>(false)
  const [inview2, setInview2] = useState<boolean>(false)
  const [inview3, setInview3] = useState<boolean>(false)
  const [inview4, setInview4] = useState<boolean>(false)
  const [inview5, setInview5] = useState<boolean>(false)
  const [inview6, setInview6] = useState<boolean>(false)
  const [inview7, setInview7] = useState<boolean>(false)
  const [inview8, setInview8] = useState<boolean>(false)

  const title1Ref = useRef<HTMLHeadingElement>(null)
  const title2Ref = useRef<HTMLHeadingElement>(null)
  const title3Ref = useRef<HTMLHeadingElement>(null)
  const title4Ref = useRef<HTMLHeadingElement>(null)
  const title5Ref = useRef<HTMLHeadingElement>(null)
  const title6Ref = useRef<HTMLHeadingElement>(null)
  const title7Ref = useRef<HTMLHeadingElement>(null)
  const title8Ref = useRef<HTMLHeadingElement>(null)

  const tablet = useMediaQuery("only screen and (max-width : 768px)");
  const xsScreen = useMediaQuery("only screen and (min-width : 769px) and (max-width : 920px)");
  const smallScreen = useMediaQuery("only screen and (min-width : 921px) and (max-width : 1280px)");

  useEffect(()=> {
    if(title1Ref.current && title2Ref.current && title3Ref.current && title4Ref.current && title5Ref.current && title6Ref.current && title7Ref.current && title8Ref.current){
      const temp = [
        title1Ref.current.clientHeight + 30, 
        title2Ref.current.clientHeight + 30, 
        title3Ref.current.clientHeight + 30, 
        title4Ref.current.clientHeight + 30, 
        title5Ref.current.clientHeight + 30, 
        title6Ref.current.clientHeight + 30, 
        title7Ref.current.clientHeight + 30, 
        title8Ref.current.clientHeight + 30
      ]
      setTitles(temp)
    }
  }, [])


  return (
    <SectionLayout>
      <InView onChange={(inView, entry)=> setSecondInView(inView)} className='pb-44'>
        <HomeTitle title='Outils et techniques' lineColor='bg-charcoal' letterColor='#f4f4f6' />
        <p className={`${oxygen.className} px-2.5 md:px-0 tracking-wide pt-16 pb-0 text-anti-flash-white text-justify text-lg md:text-2xl font-semibold indent-5 md:indent-10 leading-8 lg:leading-10`}>
          Au sein des séances, la psy&shy;cho&shy;mo&shy;tri&shy;cien&shy;ne va uti&shy;liser un é&shy;ven&shy;tail va&shy;rié de mé&shy;dia&shy;teurs et d&apos;ou&shy;tils en fonction des ob&shy;jec&shy;tifs vi&shy;sés :
        </p>
        <div className='px-2.5 lg:px-24'>
          <Strip image="equilibre.jpg" alt='Petite fille en équilibre sur un élément à bascule' startAnimation={inview1}>
            <h3 ref={title1Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Les techniques<br/>corporelles
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview1(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview1 ? "animate":""}`} className="absolute" style={{top:`${titles[0]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" :"600px"} >
                <p className='text-lg md:text-xl text-justify'>
                  Celles-ci incluent la <b>danse</b>, le <b>mi&shy;me</b>, l’<b>ex&shy;pres&shy;sion cor&shy;po&shy;relle</b>, les tech&shy;ni&shy;ques dé&shy;ri&shy;vées du <b>thé&shy;â&shy;tre</b>, du <b>cir&shy;que</b>, le <b>sport</b>, la bo&shy;xe, etc.
                </p>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="parcours.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur' startAnimation={inview2}>
            <h3 ref={title2Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Les parcours<br/>moteurs
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview2(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview2 ? "animate":""}`} className="absolute" style={{top: `${titles[1]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" :"600px"}>
                <p className='text-lg md:text-xl text-justify'>
                  Ces parcours composés d&apos;obstacles sol&shy;li&shy;ci&shy;tent en&shy;tre au&shy;tres le goût pour l&apos;<b>ef&shy;fort</b>, la <b>con&shy;cen&shy;tra&shy;tion</b>, la <b>ca&shy;pa&shy;ci&shy;té à ré&shy;sou&shy;dre des pro&shy;blè&shy;mes</b> et l&apos;<b>ha&shy;bi&shy;le&shy;té</b>.</p>
              </Vignette>
            </motion.div>
            <p></p>
          </Strip>
          <Strip image="support-musical.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur'startAnimation={inview3}>
            <h3 ref={title3Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>Les supports<br/>musicaux</h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview3(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview3 ? "animate":""}`} className="absolute" style={{top: `${titles[2]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" :"600px"}>
                <p className='text-lg md:text-xl text-justify'>
                  Ces supports musicaux peu&shy;vent être de tou&shy;te na&shy;tu&shy;re (en&shy;re&shy;gistre&shy;ments, instru&shy;ments de mu&shy;sivque, etc.) et trou&shy;vent leur uti&shy;li&shy;té pour <b>les pro&shy;fils sen&shy;so&shy;riels de ty&shy;pe au&shy;di&shy;tif</b> a&shy;fin de sol&shy;li&shy;ci&shy;ter la con&shy;cen&shy;tra&shy;tion, de fa&shy;ci&shy;li&shy;ter les mo&shy;ments de re&shy;la&shy;xa&shy;tion, etc.
                </p>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="pexels-manuelles.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur' startAnimation={inview4}>
            <h3 ref={title4Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Les activités<br/>manuelles<br/>psycho&shy;motrices
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview4(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview4 ? "animate":""}`} className="absolute" style={{top: `${titles[3]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" :"600px"}>
                <p className='text-lg md:text-xl text-justify'>
                  Ces techniques concer&shy;nent tout ce qui met en jeu la <b>mo&shy;tri&shy;cité fine</b> (uti&shy;li&shy;sa&shy;tion de cer&shy;tains pe&shy;tits muscles des doigts et des mains pour fai&shy;re des mou&shy;ve&shy;ments pré&shy;cis a&shy;fin de pren&shy;dre et de ma&shy;ni&shy;pu&shy;ler de pe&shy;tits ob&shy;jets).
                </p>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="reeducative.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur'startAnimation={inview5}>
            <h3 ref={title5Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Les activités<br/>techniques<br/>rééducatives
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview5(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview5 ? "animate":""}`} className="absolute" style={{top: `${titles[4]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" :"600px"}>
                <p className='relative text-lg md:text-xl text-justify'>Elles incluent la &nbsp;
                  <span aria-label='Définition de graphomotricité'
                    onMouseEnter={()=>setTooltip(true)} 
                    onMouseLeave={()=>setTooltip(false)} 
                    onFocus={()=>setTooltip(true)}
                    onBlur={()=>setTooltip(false)}
                    style={{textDecorationStyle: "dashed"}} 
                    className="underline font-bold underline-offset-4 cursor-help relative"
                  >
                    graphomotricité
                    <Tooltip 
                      text="La graphomotricité est l'ensemble des phénomènes psychomoteurs rentrant en jeu lors de l'acte d'écriture. La psychomotricité considère que l'on écrit avec son corps."
                      bgColor='bg-charcoal'
                      width={250}
                      textColor='text-anti-flash-white'
                      displayTooltip={tooltip}
                      top={40}
                      left={150}
                    />
                  </span>
                  , et tou&shy;tes sor&shy;tes d&apos;ac&shy;ti&shy;vi&shy;té en rap&shy;port avec l’or&shy;ga&shy;ni&shy;sa&shy;tion dans l’espa&shy;ce.
                </p>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="cube.jpg" alt='Dés qui tombent pour symboliser le jeu' startAnimation={inview6}>
            <h3 ref={title6Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Le jeu
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview6(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview6 ? "animate":""}`} className="absolute" style={{top: `${titles[5]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" : "600px"}>
              <p className='text-lg md:text-xl text-justify'>
                Sous toutes ses formes (aussi bien sym&shy;bo&shy;li&shy;que que sous la for&shy;me de jeu de so&shy;ci&shy;été), le jeu est un ou&shy;til d&apos;ap&shy;pren&shy;tis&shy;sa&shy;ge puis&shy;sant et une sour&shy;ce de mo&shy;ti&shy;va&shy;tion dans la ré&shy;édu&shy;ca&shy;tion.
              </p>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="relaxation.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur' startAnimation={inview7}>
            <h3 ref={title7Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              Les techniques<br/>de relaxation
            </h3>
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview7(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview7 ? "animate":""}`} className="absolute" style={{top: `${titles[6]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" : "600px"}>
                <p className='text-lg md:text-xl text-justify'>
                  Elles concernent les tech&shy;ni&shy;ques li&shy;ées à la mé&shy;di&shy;ta&shy;tion, et au tou&shy;cher thé&shy;ra&shy;peu&shy;ti&shy;que. <b>Des ate&shy;liers spé&shy;ciale&shy;ment dé&shy;diés à la re&shy;la&shy;xa&shy;tion sont ac&shy;ces&shy;sibles à tous les pu&shy;blics en fai&shy;sant la de&shy;man&shy;de</b> (mê&shy;me hors sui&shy;vi).
                </p>
                <Link href='/ateliers/#relaxation' className='flex w-full gap-3 pt-4'>
                  <span className='italic font-bold underline'>En savoir plus sur nos Ateliers Relaxation</span>
                    <span className='self-center pt-1 w-[75px]'>
                      <FaArrowCircleRight size={20} color='#274060'/>
                    </span>
                </Link>
              </Vignette>
            </motion.div>
          </Strip>
          <Strip image="pexels-vidal-balielo-jr-guidance.jpg" alt='Tapis, cerceaux et boudins en plastiques utilisés pour des parcours moteur' startAnimation={inview8}>
            <h3 ref={title8Ref} className={`${oswald.className} pb-5 md:pb-0 tracking-wide text-anti-flash-white uppercase text-4xl lg:text-5xl 2xl:text-7xl font-normal leading-10 xl:leading-[80px]`}>
              La guidance<br/>parentale
            </h3> 
            <InView triggerOnce={true} onChange={(inView, entry)=> setInview8(inView)} />
            <motion.div variants={appearFromBottom} initial="initial" animate={`${inview8 ? "animate":""}`} className="absolute" style={{top: `${titles[7]}px`, left:`${tablet ? "-10px":"-75px"}`}}>
              <Vignette width={tablet ? 'auto': smallScreen ? "400px" : xsScreen ? "350px" : "600px"}>
                <p className='text-lg md:text-xl text-justify'>
                  La guidance pa&shy;ren&shy;ta&shy;le sert à ai&shy;der les pa&shy;rents à mieux com&shy;pren&shy;dre le fonction&shy;ne&shy;ment de l’en&shy;fant dans ses dif&shy;ficul&shy;tés. <b>Des a&shy;teliers ba&shy;sés sur la pra&shy;ti&shy;que et dé&shy;diés à la gui&shy;dan&shy;ce pa&shy;ren&shy;tale sont ac&shy;ces&shy;si&shy;bles aux fa&shy;mil&shy;les d&apos;en&shy;fant diag&shy;nosti&shy;qué TDA/H.</b> Ils gui&shy;de&shy;ront la fa&shy;mil&shy;le dans le quo&shy;ti&shy;dien et la sco&shy;la&shy;ri&shy;té de l&apos;en&shy;fant.
                </p> 
                <Link className='flex w-full gap-3 pt-4' href='/ateliers/#guidance'>
                  <span className='italic font-bold underline text-lg md:text-xl'>En savoir plus sur nos Ateliers de guidance parentale</span>
                  <span className='self-center pt-1 w-[75px]'>
                    <FaArrowCircleRight size={20} color='#274060'/>
                  </span>
                </Link>
              </Vignette>
            </motion.div>
          </Strip>

        </div>
      </InView>
    </SectionLayout>
  )
}

export default Outils