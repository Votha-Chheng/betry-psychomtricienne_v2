import { inter } from '@/fonts/inter'
import { useScrollY } from '@/hooks/useScrollTop'
import { useMediaQuery, useWindowSize } from '@uidotdev/usehooks'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'

type WordTagProps = {
  word: string
  index: number
}

const WordTag: FC<WordTagProps> = ({word, index}) => {
  const [positionY, setPositionY] = useState<number>(0)
  const [screenHeight, setScreenHeight] = useState<number>(0)

  const wordRef = useRef<HTMLDivElement>(null)
  const Y = useScrollY()
  const {height} = useWindowSize()
  const isSmallDevice = useMediaQuery("only screen and (max-width:500px)")

  useEffect(()=> {
    if(wordRef.current){
      setPositionY(wordRef.current.getBoundingClientRect().top)
    }
  }, [])

  useEffect(()=> {
    if(height){
      isSmallDevice ? setScreenHeight(height) : setScreenHeight(height/2)
    }
  }, [height])

  const getPercentage = (scrollY: number, positionY: number, left : boolean)=> {
    let scrolledElement = scrollY-(positionY)

    if(scrolledElement<0){
      return left ? -100 : 100

    } else if((scrolledElement>0) && (scrolledElement < screenHeight)){
      return left? -((screenHeight-scrolledElement)/screenHeight)*100 : ((screenHeight - scrolledElement)/screenHeight)*100

    } else if((scrolledElement >screenHeight)){
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