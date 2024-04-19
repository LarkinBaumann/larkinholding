import Button from '@/componentsSecurity/Button'
import Image from 'next/image'
import React, { useContext } from 'react'
import ShadowTop from './Shadows/ShadowTop'
import ShadowRight from './Shadows/ShadowRight'
import ShadowLeft from './Shadows/ShadowLeft'
import { useMediaQuery } from 'react-responsive'
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'
import { motion } from 'framer-motion';


function Hero() {
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const {traduccion} = useContext(AppContextSecurity)
  // Definir las variantes de animación
const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};


  return (
    <div className='w-full h-screen relative z-10'>
      <ShadowTop/>
      <ShadowRight/>
      <ShadowLeft/>
        <Image src={"/assetsSecurity/servicios/hero.png" } layout='fill' objectFit='cover' alt="Hero Servicios" quality={100}
        className='w-full h-full lg:hidden object-cover absolute -z-20'
        />
        <Image src={"/assetsSecurity/servicios/heroLg.png" } layout='fill' objectFit='cover' alt="Hero Servicios" quality={100}
        className='hidden lg:block w-full h-full object-cover absolute -z-20'
        />
        <div
        className='w-full h-full absolute bg-black/50'
        />
        <div className='w-full h-full flex flex-col justify-center items-center lg:items-start px-8 md:px-32 lg:px-10 text-white gap-[13px] lg:gap-4 '>
        <motion.h2 className='text-[35px] md:text-[60px] lg:text-[66px] font-header text-center lg:text-left leading-[39px] md:leading-[75px] font-extrabold z-10 lg:w-[708px] lg:mt-[100px]'
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {traduccion.heroServicios.titulo} <span className='tituloAcerca1 '>{traduccion.heroServicios.accent}</span> {traduccion.heroServicios.aux} <span className='tituloAcerca2'>{traduccion.heroServicios.accent2}</span>
        </motion.h2>
       {/*  <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className='z-20 '
        >
          <Button
            text={traduccion.heroServicios.button}
          />
        </motion.div> */}
        </div>

    </div>
  )
}

export default Hero