import { appearFromBottom, appearFromLeft, appearFromRight } from '@/animations/appearFromSides'
import HomeTitle from '@/components/shared/HomeTitle'
import SectionLayout from '@/components/shared/SectionLayout'
import { oswald } from '@/fonts/oswald'
import { oxygen } from '@/fonts/oxygen'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

type SpecificitiesProps = {
  setFourthInView: Dispatch<SetStateAction<boolean>>
  bgColor: string
}

const Specificities: FC<SpecificitiesProps> = ({setFourthInView, bgColor}) => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)

  return (
    <SectionLayout bgColor={bgColor}>
      <InView onChange={(inView, entry)=> setFourthInView(inView)}>
        <HomeTitle 
          title="Mes spécificités"
          lineColor="bg-charcoal"
          letterColor="#9f7f92"
          bottomInView={100}
        />
        <InView triggerOnce={true} onChange={(inView, entry)=> setSectionInView(inView)} threshold={0.2} className='overflow-y-hidden'>
          <article className="flex md:flex-row flex-col-reverse justify-center mt-32 gap-7 items-center">
            <motion.div 
              variants={appearFromLeft} 
              initial="initial" animate={sectionInView ? "animate":""} 
              className={`${oswald.className} text-2xl lg:text-3xl leading-10 lg:leading-[50px] tracking-wide indent-10 text-justify text-charcoal`}
            >
              <div className='min-w-[450px] max-w-[450px] pt-5 ml-8 float-right 2xl:float-none hidden md:block 2xl:hidden'>
                <Image src="/images/barkley.png" alt="flyer sur les ateliers de d'entraînement aux habiltés parentales" width={450} height={700} className='border-charcoal border-4 rounded-md' />
              </div>
              <p className='mb-2.5 md:px-0 px-2'>         
                Psychomotricienne depuis plus de 10 ans, mon ex&shy;périence et mes re&shy;cher&shy;ches me pous&shy;sent de plus en plus à m&apos;intéres&shy;ser et à me spécialiser dans le <b><em>TDA/H</em></b>, les <b><em>par&shy;ticu&shy;lari&shy;tés émo&shy;tion&shy;nelles du HPI</em></b> et les <b><em>troubles DYS</em></b>. J&apos;ai eu dif&shy;féren&shy;tes expé&shy;riences qui ont étoffé ma pra&shy;tique avant d&apos;ou&shy;vrir mon cabinet.
              </p>
              <p className=' md:px-0 px-2'>
                Dans la continuité de ma spé&shy;ciali&shy;sa&shy;tion dans le TDA/H, je co-anime aussi, avec ma con&shy;soeur neuro-psy&shy;cho&shy;logue, des ateliers consa&shy;crés à la <b><em>guidance paren&shy;tale</em></b> réser&shy;vés aux pa&shy;rents d&apos;en&shy;fants souf&shy;frant de trouble de l&apos;at&shy;tention, d&apos;hyper&shy;activité (TDA/H) et/ou de trou&shy;bles du com&shy;porte&shy;ment. Ces ateliers s&apos;ar&shy;ticu&shy;lent autour du <em><a href="https://www.tdah-france.fr/Programme-d-entrainement-aux-habiletes-parentales-de-Barkley.html" target="_blank">Programme d&apos;en&shy;traîne&shy;ment aux habi&shy;letés paren&shy;tales de Barkley</a></em>.
              </p>
            </motion.div>
            <motion.div variants={appearFromRight} initial="initial" animate={sectionInView ? "animate":""} className='sm:min-w-[450px] sm:max-w-[450px] px-2 sm:px-0 2xl:block block md:hidden'>
              <Image src="/images/barkley.png" alt="flyer sur les ateliers de d'entraînement aux habiltés parentales" width={450} height={700} className='border-charcoal border-4 rounded-md' />
            </motion.div>
          </article>
        </InView>

        <motion.button 
          variants={appearFromBottom} 
          initial="initial" 
          animate={sectionInView ? "animate":""} 
          className='mt-12 md:mt-24 flex justify-center w-full bg-mountbatten-pink rounded-lg py-5 px-4 border-4 border-charcoal'
        >
          <Link href="/ateliers">
            <p className={`${oxygen.className} font-bold text-xl md:text-2xl tracking-wider text-anti-flash-white mb-3`}>En savoir plus sur les ateliers d&apos;entraînement aux habilités parentales (programme de Barkley)</p>
            <FaArrowCircleRight size={40} color='#f4f4f6' className='text-center w-full cursor-pointer'/>
          </Link>
        </motion.button>
      </InView>
    </SectionLayout>
  )
}

export default Specificities