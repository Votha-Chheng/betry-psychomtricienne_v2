import { oswald } from '@/fonts/oswald'
import React, { ReactNode } from 'react'

const BackFlipAdult: ReactNode = 
  <div className={`${oswald.className} px-5 pt-5 text-lg text-charcoal`}>
    <p className='pb-2 font-medium'>
      Pour l&apos;adulte, dans le cadre : 
    </p>
    <ul className='pl-5 pb-5' style={{listStyleType:"square"}}>
      <li className="pb-0 xl:pb-2">de la gestion du stress</li>
      <li className="pb-0 xl:pb-2">de troubles psychosomatiques</li>
      <li className="pb-0 xl:pb-2">de troubles tonico-émotionnels (tics, bégaiement)</li>
      <li className="pb-0 xl:pb-2">de symptômes anxio-dépressifs</li>
      <li className="pb-0 xl:pb-2">d&apos;un trouble du comportement alimentaire</li>
      <li className="pb-0 xl:pb-2">de difficultés émotionnelles et relationnelles</li>
      <li className="pb-0 xl:pb-2">et d&apos;autres troubles psycho-émotionnelles de l&apos;âge adulte...</li>
    </ul>
  </div>


export default BackFlipAdult