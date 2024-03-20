import Image from "next/image";
import React, { useContext } from "react";
import ShadowServicio from "../Shadows/ShadowServicio";
import { AppContext } from "@/Context/AppContext";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ShadowAcerca2 from "../Shadows/ShadowAcerca2";

const ShadowSm = '/images/Servicios/ShadowSm.png'


function Servicio() {
  const {traduccion} = useContext(AppContext)

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };
  const variantsImage = {
    hidden: { opacity: 0},
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 3, 
        ease: "easeOut" 
      } 
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  return (
    <div 
    ref={ref}
    id="Servicio"
    className="w-full h-full relative z-10 overflow-hidden ">

      {/* <ShadowServicio
      inView={inView}
      /> */}
     <ShadowAcerca2
     inView={inView}
     />
       
    <div className="w-full h-[500px] md:h-[700px] lg:h-[830px] flex flex-col lg:flex-row justify-center items-center px-8 lg:px-14 
    max-w-[1444px] mx-auto min-w-sm 
    ">
    <div className="w-full h-[511px] md:h-[880px] lg:h-[604px] flex  flex-col lg:flex-row justify-around text-white bg-[#0E192187] items-center rounded-[22px]
      ">
        <div className="w-full flex flex-col lg:flex-row items-center  gap-[8px] md:gap-[20px]">
     
        <motion.div className="hidden lg:flex w-[237px] md:w-[400px] lg:w-[557px] 2xl:w-full h-[229px] md:h-[400px] xl:h-[539px] order-2 lg:order-none" 
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variantsImage}
        >
          <Image src='/images/mapa.png' alt="mapa" width={1000} height={1000} className='w-full h-full'/>
        </motion.div>

      <div className="h-full lg:w-[50%] 2xl:w-full flex flex-col lg:gap-4 xl:gap-0 justify-center items-center">

        <motion.h2 
        
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="font-header w-full xl:w-[540px]  text-[22px] md:text-[37px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[44px] text-center lg:text-left order-1 lg:order-none px-4 lg:px-0">
          {traduccion.servicio.header}
          <br/>
          <span className="titulo2">{traduccion.servicio.accent}</span>
        </motion.h2>
        <motion.div className="w-[237px] md:w-[400px] lg:w-[557px] lg:hidden 2xl:w-full h-[229px] md:h-[400px] xl:h-[539px] order-2 lg:order-none" 
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variantsImage}
        >
          <Image src='/images/mapa.png' alt="mapa" width={1000} height={1000} className='w-full h-full'/>
        </motion.div>
        <motion.p 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="w-[289px] md:w-[556px] lg:w-full xl:w-[532px]  font-paragraph text-[12px] md:text-[17px] lg:text-[20px] leading-[20.52px] md:leading-[27px] lg:leading-[34px] text-center lg:text-left order-3 lg:order-none lg:pr-4 xl:pr-0 xl:mt-4">{traduccion.servicio.paragraph}</motion.p>
        </div>
      </div>
    </div>
   
      
    
        </div>
        </div>
  );
}

export default Servicio;
