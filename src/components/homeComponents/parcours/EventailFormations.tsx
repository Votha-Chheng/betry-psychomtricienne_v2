import React, { FC, useState } from 'react'
import Card from './Card'
import { oswald } from '@/fonts/oswald'
import { motion } from 'framer-motion'
import { eventailFormationsAppear } from '@/animations/parcoursAnimations'

type EventailFormationsProps = {
  cardsInView: boolean
}

const EventailFormations: FC<EventailFormationsProps> = ({cardsInView}) => {
  const [rotateCard, setRotateCard] = useState<number>(0)

  return (
    <motion.div variants={eventailFormationsAppear} initial="initial" animate={cardsInView ? "animate": ""} className='relative h-[600px] top-16 z-10'>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={4} height={600} left={0} bottom={0} periode='Sur le TDA/H'>
        <div className={`h-[550px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5 text-lg`} style={{listStyleType: "square"}}>
            <li className='mb-2.5'><em>« Programme BARKLEY » : Groupe de guidance pour parents d&apos;enfant avec un diagnostic de TDA/H</em> - AFREE MONTPELLIER (2019)</li>
            <li className='mb-2.5'><em>Approches thérapeutiques auprès d&apos;enfants et d&apos;adolescents présentant un TDA/H</em> – AFREE MONTPELLIER (2017)</li>
            <li className='mb-2.5'><em>Limites, impulsivité, violence chez l&apos;enfant et l&apos;adulte</em> – PROTCC AVIGNON (2016)</li>
            <li><em>TDA/H</em> – PROTCC AVIGNON (2014)</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={3} height={550} left={5} bottom={-2} periode='Sur les TROUBLES DYS'>
        <div className={`h-[460px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5 text-lg`} style={{listStyleType: "square"}}>
            <li className='mb-2.5'><em>Les troubles visuo-spatiaux et visuo-constructifs chez l&apos;enfant</em> – AFREE MONTPELLIER (2017)</li>
            <li className='mb-2.5'><em>La dysgraphie chez l&apos;enfant et l&apos;adolescent : modèles théoriques et intervention</em> – AFREE MONTPELLIER (2016)</li>
            <li><em>LE TAC (TDC), diagnostic et prise en charge top-down pour les enfants et adolescents</em> – AFREE MONTPELLIER (2015)</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={2} height={500} bottom={-4} left={10} periode='Sur la MÉDITATION'>
        <div className={`h-[430px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <li className='mb-2.5'><em>Programme de méditation MBSR (Mindfulness-Based Stress Reduction)</em> – Brigitte QUIGNON, AVIGNON (octobre à novembre 2018)</li>
            <li><em>Psychologie positive, méditation, altruisme, une autre manière de soigner le corps et l&apos;esprit</em> – JOURNEES D&apos;ACCORDS AVIGNON (2016)</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={1} height={450} bottom={-6} left={15} periode='Sur les TROUBLES ANXIEUX'>
        <div className={`h-[380px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <li><em>Traitement des troubles anxieux chez les enfants et adolescents, bilan et approches prometteuses</em> – en visioconférence, PORTE-VOIX (2021)</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={0} height={400} left={20} bottom={-8} periode='Sur les personnes HPI'>
        <div className={`h-[330px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} items-center flex h-full text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <li><em>L&apos;enfant et l&apos;adolescent haut potentiel</em> – RESODYS MARSEILLE(2016)</li>
          </ul>
        </div>
      </Card>
    </motion.div>
  )
}

export default EventailFormations