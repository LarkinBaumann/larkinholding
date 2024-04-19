import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'
import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Mapa() {

  const {traduccion} = useContext(AppContextSecurity)

  const { ref, inView } = useInView({
    triggerOnce: true, // Cambia a true si solo quieres que la animación se ejecute una vez
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
      transition={{ duration: 0.5 }}
      className='w-full h-full px-4 lg:px-14'
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='w-full h-[502px] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left rounded-[22px] border-[2px] border-[#1777BA] bg-[#07141C] gap-[15px] lg:px-8'
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='w-[90%] md:h-[100px] lg:w-[50%] xl:w-[60%] lg:h-[260px] flex flex-col z-10'
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='h-full font-header text-[22px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px] lg:leading-[43px]'
          >
            {traduccion.servicio.header}
            <br/>
            <span className='titulo5 '>
              {traduccion.servicio.accent}
            </span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='w-[90%] xl:w-[490px] hidden lg:flex flex-row justify-center font-paragraph text-[12px] md:text-[20px] lg:text-[18px] leading-[20px] md:leading-[34px] lg:leading-[30px]'
          >
            {traduccion.servicio.paragraph}
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className='w-[90%] lg:w-[40%] flex flex-row justify-center'
        >
          <Image src="/assetsSecurity/home/servicios/mapa2.png" alt="Mapa" width={1000} height={1000} className='w-[237px] lg:w-[406px] h-[229px] lg:h-[393px] animate-pulse' />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className='w-[90%] flex lg:hidden flex-row justify-center font-paragraph text-[12px] md:text-[20px] leading-[20px] md:leading-[34px]'
        >
          {traduccion.servicio.paragraph}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Mapa