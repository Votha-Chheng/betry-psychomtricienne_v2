import React, { FC, useState } from 'react'
import Card from './Card'
import { TbCertificate } from "react-icons/tb"
import { oswald } from '@/fonts/oswald'
import { motion } from 'framer-motion'
import { eventailParcoursAppear } from '@/animations/parcoursAnimations'

type EventailParcoursProps = {
  cardsInView: boolean
}

const EventailParcours: FC<EventailParcoursProps> = ({cardsInView}) => {
  const [rotateCard, setRotateCard] = useState<number>(0)

  return (
    <motion.div variants={eventailParcoursAppear} initial="initial" animate={cardsInView ? "animate":""} className='relative h-[600px] top-16 z-10'>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={4} height={600} left={0} bottom={0} periode='Juin 2010'>
        <div className={`h-[550px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <p className={`${oswald.className} tracking-wide text-charcoal font-medium pt-5`}>
            Diplôme d&apos;Etat de psychomotricité à l&apos;IFP (Institut de Formation des Psychomotri&shy;ciens) R. Leclercq à LOOS (59)
          </p>
          <div className='flex justify-center mt-7'>
            <TbCertificate size={100} color='#274060' />
          </div>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={3} height={550} left={5} bottom={-2} periode='Janvier 2012 - Juillet 2012'>
        <div className={`h-[460px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5 text-lg`} style={{listStyleType: "square"}}>
            <span className='-translate-x-5 inline-block mb-2.5'>CMPP de la Roquette, ARLES (13)</span>
            <li className='mb-2.5'>Thérapie individuelle et de groupe auprès d&apos;enfants de 5 à 11 ans</li>
            <li>Participation aux synthèses de l&apos;équipe pluridisciplinaire</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={2} height={500} bottom={-4} left={10} periode='Août 2012 - Juillet 2013'>
        <div className={`h-[430px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <span className='-translate-x-5 inline-block mb-2.5'><b>Centre Hospitalier d&apos;ARLES (13), <em>service ESA (« Equipe Spécialisée Alzheimer »)</em></b></span>
            <li className='mb-2.5'>Participation à la création du service ESA</li>
            <li>Prises en soins à domicile, en tenant compte de l&apos;environnement et de l&apos;entou­rage du patient</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={1} height={450} bottom={-6} left={15} periode='Septembre 2014 - Décembre 2015'>
        <div className={`h-[380px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <span className='-translate-x-5 inline-block mb-2.5'><b>EHPAD et FAM Résidence l&apos;Oustalet à PLAN D&apos;ORGON (13)</b></span>
            <li className='mb-2.5'>Bilans et suivis de personnes âgées</li>
            <li>Participation à la création du PASA (Pôle d&apos;Activité et de Soins Adaptés), repas thérapeutique, atelier équilibre, balnéothérapie, ateliers prévention des chutes, toucher thérapeutique</li>
          </ul>
        </div>
      </Card>
      <Card setRotateCard={setRotateCard} rotateCard={rotateCard} position={0} height={400} left={20} bottom={-8} periode='Depuis Mars 2015'>
        <div className={`h-[330px] rounded-lg border-2 border-mountbatten-pink p-2.5 mt-2.5`}>
          <ul className={`${oswald.className} text-charcoal tracking-wide pl-5`} style={{listStyleType: "square"}}>
            <span className='-translate-x-5 inline-block mb-2.5'><b>Exercice en cabinet libéral à FONTVIEILLE, MAUSSANE, puis MOURIÈS (13)</b></span>
            <li className='mb-2.5'>Bilans psychomoteurs et suivis d&apos;enfants, adolescents avec troubles des apprentissages (dyspraxie, troubles de l&apos;écriture, troubles VS et VC), TDA/H, HPI.</li>
            <li className='mb-2.5'>Suivis de personnes âgées Parkinson</li>
            <li>Collaboration avec les acteurs médicaux, sociaux et scolaires</li>
          </ul>
        </div>
      </Card>
    </motion.div>
  )
}

export default EventailParcours