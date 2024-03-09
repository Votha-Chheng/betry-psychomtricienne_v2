import { inter } from '@/fonts/inter'
import { useScrollY } from '@/hooks/useScrollTop'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'

type WordTagProps = {
  word: string
  index: number
}

const WordTag: FC<WordTagProps> = ({word, index}) => {
  const [positionY, setPositionY] = useState<number>(0)

  const wordRef = useRef<HTMLDivElement>(null)
  const Y = useScrollY()

  useEffect(()=> {
    if(wordRef.current){
      setPositionY(wordRef.current.getBoundingClientRect().top)
    }
  }, [])


  const getPercentage = (scrollY: number, positionY: number, left : boolean)=> {
    let scrolledElement = scrollY-(positionY)

    if(scrolledElement<0){
      return left ? -100 : 100

    } else if((scrolledElement>0) && (scrolledElement < 500)){
      return left? -((500-scrolledElement)/500)*100 : ((500 - scrolledElement)/500)*100

    } else if((scrolledElement >500)){
      return 0
    }
    
    return -100
  }

  const translation = useMemo(()=> {
    return getPercentage(Y, positionY, index%2 === 0 ? true: false )
  }, [positionY, Y, index])
  
  return (
    <div  
      ref={wordRef}
      className={"flex justify-center mb-5 md:mb-12"}
      style={{transform:`translateX(${translation}%)`}}
    >
      <div className='absolute -top-[100vh]'/>
      <span className={`${inter.className} inline-block bg-anti-flash-white p-4 text-xl sm:text-3xl md:text-5xl xl:text-8xl text-charcoal uppercase transition-transform`}>
        {word}
      </span>
    </div>
  )
}

export default WordTag