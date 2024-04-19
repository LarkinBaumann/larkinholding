import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity';

function Carrousel() {

    const { traduccion } = useContext(AppContextSecurity);

    const [ref, inView] = useInView({
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
    

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full h-full  lg:hidden flex flex-row items-center overflow-x-scroll no-scrollbar gap-[7px] z-20 "
  >
            {traduccion.empresas.map((empresa, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="w-full  h-[420px] md:h-[550px] flex flex-col justify-start items-center bg-[#183f5cd8] rounded-[22px]
                border-[1px] border-[#1777BA] gap-[12px]
                "
              >
                <div className="w-[184px] md:w-[350px] h-[157px] md:h-[250px]">
                <Image
          src={empresa.imagen}
          width={100}
          height={100}
          alt={empresa.nombre}
          className="w-full h-full object-cover rounded-t-[22px]"
         
        />
                </div>
                <div
                  className="w-[151px] md:w-[150px] h-[38px] px[6px] py-[15px] flex flex-row justify-center items-center
                    rounded-[5px]
                    "
                  style={{ background: "rgba(11, 32, 46, 0.30)" }}
                >
                  <p
                    className="text-[12px] leading-[15px]
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
  )
}

export default Carrousel