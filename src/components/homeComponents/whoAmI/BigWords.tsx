import { inter } from '@/fonts/inter'
import { useScrollEdFromElement } from '@/hooks/useScrollTop'
import React, { FC, RefObject, useEffect, useRef } from 'react'

const BigWords: FC = () => {

  const bigWordsRef1=useRef<HTMLDivElement>(null)
  const bigWordsRef2=useRef<HTMLDivElement>(null)
  const bigWordsRef3=useRef<HTMLDivElement>(null)
  const bigWordsRef4=useRef<HTMLDivElement>(null)
  const bigWordsRef5=useRef<HTMLDivElement>(null)
  const bigWordsRef6=useRef<HTMLDivElement>(null)
  const bigWordsRef7=useRef<HTMLDivElement>(null)
  const bigWordsRef8=useRef<HTMLDivElement>(null)

  const firstWordScrolled = useScrollEdFromElement(bigWordsRef1)
  const secondWordScrolled = useScrollEdFromElement(bigWordsRef2)
  const thirdWordScrolled = useScrollEdFromElement(bigWordsRef3)
  const fourthWordScrolled = useScrollEdFromElement(bigWordsRef4)
  const fifthWordScrolled = useScrollEdFromElement(bigWordsRef5)
  const sixthWordScrolled = useScrollEdFromElement(bigWordsRef6)
  const seventhWordScrolled = useScrollEdFromElement(bigWordsRef7)
  const eightWordScrolled = useScrollEdFromElement(bigWordsRef8)


  const getPercentage = (scrolledElement: number, left : boolean)=> {
    if(scrolledElement<0){
      return left ? -100 : 100

    } else if((scrolledElement>0) && (scrolledElement < 500)){
      return left? -((500-scrolledElement)/500)*100 : ((500 - scrolledElement)/500)*100

    } else if((scrolledElement >500)){
      return 0
    }
  }

  const words = [
    {
      word: "épanouissement",
      ref: bigWordsRef1,
      scrolled: firstWordScrolled
    },
    {
      word: "connaissance de soi",
      ref: bigWordsRef2,
      scrolled: secondWordScrolled
    },
    {
      word: "méditation",
      ref: bigWordsRef3,
      scrolled: thirdWordScrolled
    },
    {
      word: "relations aux autres",
      ref: bigWordsRef4,
      scrolled: fourthWordScrolled
    },
    {
      word: "équilibre",
      ref: bigWordsRef5,
      scrolled: fifthWordScrolled
    },
    {
      word: "gestion des émotions",
      ref: bigWordsRef6,
      scrolled: sixthWordScrolled
    },
    {
      word: "relaxation",
      ref: bigWordsRef7,
      scrolled: seventhWordScrolled
    },
    {
      word: "potentialité",
      ref: bigWordsRef8,
      scrolled: eightWordScrolled
    }
  ]

  return (
    <section className={`px-7 py-[450px] overflow-hidden`} >
      {
        words.map((element: {word: string, ref: RefObject<HTMLDivElement>, scrolled: number}, index: number)=> (
          <div 
            key={index}
            className={"flex justify-center mb-5 md:mb-12"}
            style={{transform:`translateX(${getPercentage(element.scrolled, index%2 === 0 ? true: false )}%)`}}
          >
          <div className='absolute -top-[100vh]' ref={element.ref}/>
          <span className={`${inter.className} inline-block bg-anti-flash-white p-4 text-xl sm:text-3xl md:text-5xl xl:text-8xl text-charcoal uppercase transition-transform`}>
            {element.word}
          </span>
        </div>
        ))
      }
    </section>
  )
}

export default BigWords