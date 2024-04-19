import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'
import Image from 'next/image'
import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

function Hero() {
  const {traduccion} = useContext(AppContextSecurity)

  const isLarge = useMediaQuery({ query: "(min-width: 1023px)" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.6,
        ease: "linear"
      } 
    },
  };
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "linear"
      } 
    },
  };
  return (
    <motion.div
      className='text-white w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-[55px] lg:gap-[0px] relative'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <Image src="/assetsSecurity/acerca/hero/heroShadow.svg" width={1000} height={1000} className='w-full h-full absolute top-[80px] md:top-[170px] lg:top-[50px] lg:-right-[250px] ' alt='fondo acerca'/>
      <motion.div className='w-full flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-8' variants={childVariants}>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
          {traduccion.heroAcerca.titulo1}
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px]  font-header font-black leading-[42px] md:leading-[81px] tituloAcerca1'>
        {traduccion.heroAcerca.accent1}
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
        {traduccion.heroAcerca.titulo2}
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]  tituloAcerca2'>
        {traduccion.heroAcerca.accent2}
        </h2>
      </motion.div>
      <motion.div className='lg:w-full z-10' variants={childVariants}>
        <Image src="/assetsSecurity/acerca/hero/hero2.png" width={1000} height={1000} quality={100} alt="Hero Acerca" className='w-[295px] lg:w-[400px] xl:w-[500px] h-[295px] lg:h-[400px] xl:h-[500px] ' />
      </motion.div>
    </motion.div>
  )
}

export default Hero