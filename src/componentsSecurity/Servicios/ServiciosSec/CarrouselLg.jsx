import Image from 'next/image'
import React, { useContext, useState } from 'react'
import {motion} from 'framer-motion'
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity';
import { useInView } from 'react-intersection-observer';

function CarrouselLg() {
  const { traduccion } = useContext(AppContextSecurity);
  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.5,
      },
    },
  };

  const variantsP = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };
  const variantsPlus = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  const [position, setPosition] = useState(0)


  return (
    <div className='hidden w-full h-full lg:flex flex-col gap-[33px]'>
      
    <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full h-full   flex flex-row items-center  gap-[7px] z-20 "
  >
            {traduccion.empresas.slice(0 + position, 3 + position).map((empresa, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="w-full  h-[390px] md:h-[550px] flex flex-col justify-start items-center bg-[#183f5cd8] rounded-[22px]
                border-[1px] border-[#1777BA] gap-[12px]
                "
              >
                <div className="w-full h-[157px] md:h-[250px]">
                <Image
          src={empresa.imagen}
          width={1000}
          height={1000}
          alt={empresa.nombre}
          className="w-full h-full object-cover rounded-t-[22px]"
         
        />
                </div>
                <div
                  className="w-[101px] md:w-[150px] xl:w-[350px] h-[38px] xl:h-[79px] px-[6px] py-[15px] flex flex-row justify-center items-center
                    rounded-[5px]
                    "
                  style={{ background: "rgba(11, 32, 46, 0.30)" }}
                >
                  <p
                    className="xl:w-full text-[12px] xl:text-[25px] leading-[15px] xl:leading-[31px] font-semibold font-header
                      text-center"
                  >
                    {empresa.nombre}
                  </p>
                </div>
                <p className="text-center font-paragraph  leading-[15px] md:leading-[24px] text-[11px] md:text-[15px] w-full h-[64px] px-2">
                  {empresa.descripcion}
                </p>
                <div>
                  
                </div>
              </motion.div>
            ))}
            
          </motion.div>
          <div className="hidden lg:flex flex-row justify-end items-center gap-[24px] z-20 ">
          <div
            className={
              position == 0
                ? "hidden"
                : "w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full border-2 border-[#55B0F0] cursor-pointer"
            }
            onClick={() => setPosition(position - 3)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M39.6972 21.7197H15.8181L26.7864 10.7514L24.0002 7.98483L8.30322 23.6818L24.0002 39.3788L26.7668 36.6122L15.8181 25.6439H39.6972V21.7197Z" fill="white"/>
</svg>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsPlus}
            className={
              position ==  3
                ? "hidden"
                : "w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full border-2 border-[#55B0F0] cursor-pointer"
            }
            onClick={() => setPosition(position + 3)}
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M0.416608 18.644L24.2956 18.644L13.3274 29.6122L16.1136 32.3788L31.8105 16.6818L16.1136 0.984867L13.347 3.75146L24.2956 14.7197L0.416607 14.7197L0.416608 18.644Z" fill="white"/>
</svg>
          </motion.div>
        </div>
          
    </div>
  )
}

export default CarrouselLg