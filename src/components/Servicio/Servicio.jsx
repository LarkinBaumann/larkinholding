import Image from "next/image";
import React, { useContext } from "react";
import ShadowServicio from "../Shadows/ShadowServicio";
import { AppContext } from "@/Context/AppContext";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

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
        duration: 4, 
        ease: "easeOut" 
      } 
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  return (
    <div 
    
    id="Servicio"
    className="w-full h-full relative z-10 ">

      <ShadowServicio
      inView={inView}
      />
       
    <div className="w-full h-[500px] lg:h-[830px] flex flex-col lg:flex-row justify-center items-center px-8 lg:px-14 
    max-w-[1444px] mx-auto min-w-sm 
    ">
    <div className="w-full h-[511px] lg:h-[604px] flex  flex-col lg:flex-row justify-around text-white bg-[#0E192187] items-center rounded-[22px]
      ">
        <div className="w-full flex flex-col items-center lg:items-start gap-[8px]">
     
        <motion.div className="w-[237px] lg:w-[557px] h-[229px] lg:h-[539px] order-2" 
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variantsImage}
        >
          <Image src='/images/mapa.png' alt="mapa" width={1000} height={1000} className='w-full h-full'/>
        </motion.div>
      
        <motion.h2 
        ref={ref}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variants}
        className="font-header w-full lg:w-[532px] text-[22px] lg:text-[40px] font-bold leading-[25px] lg:leading-[44px] text-center lg:text-left order-1 px-4 lg:px-0">
          {traduccion.servicio.header}
          <br/>
          <span className="titulo2">{traduccion.servicio.accent}</span>
        </motion.h2>
        <motion.p 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="w-[289px] lg:w-[532px]  font-paragraph text-[12px] lg:text-[20px] leading-[20.52px] lg:leading-[34px] text-center lg:text-left order-3">{traduccion.servicio.paragraph}</motion.p>
      </div>
    </div>
   
      
    
        </div>
        </div>
  );
}

export default Servicio;
