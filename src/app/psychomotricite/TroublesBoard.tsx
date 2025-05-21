import { adultSelected, babySelected, childSelected, seniorSelected, startLines } from '@/animations/linesTroubles'
import { PiCornersOut } from "react-icons/pi";
import { useScrollY } from '@/hooks/useScrollTop'
import { Variants, motion } from 'framer-motion'
import React, { FC, useEffect, useMemo, useRef, useState, MouseEvent } from 'react'
import CaseTroubles from './CaseTroubles'
import { useWindowSize } from 'usehooks-ts';
import { useMediaQuery } from '@uidotdev/usehooks';

type TroublesBoardProps = {
  height: number
  articleBottom: number
  footerInView: boolean
}

const TroublesBoard: FC<TroublesBoardProps> = ({height, articleBottom, footerInView}) => {
  const [selectedPart, setSelectedPart] = useState<"baby"|"teen"|"adult"|"senior"|"">("")
  const [publicHover, setPublicHover] = useState<string>("")
  const [sectionToArticleY, setSectionToArticleY] = useState<number>(0)
  const [positionY, setPositionY] = useState<number>(0)
  const [boardWidth, setBoardWidth] = useState<number>(0)
  
  const boardRef = useRef<HTMLDivElement>(null)
  
  const Y = useScrollY()

  useEffect(()=> {
    if(boardRef.current){
      setPositionY(boardRef.current.getBoundingClientRect().top)
      setBoardWidth(boardRef.current.getBoundingClientRect().width)
      setSectionToArticleY(boardRef.current.offsetTop)
    }
  }, [positionY, boardWidth, setPositionY, setBoardWidth])
  
  const bottomToParent = useMemo(()=> {
    return Y-(-height-72 + articleBottom +32.5)
  }, [Y, height, articleBottom])


  const getPosition = (Y: number, positionY: number):"fixed"|"absolute"=> {
    if((Y<positionY) || (bottomToParent>0) ) return "absolute"
    else return "fixed"

  }

  const selectPublic = (event: MouseEvent<HTMLDivElement>)=> {
    let selected = event.currentTarget.id as "baby"|"teen"|"adult"|"senior"|""
    selectedPart === selected ? setSelectedPart("") : setSelectedPart(selected)
  }

  const getVariants = (selectedPart: "baby"|"teen"|"adult"|"senior"|""): Variants|undefined=> {
    switch(selectedPart){
      case "baby": return babySelected
      case "teen": return childSelected
      case "adult": return adultSelected
      case "senior": return seniorSelected
      case "": return startLines
      default: undefined
    }
  }

  return (
    <div ref={boardRef} className={`${footerInView ? "opacity-0":"opacity-100"} relative transition-opacity duration-300`} style={{height:`${height-72}px`}}>
      <div 
        className={`left-1/2 -translate-x-1/2 top-[72px] mx-auto border-8 border-anti-flash-white overflow-hidden`} 
        style={{
          position:`${getPosition(Y, positionY)}`, 
          height:`${height - 72}px`, 
          width:`${boardWidth}px`, 
          top:`${bottomToParent>0 ? (height*2.5 - sectionToArticleY - height+72)+"px":"72px"}`}} 
      >
        <motion.div 
          className='absolute w-2 bg-anti-flash-white z-20 top-0' 
          style={{height: `${height}px`}}
          variants={getVariants(selectedPart)}
          custom={boardWidth}
          animate="vertical"
        />
        <motion.div 
          className='absolute w-full h-2 bg-anti-flash-white z-20 left-0' 
          variants={getVariants(selectedPart)}
          custom={height}
          animate="horizontal"
        />
        <CaseTroubles
          title='Enfants en bas âge'
          boardWidth={boardWidth}
          height={height}
          setPublicHover={setPublicHover}
          variant={getVariants(selectedPart)}
          selectPublic={selectPublic}
          image="public-bebe.jpg"
          altImage="Enfant de maternelle qui découpe un une feuille avec des ciseaux"
          selectedPart={selectedPart}
          publicHover={publicHover}
          id="baby"
          bgColor='bg-yellow-500'
        >
          <div className='text-xl lg:text-2xl'>
            <p className={`font-medium pb-5`}>
              Pour les bébés et les enfants en bas âge, généralement, ce seront les pédiatres qui pourront, suivant les troubles consta&shy;tés, vous orienter vers une psychomo&shy;tricienne. Ces troubles concernent notamment :
            </p>
            <ul className='font-normal pl-8' style={{listStyleType:"square"}}>
              <li className='pb-2.5'>les troubles du tonus et du retard dans les acquisitions motrices (position assise, retournements dos-ventre, marche...)</li>
              <li className='pb-2.5'>des difficultés au niveau des interactions précoces</li>
              <li className='pb-2.5'>des pathologies neurologiques/génétiques</li>
              <li className='pb-2.5'>des handicaps entraînant un retard de développement psychomoteur</li>
            </ul> 
          </div>
          <PiCornersOut color="#C99B0E" size={40} style={{position:"absolute", bottom:"10px", right:"10px"}} className='animate-beating'/>
        </CaseTroubles>

        <CaseTroubles
          title='Enfants/Adolescents'
          boardWidth={boardWidth}
          height={height}
          setPublicHover={setPublicHover}
          variant={getVariants(selectedPart)}
          selectPublic={selectPublic}
          image="public-enfant-mikhail-nilov.jpg"
          altImage="Enfant de dos écrivant au tableau devant deux petites filles assises à une table d'école"
          selectedPart={selectedPart}
          publicHover={publicHover}
          id="teen"
          bgColor="bg-mauve"
        >
          <div className={`text-[17px] leading-[25px] xl:text-xl xl:leading-7 2xl:text-2xl 2xl:leading-[50px]}`}>
            <p className={`font-medium pb-2`}>
              Chez ce public, les indications provien&shy;nent souvent de l’école suite à des dif&shy;fi&shy;cul&shy;tés d’ap&shy;prentis&shy;sages, ou d’un pro&shy;fes&shy;sion&shy;nel de santé qui pointe un retard dans le développement des acqui&shy;sitions psycho&shy;motrices :
            </p>
            <ul className='font-normal pl-8 pb-2.5' style={{listStyleType:"square"}}>
              <li>Troubles des apprentissages comme le TDA/H ou la dyspraxie (appelé trouble développemental de la coordination)</li>
              <li>Haut potentiel intellectuel (HPI) ayant des conséquences sur l’investissement du corps, de l’écriture, de la gestion émotionnelle, etc.</li>
              <li>Troubles anxieux, difficultés à exprimer et gérer ses émotions</li>
              <li>Agitation motrice, difficultés de concentration et d&apos;attention</li>
              <li>Difficultés corporelles et motrices (équilibre, posture, maladresses), ou manque d’aisance dans la course, le sport, etc.</li>
              <li>Difficultés dans les gestes fins, difficultés d’écriture/graphisme, dysgraphie</li>
              <li>Difficultés de repérage dans le temps et d’organisation dans l’espace</li>
              <li>Repli sur soi, difficultés relationnelles ou dans les habiletés sociales</li>
              <li>Troubles des conduites alimentaires</li>
              <li>TSA (Trouble du Spectre Autistique), trisomie 21</li>
            </ul> 
            <PiCornersOut color='#674ea7' size={40} style={{position:"absolute", bottom:"10px", left:"10px"}} className='animate-beating' />
          </div>
        </CaseTroubles>

        <CaseTroubles
          title='Adultes'
          boardWidth={boardWidth}
          height={height}
          setPublicHover={setPublicHover}
          variant={getVariants(selectedPart)}
          selectPublic={selectPublic}
          image="public-adulte.jpg"
          altImage="Homme adulte qui parle devant un auditoire"
          selectedPart={selectedPart}
          publicHover={publicHover}
          id="adult"
          bgColor="bg-dartmouth-green"
        >
          <div className='text-xl lg:text-2xl'>
            <p className={`font-medium pb-5`}>
              Une consultation chez un médecin géné&shy;raliste pour&shy;ra vous orien&shy;ter vers une psy&shy;cho&shy;mo&shy;tri&shy;cien&shy;ne pour les trou&shy;bles suivants&nbsp;:
            </p>
            <ul className='font-normal pl-8 pb-5' style={{listStyleType:"square"}}>
              <li className='pb-2.5'>Anxiété</li>
              <li className='pb-2.5'>Stress</li>
              <li className='pb-2.5'>Douleurs chroniques</li>
              <li className='pb-2.5'>TDA/H</li>
              <li className='pb-2.5'>Difficulté d’organisation et de gestion du temps</li>
              <li className='pb-2.5'>Dépression</li>
            </ul> 
          </div>
          <PiCornersOut color='#12692f' size={40} style={{position:"absolute", top:`${20}px`, right:"10px"}} className='animate-beating' />
        </CaseTroubles>

        <CaseTroubles
          title='Seniors'
          boardWidth={boardWidth}
          height={height}
          setPublicHover={setPublicHover}
          variant={getVariants(selectedPart)}
          selectPublic={selectPublic}
          image="public-senior.jpg"
          altImage="Deux personnes retraités assises sur un banc de dos conemple le paysage montagneux."
          selectedPart={selectedPart}
          publicHover={publicHover}
          id="senior"
          bgColor="bg-charcoal"
        >
          <div className='text-xl lg:text-2xl'>
            <p className={`font-medium pb-5`}>
              Des soins et des techniques liés à la psycho&shy;motricité peuvent aider les per&shy;son&shy;nes â&shy;gées souf&shy;frant des trou&shy;bles sui&shy;vants :
            </p>
            <ul className='font-normal pl-8 pb-5' style={{listStyleType:"square"}}>
              <li className='pb-2.5'>Perte d’autonomie</li>
              <li className='pb-2.5'>Parkinson</li>
              <li className='pb-2.5'>DTA (démence de type alzheimer)</li>
              <li className='pb-2.5'>Perte d’équilibre</li>
            </ul> 
          </div>
          <PiCornersOut color='#274060' size={40} style={{position:"absolute", top:`${20}px`, left:"10px"}} className='animate-beating' />
        </CaseTroubles>
      </div>
    </div>
  )
}

export default TroublesBoard