import { oswald } from '@/fonts/oswald'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'
import TroubleCaseSmall from './TroubleCaseSmall'

const TroublesBoardSmall: FC = () => {
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(containerRef.current){
      setContainerWidth(containerRef.current.clientWidth)
    }
  }, [])

  useEffect(()=> {
    if(textRef.current){
      setContainerHeight(textRef.current.clientHeight)
    }
  }, [])

  return (
    <div className='flex flex-col items-center gap-12 px-2 pb-24 w-full overflow-hidden'>
      <TroubleCaseSmall image='public-bebe.jpg' alt='Enfant de maternelle qui découpe un une feuille avec des ciseaux' title='Chez les enfants en bas âge' bgColorTitle='bg-yellow-600'>
        <p className={`${oswald.className} text-charcoal text-lg sm:text-xl tracking-wide font-medium pb-5`}>
          Pour les bébés et les enfants en bas âge, généralement, ce seront les pédiatres qui pourront, suivant les troubles consta&shy;tés, vous orienter vers une psychomo&shy;tricienne. Ces troubles concernent notamment :
        </p>
        <ul className={`${oswald.className} text-charcoal tracking-wide font-normal text-lg sm:text-xl pl-8 ml-8'`} style={{listStyleType:"square"}}>
          <li className='pb-2.5'>les troubles du tonus et du retard dans les acquisitions motrices (position assise, retournements dos-ventre, marche...)</li>
          <li className='pb-2.5'>des difficultés au niveau des interactions précoces</li>
          <li className='pb-2.5'>des pathologies neurologiques/génétiques</li>
          <li className='pb-2.5'>des handicaps entraînant un retard de développement psychomoteur</li>
        </ul>
      </TroubleCaseSmall>

      <TroubleCaseSmall image='public-enfant-mikhail-nilov.jpg' alt="Enfant de dos écrivant au tableau devant deux petites filles assises à une table d'école" title='Chez les enfants/adolescents' bgColorTitle='bg-mauve'>
        <p className={`${oswald.className} text-charcoal text-lg sm:text-xl tracking-wide font-medium pb-5`}>
          Chez ce public, les indications provien&shy;nent souvent de l’école suite à des dif&shy;fi&shy;cul&shy;tés d’ap&shy;prentis&shy;sages, ou d’un pro&shy;fes&shy;sion&shy;nel de santé qui pointe un retard dans le développement des acqui&shy;sitions psycho&shy;motrices :
        </p>
        <ul className={`${oswald.className} text-charcoal tracking-wide font-normal text-lg sm:text-xl pl-8 ml-8'`} style={{listStyleType:"square"}}>
          <li className='pb-2.5'>Troubles des apprentissages comme le TDA/H ou la dyspraxie (appelé trouble développemental de la coordination)</li>
          <li className='pb-2.5'>Haut potentiel intellectuel (HPI) ayant des conséquences sur l’investissement du corps, de l&apos;écriture, de la gestion émotionnelle, etc.</li>
          <li className='pb-2.5'>Troubles anxieux, difficultés à exprimer et gérer ses émotions</li>
          <li className='pb-2.5'>Agitation motrice, difficultés de concentration et d&apos;attention</li>
          <li className='pb-2.5'>Difficultés corporelles et motrices (équilibre, posture, maladresses), ou manque d&apos;aisance dans la course, le sport, etc.</li>
          <li className='pb-2.5'>Difficultés dans les gestes fins, difficultés d&apos;écriture/graphisme, dysgraphie</li>
          <li className='pb-2.5'>Difficultés de repérage dans le temps et d&apos;organisation dans l’espace</li>
          <li className='pb-2.5'>Repli sur soi, difficultés relationnelles ou dans les habiletés sociales</li>
          <li className='pb-2.5'>Troubles des conduites alimentaires</li>
          <li className='pb-2.5'>TSA (Trouble du Spectre Autistique), trisomie 21</li>
        </ul> 
      </TroubleCaseSmall>

      <TroubleCaseSmall image='public-adulte.jpg' alt="Enfant de dos écrivant au tableau devant deux petites filles assises à une table d'école" title='Chez les adultes' bgColorTitle='bg-dartmouth-green'>
        <p className={`${oswald.className} text-charcoal text-lg sm:text-xl tracking-wide font-medium pb-5`}>
          Une consultation chez un médecin géné&shy;raliste pour&shy;ra vous orien&shy;ter vers une psy&shy;cho&shy;mo&shy;tri&shy;cien&shy;ne pour les trou&shy;bles suivants&nbsp;:
        </p>
        <ul className={`${oswald.className} text-charcoal tracking-wide font-normal text-lg sm:text-xl pl-8 ml-8'`} style={{listStyleType:"square"}}>
        <li className='pb-2.5'>Anxiété</li>
        <li className='pb-2.5'>Stress</li>
        <li className='pb-2.5'>Douleurs chroniques</li>
        <li className='pb-2.5'>TDA/H</li>
        <li className='pb-2.5'>Difficulté d’organisation et de gestion du temps</li>
        <li className='pb-2.5'>Dépression</li>
        </ul> 
      </TroubleCaseSmall>

      <TroubleCaseSmall image='public-senior.jpg' alt="Enfant de dos écrivant au tableau devant deux petites filles assises à une table d'école" title='Chez les seniors' bgColorTitle='bg-charcoal'>
        <p className={`${oswald.className} text-charcoal text-lg sm:text-xl tracking-wide font-medium pb-5`}>
          Des soins et des techniques liés à la psycho&shy;motricité peuvent aider les per&shy;son&shy;nes â&shy;gées souf&shy;frant des trou&shy;bles sui&shy;vants :
        </p>
        <ul className={`${oswald.className} text-charcoal tracking-wide font-normal text-lg sm:text-xl pl-8 ml-8'`} style={{listStyleType:"square"}}>
          <li className='pb-2.5'>Perte d’autonomie</li>
          <li className='pb-2.5'>Parkinson</li>
          <li className='pb-2.5'>DTA (démence de type alzheimer)</li>
          <li className='pb-2.5'>Perte d’équilibre</li>
        </ul> 
      </TroubleCaseSmall>
    </div>
  )
}

export default TroublesBoardSmall