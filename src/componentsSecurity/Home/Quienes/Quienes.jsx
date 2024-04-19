import React, { useContext } from "react";
import Button from "../../Button";
import Image from "next/image";
import ShadowQuienes from "./Shadows/ShadowQuienes";
import ShadowTop from "./Shadows/ShadowTop";
import ShadowTopLg from "./Shadows/ShadowTopLg";
import ShadowQuienesLg from "./Shadows/ShadowQuienesLg";
import { AppContextSecurity } from "@/ContextSecurity/AppContextSecurity";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";


function Quienes() {

  const {traduccion} = useContext(AppContextSecurity)

  const { ref, inView } = useInView({
    triggerOnce: true, // Cambia a true si solo quieres que la animación se ejecute una vez
  });

  
  return (
    <div className="w-full h-[540px] lg:h-screen flex flex-col lg:flex-row-reverse justify-center items-center text-center lg:text-right text-white gap-[10px] px-4  relative"
    ref={ref}
    >
      <ShadowTop/>
      <ShadowTopLg/>
      <div
        className='w-full h-full absolute bg-black/60 z-10'
        />

      <div className="w-full h-full flex flex-col justify-between absolute ">
        <div className="w-full h-full 2xl:h-[1400px] z-0">
          <Image
            src="/assetsSecurity/home/quienes/escoltas2.png"
            width={2000}
            height={2000}
            alt="Escoltas"
            className="-z-10 w-full h-full object-cover md:object-top lg:object-cover"
          />
        </div>
      
      </div>
      <div className="w-full h-full absolute flex flex-col justify-center items-center">
        <div className="z-0">
      <ShadowQuienesLg/>
        </div>
      </div>
      

      <motion.div 
      
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
      transition={{ duration: 2 }}
      className="w-full h-full z-20 flex flex-col justify-center items-center px-4 md:px-8 "
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="lg:w-[377px] font-header text-[40px] lg:text-[89px] font-extrabold lg:leading-[92px] z-10"
      >
        {traduccion.quienesInicio.header} <span className="titulo4">{traduccion.quienesInicio.accent} </span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="lg:w-[400px] text-[13px] md:text-[20px] lg:text-[18px] leading-[22px] md:leading-[34px] lg:leading-[30px]  z-10"
      >
        {traduccion.quienesInicio.paragraph}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="z-50 lg:hidden mt-[9px]"
      >
        <Link href="/About" >
        <Button text={traduccion.quienesInicio.button} />
        </Link>
      </motion.div>
    </motion.div>
      <div className='hidden w-full h-full lg:flex flex-row justify-center lg:items-center z-10 '>
        <div className='h-[250px] lg:h-[350px]  flex flex-col justify-end relative lg:translate-x-[80px] lg:translate-y-[20px] 2xl:translate-y-[100px] '>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] lg:w-[140px] 2xl:w-[264px] h-[126px] lg:h-[140px] 2xl:h-[200px]' />
          <div className='flex flex-col text-center w-full absolute top-[60%] lg:top-[74%] 2xl:top-[60%] text-[12px] 2xl:text-[20px] font-paragraph leading-[15px] 2xl:leading-[26px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader1}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph1}</p>
          </div>
        </div>
        <div className='h-full flex flex-col justify-start lg:justify-center relative z-10'>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000}
          className='w-[182px] h-[197px] lg:w-[258px] lg:h-[266px] 2xl:w-[404px] 2xl:h-[350px] '
          />
          <div className='flex flex-col text-center w-full absolute top-[35%] lg:top-[45%] xl:top-[45%] text-[14px] lg:text-[18px] 2xl:text-[28px] font-paragraph leading-[15px] lg:leading-[20px] 2xl:leading-[33px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader2}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph2}</p>
          </div>
        </div>
        <div className='h-[250px]  flex flex-col justify-end relative lg:-translate-x-[40px] lg:translate-y-[50px] xl:translate-y-[10px] 2xl:translate-y-[70px] '>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] 2xl:w-[194px] h-[126px] 2xl:h-[170px]' />
          <div className='flex flex-col text-center w-full absolute top-[65%] xl:top-[65%] 2xl:top-[55%] text-[12px] 2xl:text-[18px] 2xl:leading-[19px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader3}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph3}</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Quienes;
