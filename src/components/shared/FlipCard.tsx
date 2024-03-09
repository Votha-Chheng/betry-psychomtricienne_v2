import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import FrontFlip from './FrontFlip'
import BackFlip from './BackFlip'

type FlipcardProps = {
  frontChildren: ReactNode
  backChildren: ReactNode
  height: number
  width: number
  rotate: boolean
  setRotate: Dispatch<SetStateAction<boolean>>
}

const FlipCard: FC<FlipcardProps> = ({frontChildren, backChildren, height, width, rotate, setRotate}) => {
  return (
    <div className='relative rounded-md overflow-hidden' style={{height: `${height}px`, width:`${width}px`}}>
      <FrontFlip rotate={rotate} setRotate={setRotate} height={height} width={width}>
        {frontChildren}
      </FrontFlip>
      <BackFlip rotate={rotate} setRotate={setRotate} height={height} width={width}>
        {backChildren}
      </BackFlip>
    </div>
  )
}

export default FlipCard
