import Image from 'next/image'
import React, { useContext } from 'react'
import Acerca from '../Acerca/Acerca'
import ShadowAcerca from '../Shadows/ShadowAcerca'
import { AppContext } from '@/Context/AppContext'

function Hero({heroImage}) {
  
  const {traduccion} = useContext(AppContext)
  return (
    <div className='w-full h-full relative overflow-hidden'>
<ShadowAcerca/>
    <div className='w-full h-[1190px] flex flex-col px-14 max-w-[1444px] mx-auto min-w-sm  '>
     
    <div className='w-full h-full flex flex-col justify-center gap-[23px]'>
      <Image src='/assets/logoHero.png' alt="hero" width={1000} height={1000} className='w-[497px]' />
      <h2 className={`${heroImage != 2 ? "w-[656px]": "w-[356px]"} h-[195px] text-white font-roboto text-8xl font-bold leading-[87.55px] titulo2`}>
        {traduccion.hero.titulos[heroImage]}
      </h2>
      <p className='w-[556px] text-white font-roboto text-xl font-semibold leading-[38.726px]'>
       {traduccion.hero.descripcion[heroImage]}
      </p>  
    </div>
  
    <Acerca/>
 
    </div>
    </div>
  )
}

export default Hero