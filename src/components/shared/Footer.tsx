import { oxygen } from '@/fonts/oxygen'
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { FaArrowCircleLeft, FaMapSigns } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { oswald } from '@/fonts/oswald';
import { InView } from 'react-intersection-observer';
import { useMediaQuery } from '@uidotdev/usehooks';

type FooterProps = {
  setFooterView: Dispatch<SetStateAction<boolean>>
  bgColor: string
}

const Footer: FC<FooterProps> = ({setFooterView, bgColor}) => {
  const [displayMap, setDisplayMap] = useState<boolean>(false)
  const [frameHeight, setFrameHeight] = useState<number>(0)

  const frameRef = useRef<HTMLUListElement>(null)

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)")
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1281px)")

  useEffect(()=> {
    if(frameRef.current){
      setFrameHeight(frameRef.current.clientHeight+5)
    }
  }, [])

  return (
    <footer className={`flex flex-col justify-between overflow-hidden transition-colors duration-300`}>
      <section className={`${bgColor === "bg-eggplant" ? "text-eggplant":"text-charcoal"} px-2.5 sm:px-12 py-12`}>
        <InView onChange={(inView, entry) => setFooterView(inView) }>
        <h4 className={`${oxygen.className} font-bold tracking-wider text-4xl md:text-7xl lg:text-9xl mb-5`}>Infos & contact</h4>
        <h5 className={`${oxygen.className} font-bold tracking-wider text-lg lg:text-2xl mb-7 `}>Pour tout renseignement complémentaire ou demande de devis, n&apos;hésitez pas à prendre contact.</h5>
        <div className='flex w-full justify-between'>
          <ul ref={frameRef} className={`${bgColor === "bg-eggplant" ? "border-eggplant":"border-charcoal"} px-5 min-w-full lg:min-w-[700px] border-eggplant border-2`} >
            <li className='flex gap-2 sm:gap-5 py-2.5 sm:py-5 items-center'>
              <FaMapSigns size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]' />
              {
                !isLargeDevice
                ?
                <Link
                  className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold min-w-[420px] hover:text-mountbatten-pink cursor-pointer"} 
                  href="https://www.google.com/maps/place/Espace+param%C3%A9dical+du+Devenson/@43.693808,4.8554087,17z/data=!3m1!4b1!4m6!3m5!1s0x12b5e2873ac41279:0x84ce336871ed8354!8m2!3d43.693808!4d4.8554087!16s%2Fg%2F11g6bw9gqh?entry=ttu"
                  target='_blank'
                >
                  Espace paramédical du Devenson <br/>Route de Maussane D17<br/>13890 Mouriès
                </Link>  
                :
                <p 
                  className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold lg:min-w-[420px] hover:text-mountbatten-pink cursor-pointer"} 
                  onClick={()=> setDisplayMap(prev => !prev)} 
                >
                  Espace paramédical du Devenson <br/>Route de Maussane D17<br/>13890 Mouriès
                </p>  

              }
              <FaArrowCircleLeft size={40} color='#745869' className={`${displayMap ? "rotate-180":"rotate-0"} xl:block hidden transition-transform duration-300 text-center cursor-pointer ml-12`} onClick={()=> setDisplayMap(prev=>!prev)} />
            </li>
            <li className='flex gap-2 sm:gap-5 py-2.5 sm:py-5 items-center'>
              <GiRotaryPhone  size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]'/>
              <Link href="tel:+33644851800" className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold"}>06 44 85 18 00</Link>  
            </li>
            <li className='flex gap-2 sm:gap-5  py-2.5 sm:py-5 items-center'>
              <MdAlternateEmail  size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]'/>
              <Link href="mailto:betry.estelle@gmail.com" className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold"}>Me contacter par e-mail : betry.estelle@gmail.com</Link>  
            </li>
            <li className='flex gap-2 sm:gap-5 py-2.5 sm:py-5 items-center'>
              <FaWheelchair  size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]'/>
              <span className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold"}>Cabinet accessible aux personnes à mobilité réduite (PMR)</span>  
            </li>
            <li className='flex gap-2 sm:gap-5 py-2.5 sm:py-5 items-center'>
              <FaFacebook size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]'/>
              <Link href="https://www.facebook.com/profile.php?id=100071951477898" target='_blank' className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold"}>Suivez mon actualité sur ma page.</Link>  
            </li>
            <li className='flex gap-2 sm:gap-5 py-2.5 sm:py-5 items-center'>
              <GoLaw size={isSmallDevice ? 20:40} color='#745869' className='min-w-[50px]'/>
              <Link href="/mentions-legales" className={oxygen.className + " tracking-wide text-sm lg:text-xl font-bold"}>Mentions légales</Link>  
            </li>
          </ul>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4851.865112696682!2d4.856557238622474!3d43.69108858066278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab1fec3575c9db61!2sEspace%20param%C3%A9dical%20du%20Devenson%20Alpilles%20Mouries%20Kinesitherapeute%2013!5e0!3m2!1sfr!2sfr!4v1619618065515!5m2!1sfr!2sfr" 
            width="600" 
            height={`${frameHeight}`}
            className={`${bgColor === "bg-eggplant" ? "border-eggplant" : "bg-charcoal"} border-2 transition-transform duration-300 hidden xl:block`} 
            style={{transform : `translateX(${displayMap ? "0":"125"}%)` }} 
            allowFullScreen={true} 
            loading="lazy"
          />
        </div>
        </InView>
      </section>
      <aside className={`${oswald.className} bg-eggplant py-3 text-white tracking-wide text-center`}>
        Site crée par Votha Chheng © Mars 2024
      </aside>
    </footer>
  )
}

export default Footer