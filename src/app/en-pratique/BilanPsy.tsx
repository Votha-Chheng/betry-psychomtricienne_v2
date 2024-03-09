import HomeTitle from '@/components/shared/HomeTitle'
import { oxygen } from '@/fonts/oxygen'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import QuestionBilan from './QuestionBilan'
import { InView } from 'react-intersection-observer'
import SectionLayout from '@/components/shared/SectionLayout'

const BilanPsy: FC = () => {
  const [viewQuestion, setViewQuestion] = useState<number>(0)

  const addView = (inView: boolean)=> {
    let numberOfView = 0
    if(numberOfView > 4) return
    if(inView ) setViewQuestion(prev => prev+1)
  }

  return (
    <SectionLayout noPaddingTop={false}>
      <HomeTitle title='Le bilan psycho&shy;moteur' lineColor='bg-charcoal' letterColor='#9f7f92' />
      <article className='flex flex-col items-center my-12 gap-3'>
        <Image src="/images/Bilan-psychomoteur.png" alt="Schéma montrant tous les aspects psychiques et physiques abordés pour un bilan psychomoteur" width={800} height={800} />
        <small className={`${oxygen.className} text-eggplant md:text-lg text-center font-bold tracking-wide`}>
          Schéma tiré du site <Link href="https://www.bloghoptoys.fr/" target="_blank" className='underline'>www.bloghoptoys.fr</Link>, blog sur l&apos;inclusion.
        </small>
      </article>
      <InView onChange={(inView, entry)=> inView && addView(inView)} triggerOnce={true}/>
      <QuestionBilan 
        startAnimation={viewQuestion > 0}
        question="C'est quoi ?"
      >
        <p>
          Un bilan psychomoteur est une série d&apos;entre&shy;tiens ré&shy;ali&shy;sée par la psy&shy;cho&shy;mo&shy;tri&shy;cien&shy;ne qui s&apos;ef&shy;fectue a&shy;vant tout dé&shy;but de soin ou de sui&shy;vi. <b>Il est à no&shy;ter que ce bi&shy;lan ne s&apos;ef&shy;fec&shy;tue que sur pres&shy;crip&shy;tion mé&shy;di&shy;cale.</b>
        </p>
      </QuestionBilan>
      <InView onChange={(inView, entry)=> inView && addView(inView)} triggerOnce={true}/>
      <QuestionBilan 
        startAnimation={viewQuestion > 1}
        question="Comment ça se passe ?"
      >
        <p>
          Ce bilan débute par un entretien qui permet de retracer <b>l’histoire de vie de la per&shy;son&shy;ne et de mieux com&shy;pren&shy;dre son fonction&shy;ne&shy;ment dans son en&shy;vi&shy;ron&shy;ne&shy;ment</b>. Dans un se&shy;cond temps, des tests stan&shy;dar&shy;di&shy;sés cou&shy;plés à une obser&shy;va&shy;tion cli&shy;ni&shy;que  per&shy;met&shy;tront d’orien&shy;ter le diag&shy;no&shy;stic psy&shy;cho&shy;mo&shy;teur, d’ob&shy;ser&shy;ver la re&shy;la&shy;tion à l’au&shy;tre, les fonctions psy&shy;cho&shy;mo&shy;tri&shy;ces pré&shy;ser&shy;vées et cel&shy;les qui sont en&shy;tra&shy;vées par des dif&shy;fi&shy;cul&shy;tés.
        </p>
        <p>
          Enfin, <b>une restitution</b> est faite au patient (et aux parents lorsqu’il s’a&shy;git d’un enfant). Des bilans com&shy;plé&shy;men&shy;taires (or&shy;tho&shy;phonique, orthop&shy;tique, etc.) peu&shy;vent parfois être né&shy;ces&shy;saires pour com&shy;plé&shy;ter les ob&shy;ser&shy;vations. <b>Il est à no&shy;ter qu&apos;une ré&shy;orien&shy;ta&shy;tion vers un au&shy;tre profes&shy;sion&shy;nel est é&shy;ga&shy;le&shy;ment pos&shy;si&shy;ble.</b>
        </p>
      </QuestionBilan>
      <InView onChange={(inView, entry)=> inView && addView(inView)} triggerOnce={true}/>
      <QuestionBilan 
        startAnimation={viewQuestion > 2}
        question="A quoi ça sert ?"
      >
        <p>
          <b>Il permet de préciser les ob&shy;jec&shy;tifs de la pri&shy;se en soin psy&shy;cho&shy;mo&shy;tri&shy;ce</b> et de définir quel sera le suivi. Il pour&shy;ra aus&shy;si éven&shy;tuel&shy;le&shy;ment ser&shy;vir à dé&shy;ter&shy;mi&shy;ner une orien&shy;ta&shy;tion vers un au&shy;tre pro&shy;fes&shy;sion&shy;nel de san&shy;té en com&shy;plé&shy;ment des soins psy&shy;cho&shy;mo&shy;teurs.
        </p>
      </QuestionBilan>
      <InView onChange={(inView, entry)=> inView && addView(inView)} triggerOnce={true}/>
      <QuestionBilan 
        startAnimation={viewQuestion > 3}
        question="Et après ?"
      >
        <p>
          Les conclusions du bilan psy&shy;cho&shy;mo&shy;teur au&shy;ront per&shy;mis, le cas éché&shy;ant, de dé&shy;fi&shy;nir <b>les dif&shy;fé&shy;rents ob&shy;jec&shy;tifs d&apos;un sui&shy;vi</b>. Ce sui&shy;vi, qui peut être in&shy;di&shy;vi&shy;duel ou grou&shy;pal en fonctions des ob&shy;jec&shy;tifs vi&shy;sés, est gé&shy;né&shy;ralement heb&shy;do&shy;ma&shy;daire. Pour les en&shy;fants, <b>des en&shy;tre&shy;tiens paren&shy;taux</b> sont pro&shy;po&shy;sés au cours du sui&shy;vi de l&apos;en&shy;fant pour pré&shy;ci&shy;ser les évo&shy;lu&shy;tions, les ai&shy;des et ou&shy;tils à ap&shy;por&shy;ter au quo&shy;ti&shy;dien et à l&apos;é&shy;co&shy;le.
        </p>
      </QuestionBilan>
  
    </SectionLayout>
  )
}

export default BilanPsy