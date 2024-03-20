import { AppContext } from "@/Context/AppContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Empresas() {
  
  const {traduccion} = useContext(AppContext)

  const [seleccion, setSeleccion] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.5 
      } 
    },
  };
  const variantsP = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 3 
      } 
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  
  

  return (
    <>
    <div
    id="Empresas"
    ref={ref}
    className="flex h-[500px] md:h-[750px] lg:h-[1024px] w-full  text-white  relative z-20 px-8 ">
      <Image
        src="/images/empresas2.png"
        width={5000}
        height={5000}
        alt="fondo-empresas"
        className="hidden lg:flex w-full h-full object-cover  absolute -z-50"
      />
      <motion.div 
      
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full h-full lg:hidden flex flex-row items-center overflow-x-scroll no-scrollbar gap-[7px]">
        {
          traduccion.empresas.map((empresa, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="w-[184px] md:w-[350px] h-[350px] md:h-[550px] flex flex-col justify-between items-center bg-[#183F5C2E] rounded-[22px]">
                <div className="w-[184px] md:w-[350px] h-[136px] md:h-[250px]">
                  <Image
                    src={empresa.imagen}
                    width={1000}
                    height={1000}
                    alt={empresa.nombre}
                    className="w-full h-full object-cover rounded-t-[22px]"
                    style={{
                      objectPosition: empresa.id == '4' ? '0px bottom' :
                        empresa.id == '5' && "0px -10px"
                    }}
                  />
                </div>
                  <div className="w-[101px] md:w-[150px] h-[38px] px[6px] py-[15px] flex flex-row justify-center items-center
                  rounded-[5px]
                  "
                  style={{ background: 'rgba(11, 32, 46, 0.30)' }}
                  >
                    <p className="text-[12px] leading-[15px]
                    text-center">
                    {empresa.nombre}
                    </p>
                  </div>
              <p className="text-center font-paragraph  leading-[15px] md:leading-[24px] text-[12px] md:text-[17px] w-full px-[13px] h-[64px]">
                {empresa.descripcion}
              </p>
              <div>
              <button className="text-white w-[82px] md:w-[150px] h-[20px] md:h-[38px]  bg-[#005E93]  cursor-pointer 
              mb-4
              ">
                    <div className=" w-full h-full flex justify-center items-center gap-[6px] text-[9px] md:text-[15px] font-paragraph cursor-pointer ">

                   {traduccion.empresaBoton}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="9"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M15.7392 1.60058C15.7392 1.063 15.3035 0.627207 14.7659 0.627206L6.00553 0.627207C5.46795 0.627207 5.03216 1.063 5.03216 1.60058C5.03216 2.13816 5.46795 2.57395 6.00553 2.57395L13.7925 2.57395L13.7925 10.3609C13.7925 10.8985 14.2283 11.3343 14.7659 11.3343C15.3035 11.3343 15.7392 10.8985 15.7392 10.3609L15.7392 1.60058ZM1.82695 15.9161L15.4542 2.28886L14.0776 0.912301L0.450394 14.5395L1.82695 15.9161Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  </button>
                  </div>
            </motion.div>
          ))
        }
      </motion.div>
      <motion.div className="hidden lg:grid grid-cols-8 w-full h-full px-14 items-center gap-9 max-w-[1444px] mx-auto min-w-sm "
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      
        {traduccion.empresas.map((empresa, index) => (
          <motion.div
          
            key={index}
            className={
              seleccion != index
                ? "w-full h-[774px] col-span-1 rounded-[22px]  relative cursor-pointer hover:-translate-y-4 transition-all duration-300"
                : "col-span-4 h-[774px] rounded-[22px]  "
            }
            onClick={() => setSeleccion(index)}
            variants={childVariants}
            
          >
            {seleccion == index ? (
              <div
              ref={ref}
                className="w-full h-full flex flex-col justify-between bg-[
                #183F5C] rounded-t-[22px]"
              >
                <div className="w-full h-[50%] flex flex-col justify-center items-center bg-[#183F5C2E] rounded-[22px]">
                  <motion.p className="font-paragraph font-semibold  leading-[48px] text-[36px] w-[491px] lg:w-full  h-[192px]"
                   initial="hidden"
                   animate={inView ? "visible" : "hidden"}
                   variants={variantsP}
                  >
                    {empresa.descripcion}
                  </motion.p>
                </div>
                <div className="w-full h-[50%] relative ">
                  <Image
                    src={empresa.imagen}
                    width={1000}
                    height={1000}
                    alt={empresa.nombre}
                    className={index == 3 ?
                      "w-full h-full object-cover object-bottom rounded-b-[22px]"
                  :
                  "w-full h-full object-cover object-center rounded-b-[22px]"
                  }
                  />
                  <button className="text-white w-[171px] h-[42px] absolute bg-[#005E93] bottom-10 right-10 cursor-pointer hover:scale-110 transition-all duration-300">
                    <div className=" w-full h-full flex justify-center items-center gap-[14px] text-[19px] font-paragraph cursor-pointer">

                   {traduccion.empresaBoton}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M15.7392 1.60058C15.7392 1.063 15.3035 0.627207 14.7659 0.627206L6.00553 0.627207C5.46795 0.627207 5.03216 1.063 5.03216 1.60058C5.03216 2.13816 5.46795 2.57395 6.00553 2.57395L13.7925 2.57395L13.7925 10.3609C13.7925 10.8985 14.2283 11.3343 14.7659 11.3343C15.3035 11.3343 15.7392 10.8985 15.7392 10.3609L15.7392 1.60058ZM1.82695 15.9161L15.4542 2.28886L14.0776 0.912301L0.450394 14.5395L1.82695 15.9161Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  </button>
                </div>
              </div>
            ) : (
              <Image
                src={empresa.imagen}
                width={1000}
                height={1000}
                alt={empresa.nombre}
                className="w-full h-full object-cover  rounded-[22px] "
                style={{ objectPosition: empresa.id == '1'?'-380px center':
                 empresa.id == '2'? "-150px center":
                 empresa.id == '3'? "-500px center":
                 empresa.id == '4'? "-380px center":
                 empresa.id == '5'&& "-150px center"
                }}
              />
            )}
            <div className={
              seleccion!=index?
              "w-full h-full bg-[#005E937A] absolute top-0 rounded-[22px]"
            :"hidden"
            }>
              </div>

            <svg
              className={
                seleccion != index
                  ? " absolute  bottom-0 flex flex-row justify-center items-center text-left"
                  : "hidden"
              }
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="297"
              viewBox="0 0 87 297"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.4408 53.9612L86.525 53.9067L86.4408 53.8544V53.7167H86.2191L0.865231 0.707672L1.51143 88.5769V296.611H86.4408V53.9612Z"
                fill="#005E93"
              />
            </svg>
            <div className="w-[170px] h-[80px] absolute bottom-16 lg:-left-9 xl:right-0 text-white -rotate-90">
            <h3
              className={
                seleccion != index
                  ? " w-[170px] font-header font-bold text-[28px]  uppercase leading-[35px] "
                  : "hidden"
              }
            >
              {empresa.nombre}
            </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
   {/*  <motion.div className="w-full h-[50px] lg:hidden flex flex-row justify-center items-start gap-2 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    {
    traduccion.empresas.map((element,index) => (
      <motion.div 
        key={element} 
        variants={childVariants}
        className={`w-[13px] h-[13px] rounded-full border-[1px] bg-[#042134] border-[#55B0F0`}
      />
    ))
  }
      </motion.div> */}
    </>
  );
}

export default Empresas;
