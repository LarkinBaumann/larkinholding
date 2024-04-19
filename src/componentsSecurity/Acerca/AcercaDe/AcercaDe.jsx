import Button from "@/componentsSecurity/Button";
import Image from "next/image";
import React, { useContext } from "react";
import ShadowTop from "./Shadows/ShadowTop";
import { AppContextSecurity } from "@/ContextSecurity/AppContextSecurity";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

function AcercaDe() {

  const {traduccion} = useContext(AppContextSecurity)

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se dispara una sola vez
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // La animación se dispara una sola vez
  });

  return (
    <div className="text-white w-full h-full flex flex-col relative">
      <ShadowTop/>

{/* Primera parte */}
<motion.div className="w-full h-full flex flex-col lg:flex-row-reverse xl:items-center " >
      <motion.div className=" w-full h-full flex flex-col items-center lg:items-start  gap-[18px] px-10 md:px-8 z-20"
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[25px] md:text-[60px] font-header font-black" ref={ref}>{traduccion.acercaDe.header}</h2>
        <p className="text-center lg:text-left font-paragraph font-extrabold leading-[18px] md:leading-[34px]   text-[11px] md:text-[20px] ">
          {traduccion.acercaDe.paragraph} <span className="text-[#55B0F0]"> {traduccion.acercaDe.accent} </span>
          {traduccion.acercaDe.paragraph2}
        </p>
        <Link href="/Services">

        <Button
          text={traduccion.acercaDe.button}
          />
          </Link>
      </motion.div>
      <motion.div className="w-full h-full flex flex-row justify-center  items-center relative"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        <Image src="/assetsSecurity/acerca/acercade/bmwFondo.svg" width={1000} height={1000} alt="Acerca De" className="absolute " />
        <Image src="/assetsSecurity/acerca/acercade/bmw2.png" width={1000} height={1000} alt="Acerca De" className="w-[202px] h-[239px] md:h-[400px] md:w-[500px] lg:h-[604px] lg:w-[539px] xl:w-full xl:h-[752px] 2xl:w-[760px] 2xl:h-[852px] md:object-contain flex flex-col rotate-[-7deg] lg:rotate-0  " />
      </motion.div>
    </motion.div>
{/* Segunda parte */}
<motion.div className="w-full h-full flex flex-col items-center lg:flex-row mt-4 lg:mt-8" ref={ref2}>
      <motion.div className="w-full h-full flex flex-col lg:gap-[40px]  px-10 lg:pl-10 mb-4 lg:mb-0"
        variants={textVariants}
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        <div className=" md:w-[530px] z-20">
          <h2 className="w-full font-header text-[25px] md:text-[40px] font-extrabold">{traduccion.acercaDe.mision}</h2>
          <p className=" text-[11px] md:text-[20px] font-extrabold leading-[19px] md:leading-[34px] font-paragraph w-[225px] md:w-full">
            {traduccion.acercaDe.paragraphMision}
          </p>
        </div>
        <div className="md:w-full text-right lg:text-left w-full flex flex-col items-end lg:items-start ">
          <h2 className="font-header text-[25px] font-extrabold md:text-[40px] ">{traduccion.acercaDe.vision}</h2>
          <p className="text-[11px] md:text-[20px] font-extrabold leading-[19px] md:leading-[34px] font-paragraph w-[225px] md:w-[530px]">
            {traduccion.acercaDe.paragraphVision}
          </p>
        </div>
      </motion.div>
      <motion.div className="lg:w-full flex flex-row justify-center"
        variants={imageVariants}
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[220px] lg:w-[400px] xl:w-[500px] h-[220px] lg:h-[400px] xl:h-[500px] z-20">
          <Image src="/assetsSecurity/acerca/acercade/escoltas2.png" width={1000} height={1000} alt="Acerca De" className="w-full h-full " />
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
}

export default AcercaDe;
