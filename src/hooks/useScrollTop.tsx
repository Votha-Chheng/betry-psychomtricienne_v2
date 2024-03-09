import { RefObject, useEffect, useState } from "react"

export const useScrollY = ()=> {
  const [top, setTop] = useState<number>(0)
  
  useEffect(()=> {
    window.addEventListener('scroll',()=> setTop(window.scrollY))
    
    return ()=> window.removeEventListener('scroll',()=> setTop(window.scrollY))
  }, [])
  
  return top
}


export const useScrollEdFromElement = (ref: RefObject<HTMLDivElement>)=> {
  const [top, setTop] = useState<number>(0)

  const Y = useScrollY()

  useEffect(()=> {
    const copyRef = ref
    if(copyRef.current){
      window.addEventListener('scroll', ()=> setTop(Y - (copyRef.current?.getBoundingClientRect().top ?? 0)))

    }

    return ()=> window.removeEventListener('scroll',()=> setTop(Y - (copyRef.current?.getBoundingClientRect().top ?? 0)))
  }, [Y, ref])

  return top
}