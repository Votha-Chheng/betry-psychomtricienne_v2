import { oswald } from '@/fonts/oswald'
import { oxygen } from '@/fonts/oxygen'
import { Variants, color, motion } from 'framer-motion'
import Image from 'next/image'
import React, { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'

type CaseTroublesProps = {
  title:string
  boardWidth: number
  height: number
  setPublicHover: Dispatch<SetStateAction<string>>
  variant:Variants|undefined
  selectPublic: (event: any)=> void
  image: string
  altImage: string
  selectedPart: "baby"|"teen"|"adult"|"senior"|""
  publicHover: string
  id: string
  children: ReactNode
  bgColor:string
}

const CaseTroubles: FC<CaseTroublesProps> = ({boardWidth, height, setPublicHover, variant, selectPublic, image, altImage, selectedPart, publicHover, id, children, title, bgColor}) => {
  const [heightBabyTitle, setHeightBabyTitle] = useState<number>(0)

  const titleRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=> {
    if(titleRef.current){
      setHeightBabyTitle(titleRef.current.getBoundingClientRect().width)
    }
  }, [setHeightBabyTitle])

  const getColor = (selected: string): string=> {
    switch(selected){
      case "baby": return "#CF8807"
      case "teen": return "#674ea7"
      case "adult": return "#12692f"
      case "senior": return "#274060"
      default : return "#ffffff"
    }
  }

  return (
    <motion.div 
      id={id}
      style={{width:`${boardWidth*0.5}px`, height:`${(((height-70)*0.5)-8)}px`, originX:0.5, originY:0.5}}
      className={`absolute overflow-hidden cursor-pointer bg-french-gray`}
      onClick={(event)=> selectPublic(event)}
      variants={variant}
      custom={{width: boardWidth, height}}
      animate={id}
      onMouseEnter={()=> setPublicHover(id)}
      onMouseLeave={()=> setPublicHover("")}
    >
      <Image 
        src={`/images/${image}`} 
        alt={altImage} 
        style={{objectFit:"cover"}} 
        className={`${selectedPart === id && selectedPart!=="" ? "opacity-20": selectedPart !==id && selectedPart !=="" ? "opacity-0" : "opacity-100"}`} 
        fill
      />
      <div 
        className={`${bgColor} absolute w-full h-full z-20 transition-opacity duration-200 flex justify-center items-center`} 
        style={{opacity:`${selectedPart ===id ? "0": publicHover === id? "0.5":"0.75"}`}}
      />
      {
        selectedPart === "baby" && id !== "baby" &&  
        <h3 
          className={`
            ${oswald.className} 
            text-4xl
            ${id==="teen" ? "rotate-180":"rotate-0"} 
            w-full h-full
            text-black 
            opacity-100
            flex justify-center items-center 
          `} 
          style={{writingMode:`${id==="teen" ? "vertical-lr":"inherit"}` , transformOrigin:"center center"}}>
          {title}
        </h3> 
      }
      {
        selectedPart === "teen" && id !== "teen" &&  
        <h3 
          className={`
            ${oswald.className} 
            text-4xl
            w-full h-full
            text-black 
            opacity-100
            flex justify-center items-center 
          `} 
          style={{writingMode:`${id==="baby" ? "vertical-lr":"inherit"}` , transformOrigin:"center center"}}>
          {title}
        </h3> 
      }
      {
        selectedPart === "adult" && id !== "adult" &&  
        <h3 
          className={`
            ${oswald.className} 
            ${id==="teen" ? "text-xl":"text-4xl"} 
            ${id==="teen"||id==="senior" ? "rotate-180":"rotate-0"}
            w-full h-full
            text-black 
            opacity-100
            flex justify-center items-center 
          `} 
          style={{writingMode:`${id==="senior"|| id==="teen" ? "vertical-rl":"inherit"}` , transformOrigin:"center center"}}>
          {title}
        </h3> 
      }
      {
        selectedPart === "senior" && id !== "senior" &&  
        <h3 
          className={`
            ${oswald.className} 
            ${id==="baby" ? "text-2xl":"text-4xl"} 
            ${id==="senior" ? "rotate-180":"rotate-0"}
            w-full h-full
            text-black 
            opacity-100
            flex justify-center items-center 
          `} 
          style={{writingMode:`${id==="baby"|| id==="adult" ? "vertical-rl":"inherit"}` , transformOrigin:"center center"}}>
          {title}
        </h3> 
      }

      <h3 
        className={`
          absolute
          ${selectedPart !=="" ? "opacity-0":"opacity-100"}
          ${selectedPart ===id ? "pl-5":"pl-0"}
          ${oxygen.className} 
          text-anti-flash-white
          top-1/2 -translate-y-1/2
          w-full
          text-4xl font-bold  
          tracking-wide
          absolute 
          text-center 
          z-30 
          py-8 
          transition-all duration-200 
          border-t-2 border-b-2
        `} 
      >
        {title}
      </h3>
      <h3 
        ref={titleRef}
        style={{writingMode: `vertical-lr`, color:getColor(selectedPart)}}
        className={`
          ${id === "teen" || id === "senior" ? "rotate-180":"rotate-0"} 
          ${selectedPart ===id ? "translate-x-0 opacity-100":"-translate-x-full opacity-0"}
          pl-5
          ${oxygen.className} 
          ${selectedPart === "teen" || selectedPart === "senior" ? "right-0":"right-auto"}
          h-full
          text-4xl font-bold  
          tracking-wide
          absolute 
          text-center 
          z-30 
          py-8 
          transition-all duration-200 
        `} 
      >
        {title}
      </h3>

      <div 
        className={`${oswald.className} flex items-center tracking-wide leading-8 h-full text-charcoal text-2xl p-8 pt-0 w-full z-40 absolute`} 
        style={{width:`${(boardWidth*0.85)-heightBabyTitle}px`, marginLeft:`${selectedPart === "teen" || selectedPart === "senior"? "0" : heightBabyTitle}px`, opacity:`${selectedPart === id ? "1":"0"}`}}
      >
        {children}
      </div>
    </motion.div>
  )
}



export default CaseTroubles