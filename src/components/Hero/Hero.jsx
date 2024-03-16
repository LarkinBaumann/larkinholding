import Image from 'next/image'
import React, { useContext } from 'react'
import Acerca from '../Acerca/Acerca'
import ShadowAcerca from '../Shadows/ShadowAcerca'
import { AppContext } from '@/Context/AppContext'
import {motion} from 'framer-motion'

function Hero({heroImage}) {
  
  const {traduccion} = useContext(AppContext)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  
const variantsp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 3 } },
};

  return (
    <div className='w-full h-full relative overflow-hidden'>
<ShadowAcerca/>
    <div className='w-full h-full lg:h-[1190px] flex flex-col  px-4 lg:px-14 max-w-[1444px] mx-auto min-w-sm gap-[54px]  '>
     
    <div className='w-full h-[78vh] lg:h-full flex flex-col justify-end lg:justify-center items-center lg:items-start gap-[23px] '>
      <Image src='/assets/logoHero.png' alt="hero" width={1000} height={1000} className='hidden lg:flex w-[497px]' />
     {
      console.log(heroImage)
}
<motion.h2
  className={`${heroImage == 1 ? "w-[280px] lg:w-[656px] text-[68px] lg:text-8xl": heroImage == 2?" w-[500px] lg:w-[656px] text-[60px] lg:text-8xl leading-[80.55px]" : "w-[280px] lg:w-[356px]"} h-[150px] text-center lg:text-start lg:h-[195px] text-white font-header text-[68px] lg:text-8xl font-extrabold lg:font-bold leading-[70px] lg:leading-[87.55px] titulo2 `}
  initial="hidden"
  animate="visible"
  variants={variants}
  key={traduccion.hero.titulos[heroImage]}
>
  {traduccion.hero.titulos[heroImage]}
</motion.h2>
   
    <motion.p
  className='w-full lg:w-[556px] text-white font-roboto text-[17px] text-center lg:text-start lg:text-xl font-semibold leading-[21px] lg:leading-[38.726px] px-4'
  initial="hidden"
  animate="visible"
  variants={variantsp}
  key={traduccion.hero.descripcion[heroImage]}
>
  {traduccion.hero.descripcion[heroImage]}
</motion.p>

<div className='w-full lg:hidden flex flex-row justify-center items-center gap-3 mt-4'>
  
  
  {
    traduccion.hero.titulos.map((element,index) => (
      
      <div key={element} className={`w-[13px] h-[13px] rounded-full ${index != heroImage ? 'bg-[#042134]' : 'bg-[#55B0F0]'} border-[1px] border-[#55B0F0]`}/>

     ) )
}
</div>
    </div>
  
    <Acerca/>
 
    </div>
    </div>
  )
}

export default Hero