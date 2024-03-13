import Image from "next/image";
import React, { useContext } from "react";
import ShadowServicio from "../Shadows/ShadowServicio";
import { AppContext } from "@/Context/AppContext";
import { motion } from 'framer-motion';


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

  return (
    <div 
    id="Servicio"
    className="w-full h-full relative z-10 ">

      <ShadowServicio/>
    <div className="w-full h-[830px] flex flex-row justify-center items-center px-14 
    max-w-[1444px] mx-auto min-w-sm 
    ">
    <div className="w-full h-[604px] flex flex-row justify-around text-white bg-[#0E192187] items-center rounded-[22px]
      ">
      <div className="">
        <motion.div className="w-[557px] h-[539px]" 
         initial="hidden"
         animate="visible"
         variants={variantsImage}
        >
          <Image src='/images/mapa.png' alt="mapa" width={1000} height={1000} className='w-full h-full'/>
        </motion.div>
      </div>
      <div className=" flex flex-col gap-[8px]">
        <motion.h2 
         initial="hidden"
         animate="visible"
         variants={variants}
        className="font-header w-[532px] text-[40px] font-bold leading-[44px]">
          {traduccion.servicio.header}
          <br/>
          <span className="titulo2">{traduccion.servicio.accent}</span>
        </motion.h2>
        <motion.p 
        initial="hidden"
        animate="visible"
        variants={variants}
        className="w-[532px]  font-paragraph text-[20px] leading-[34px] ">{traduccion.servicio.paragraph}</motion.p>
      </div>
    </div>
   
      
    
        </div>
        </div>
  );
}

export default Servicio;
