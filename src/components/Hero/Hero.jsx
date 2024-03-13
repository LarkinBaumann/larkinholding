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
    <div className='w-full h-[1190px] flex flex-col px-14 max-w-[1444px] mx-auto min-w-sm  '>
     
    <div className='w-full h-full flex flex-col justify-center gap-[23px]'>
      <Image src='/assets/logoHero.png' alt="hero" width={1000} height={1000} className='w-[497px]' />
     
<motion.h2
  className={`${heroImage != 2 ? "w-[656px]": "w-[356px]"} h-[195px] text-white font-roboto text-8xl font-bold leading-[87.55px] titulo2`}
  initial="hidden"
  animate="visible"
  variants={variants}
  key={traduccion.hero.titulos[heroImage]}
>
  {traduccion.hero.titulos[heroImage]}
</motion.h2>
      {/* <h2 className={`${heroImage != 2 ? "w-[656px]": "w-[356px]"} h-[195px] text-white font-roboto text-8xl font-bold leading-[87.55px] titulo2`}>
  <Typewriter
     options={{
      strings: [text],
      autoStart: true,
      loop: true,
      delay: delay,
    }}
  />
</h2> */}
    <motion.p
  className='w-[556px] text-white font-roboto text-xl font-semibold leading-[38.726px]'
  initial="hidden"
  animate="visible"
  variants={variantsp}
  key={traduccion.hero.descripcion[heroImage]}
>
  {traduccion.hero.descripcion[heroImage]}
</motion.p>
    </div>
  
    <Acerca/>
 
    </div>
    </div>
  )
}

export default Hero