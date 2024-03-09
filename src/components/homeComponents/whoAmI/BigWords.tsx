import React, { FC } from 'react'
import WordTag from './WordTag'

const BigWords: FC = () => {

  const words = ["épanouissement", "connaissance de soi", "méditation", "relations aux autres", "équilibre", "gestion des émotions", "relaxation", "potentialité" ]

  return (
    <section className={`px-7 py-[450px] overflow-hidden`} >
      {
        words.map((word: string, index: number)=> (
          <div key={index}>
            <WordTag index={index} word={word} />
          </div>
         ))
      }
    </section>
  )
}

export default BigWords