import { oswald } from '@/fonts/oswald'
import React, { ReactNode } from 'react'

const BackFlipChild: ReactNode = 
  <div className={`${oswald.className} p-5 tracking-wide text-lg text-charcoal`}>
    <p className='pb-2 font-medium'>
      Pour l&apos;enfant, dans le cadre : 
    </p>
    <ul style={{listStyleType:'square'}} className='pl-5'>
      <li className="mb-0 xl:mb-2.5">d&apos;un bilan psychomoteur</li>
      <li className="mb-0 xl:mb-2.5">d&apos;un dépistage des troubles du spectre autistique</li>
      <li className="mb-0 xl:mb-2.5">des troubles graphomoteurs</li>
      <li className="mb-0 xl:mb-2.5">des troubles de la concentration et TDA/H</li>
      <li className="mb-0 xl:mb-2.5">de troubles de la coordination, maladresse et dyspraxie</li>
      <li className="mb-0 xl:mb-2.5">et d&apos;autres troubles liés au développement psychomoteur dans l&apos;enfance...</li>
    </ul>
  </div>
  


export default BackFlipChild
