import Image from 'next/image'
import React, { useContext } from 'react'
import Acerca from '../Acerca/Acerca'
import ShadowAcerca from '../Shadows/ShadowAcerca'
import { AppContext } from '@/Context/AppContext'
import {motion} from 'framer-motion'
import ShadowAcercaSm2 from '../Shadows/ShadowAcercaSm2'
import { useMediaQuery } from 'react-responsive';


function Hero({heroImage}) {

  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  
  const {traduccion} = useContext(AppContext)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  
const variantsp = isLarge ? {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
:
{
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.6,
      ease: "linear" // Add ease property for fluid animation
    } 
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "linear" // Add ease property for fluid animation
    } 
  },
};





  return (
    <div className='w-full h-full relative overflow-hidden'>
<ShadowAcerca/>
    <div className='w-full h-full lg:h-[1190px] flex flex-col  px-4 lg:px-14 max-w-[1444px] mx-auto min-w-sm gap-[54px]  '>
     
    <div className='w-full h-[73vh] md:h-[82vh] lg:h-full flex flex-col justify-end lg:justify-center items-center lg:items-start gap-[23px] '>
      <Image src='/assets/logoHero.png' alt="hero" width={1000} height={1000} className='hidden lg:flex w-[497px]' />
     
<motion.h2
  className={`w-full h-[150px] lg:h-[195px] text-center lg:text-start  text-white font-header ${heroImage == 2?"text-[47px]":"text-[60px]"} md:text-[68px] lg:text-7xl 2xl:text-8xl font-extrabold lg:font-bold leading-[70px] lg:leading-[87.55px] titulo2 `}
  initial="hidden"
  animate="visible"
  variants={variants}
  key={traduccion.hero.titulos[heroImage]}
>
  {traduccion.hero.titulos[heroImage]}
  <br/>
  {traduccion.hero.titulos2[heroImage]}
</motion.h2>
   
    <motion.p
  className='w-full md:w-[556px] text-white font-roboto text-[17px] text-center lg:text-start lg:text-xl font-semibold leading-[21px] lg:leading-[38.726px] px-4'
  initial="hidden"
  animate="visible"
  variants={variantsp}
  key={traduccion.hero.descripcion[heroImage]}
>
  {traduccion.hero.descripcion[heroImage]}
</motion.p>

<motion.div
  className='w-full lg:hidden flex flex-row justify-center items-center gap-3 mt-4'
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {
    traduccion.hero.titulos.map((element,index) => (
      <motion.div 
        key={element} 
        variants={childVariants}
        className={`w-[13px] h-[13px] rounded-full ${index != heroImage ? 'bg-[#042134]' : 'bg-[#55B0F0]'} border-[1px] border-[#55B0F0]`}
      />
    ))
  }
</motion.div>
    </div>
  
    <Acerca/>
 
    </div>
    </div>
  )
}

export default Hero