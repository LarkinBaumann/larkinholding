import Image from 'next/image'
import React, { useContext, useState } from 'react'
import ContactCard from './ContactCard'
import ShadowTop from './Shadows/ShadowTop'
import ShadowBottom from './Shadows/ShadowBottom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from "react-responsive";
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'


function Contacto() {

  const { traduccion } = useContext(AppContextSecurity);

  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });


  const variants = isLarge ? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  }
  :
  {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5, ease: "easeOut" } },
  };
  const variantsText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false); // valor inicial que se renderizará en el servidor


  return (
    
    <>
     <div
      id="Contacto"
      className="w-full h-[500px] lg:h-[800px] flex flex-col justify-center items-center  px-4 lg:px-14 gap-[15px] relative z-20 mt-10"
    >
      <ShadowTop/>
      <ShadowBottom/>
      <div className='hidden w-full h-[604px] lg:flex flex-col  justify-center items-center px-4 lg:px-14 gap-[15px] relative z-20
      rounded-[22px] border-[2px] border-[#1777BA] bg-[#07141C]
      '>
      <motion.h2
        className="hidden lg:block  w-[250px] lg:w-full text-white font-roboto text-[27px] lg:text-[58px] xl:text-[65px] font-bold leading-[28px] lg:leading-[87.55px] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {traduccion.contacto.header}
        <br className="" />
        <span
          className="text-[#a2b3ee]"
         
        >
          {traduccion.contacto.accent}
        </span>
      </motion.h2>
      <motion.p
        className="w-[289px] lg:w-[930px] hidden lg:flex text-white text-center text-[12px] lg:text-[25px] font-paragraph leading-[20px] lg:leading-[43px] z-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsText}
      >
        {traduccion.contacto.paragraph}
      </motion.p>
      <motion.div
        ref={ref}
        className="hidden w-[930px] lg:flex flex-row justify-around items-center cursor-pointer "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        
      >
        <a href="mailto:correo@correo.com">
        <motion.div
          variants={childVariants}
          className=" flex flex-col  gap-[9px] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M30.9338 6.18652H6.18708C4.48111 6.18652 3.09375 7.57388 3.09375 9.27986V27.8399C3.09375 29.5458 4.48111 30.9332 6.18708 30.9332H30.9338C32.6397 30.9332 34.0271 29.5458 34.0271 27.8399V9.27986C34.0271 7.57388 32.6397 6.18652 30.9338 6.18652ZM30.9338 9.27986V10.0702L18.5604 19.6951L6.18708 10.0717V9.27986H30.9338ZM6.18708 27.8399V13.9879L17.6108 22.8735C17.8816 23.0862 18.216 23.2019 18.5604 23.2019C18.9048 23.2019 19.2392 23.0862 19.5101 22.8735L30.9338 13.9879L30.9368 27.8399H6.18708Z"
              fill="url(#paint0_linear_224_713)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_224_713"
                x1="18.5604"
                y1="6.18652"
                x2="18.5604"
                y2="30.9332"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1777BA" />
                <stop offset="1" stopColor="#8FAFF1" />
              </linearGradient>
            </defs>
          </svg>
          <h4 className="font-bold font-header text-[23px] md:text-[17px]">
            {traduccion.contacto.titulo}
          </h4>
          
          <p className="font-paragraph text-[18px] "> info@corporativolb.com</p>
        </motion.div>
        </a>
        <a href="tel:+525516891448">	
        <motion.div
          variants={childVariants}
          className=" flex flex-col gap-[9px]  text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
          <path d="M26.1444 4.46836C23.2684 1.58555 19.4384 0 15.3681 0C6.9668 0 0.130413 6.83638 0.130413 15.2377C0.130413 17.9215 0.830525 20.5435 2.16211 22.8566L0 30.75L8.07874 28.6291C10.3026 29.844 12.8079 30.4823 15.3613 30.4823H15.3681C23.7626 30.4823 30.75 23.6459 30.75 15.2446C30.75 11.1743 29.0203 7.35117 26.1444 4.46836ZM15.3681 27.9152C13.0893 27.9152 10.8586 27.3044 8.91613 26.1512L8.45625 25.8767L3.66529 27.1328L4.94196 22.4585L4.63996 21.978C3.37014 19.96 2.70435 17.6332 2.70435 15.2377C2.70435 8.2572 8.38761 2.57394 15.375 2.57394C18.7589 2.57394 21.9368 3.8918 24.3254 6.28728C26.7141 8.68276 28.1829 11.8607 28.1761 15.2446C28.1761 22.232 22.3487 27.9152 15.3681 27.9152ZM22.3143 18.4294C21.9368 18.2372 20.063 17.3175 19.7129 17.1939C19.3629 17.0635 19.1089 17.0017 18.855 17.3861C18.601 17.7705 17.8734 18.6216 17.6469 18.8824C17.4273 19.1364 17.2008 19.1707 16.8233 18.9785C14.5857 17.8597 13.1168 16.9811 11.6411 14.4484C11.2498 13.7757 12.0323 13.8238 12.7599 12.3686C12.8834 12.1147 12.8217 11.895 12.7256 11.7028C12.6295 11.5107 11.8676 9.63683 11.5518 8.87494C11.243 8.13365 10.9272 8.23661 10.6939 8.22288C10.4742 8.20915 10.2203 8.20915 9.96629 8.20915C9.71233 8.20915 9.3005 8.30525 8.95045 8.68276C8.60039 9.06713 7.61886 9.98689 7.61886 11.8607C7.61886 13.7345 8.98477 15.5466 9.17009 15.8006C9.36228 16.0545 11.8538 19.8983 15.677 21.5525C18.0931 22.5958 19.0403 22.685 20.2483 22.5065C20.9828 22.3967 22.4997 21.5868 22.8154 20.6945C23.1311 19.8022 23.1311 19.0403 23.035 18.8824C22.9458 18.7108 22.6919 18.6147 22.3143 18.4294Z" fill="url(#paint0_linear_560_564)"/>
          <defs>
            <linearGradient id="paint0_linear_560_564" x1="15.375" y1="0" x2="15.375" y2="30.75" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B79BC"/>
              <stop offset="1" stop-color="#A2B3EE"/>
            </linearGradient>
          </defs>
        </svg>
          <h4 className="font-bold font-header text-[23px] md:text-[17px]">
            {traduccion.contacto.titulo2}
          </h4>
          
          <p className="font-paragraph text-[18px] ">+52 55 1689 1448</p>
        </motion.div>
        </a>
        <a href="https://maps.app.goo.gl/xAPL9j85xiapX6LNA" target="_blank">
        <motion.div
          variants={childVariants}
          className=" flex flex-col gap-[9px]  text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M18.56 21.6535C21.9719 21.6535 24.7466 18.8788 24.7466 15.4668C24.7466 12.0549 21.9719 9.28017 18.56 9.28017C15.148 9.28017 12.3733 12.0549 12.3733 15.4668C12.3733 18.8788 15.148 21.6535 18.56 21.6535ZM18.56 12.3735C20.2659 12.3735 21.6533 13.7609 21.6533 15.4668C21.6533 17.1728 20.2659 18.5602 18.56 18.5602C16.854 18.5602 15.4666 17.1728 15.4666 15.4668C15.4666 13.7609 16.854 12.3735 18.56 12.3735ZM17.6629 33.7392C17.9247 33.9261 18.2383 34.0266 18.56 34.0266C18.8817 34.0266 19.1953 33.9261 19.4571 33.7392C19.9272 33.4066 30.9782 25.4274 30.9333 15.4668C30.9333 8.64449 25.3823 3.09351 18.56 3.09351C11.7376 3.09351 6.18666 8.64449 6.18666 15.4591C6.14181 25.4274 17.1927 33.4066 17.6629 33.7392ZM18.56 6.18684C23.6779 6.18684 27.84 10.3489 27.84 15.4746C27.8725 22.3387 21.0532 28.5021 18.56 30.5236C16.0683 28.5006 9.24751 22.3356 9.27999 15.4668C9.27999 10.3489 13.4421 6.18684 18.56 6.18684Z"
              fill="url(#paint0_linear_224_707)"
            />
            <path
              d="M18.56 21.6535C21.9719 21.6535 24.7466 18.8788 24.7466 15.4668C24.7466 12.0549 21.9719 9.28017 18.56 9.28017C15.148 9.28017 12.3733 12.0549 12.3733 15.4668C12.3733 18.8788 15.148 21.6535 18.56 21.6535ZM18.56 12.3735C20.2659 12.3735 21.6533 13.7609 21.6533 15.4668C21.6533 17.1728 20.2659 18.5602 18.56 18.5602C16.854 18.5602 15.4666 17.1728 15.4666 15.4668C15.4666 13.7609 16.854 12.3735 18.56 12.3735ZM17.6629 33.7392C17.9247 33.9261 18.2383 34.0266 18.56 34.0266C18.8817 34.0266 19.1953 33.9261 19.4571 33.7392C19.9272 33.4066 30.9782 25.4274 30.9333 15.4668C30.9333 8.64449 25.3823 3.09351 18.56 3.09351C11.7376 3.09351 6.18666 8.64449 6.18666 15.4591C6.14181 25.4274 17.1927 33.4066 17.6629 33.7392ZM18.56 6.18684C23.6779 6.18684 27.84 10.3489 27.84 15.4746C27.8725 22.3387 21.0532 28.5021 18.56 30.5236C16.0683 28.5006 9.24751 22.3356 9.27999 15.4668C9.27999 10.3489 13.4421 6.18684 18.56 6.18684Z"
              fill="url(#paint1_linear_224_707)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_224_707"
                x1="18.56"
                y1="3.09351"
                x2="18.56"
                y2="34.0266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1777BA" />
                <stop offset="1" stopColor="#8FAFF1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_224_707"
                x1="18.56"
                y1="3.09351"
                x2="18.56"
                y2="34.0266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1777BA" />
                <stop offset="1" stopColor="#8FAFF1" />
              </linearGradient>
            </defs>
          </svg>
          <h4 className="font-bold font-header text-[23px] md:text-[17px]">
            {traduccion.contacto.titulo3}
          </h4>
          <p className="font-paragraph text-[18px] ">Miguel Cervantes, CDMX.</p>
        </motion.div>
        </a>
      </motion.div>
      </div>
   
    <div className='text-white w-full h-full flex lg:hidden flex-col items-center justify-center gap-[9px] my-[44px] relative '>
      <ShadowTop/>
      <ShadowBottom/>
      <div className='w-[90%] flex justify-center items-center z-20 '>
      <h2 className='font-header text-[27px] text-center font-extrabold leading-[28px] '>
      {traduccion.contacto.header} <span className='titulo6'> 
      {traduccion.contacto.accent}
      </span>
      </h2>
      </div>
      <div className='w-[68%] flex justify-center items-center z-20'>

      <p className='text-center text-[12px] md:text-[20px] leading-[20px] md:leading-[34px] '>
      {traduccion.contacto.paragraph}
      </p>
      </div>
      <div className='w-full flex flex-col h-full gap-[17px] items-center'>

      <div className='w-[90%] flex flex-row justify-center items-center gap-[14px] mt-4  '>
        <a href='mailto:info@corporativolb.com' className=' contactoCard'>
        <ContactCard
        icono={'/assetsSecurity/icons/email.svg'}
        titulo={traduccion.contacto.titulo}
        parrafo={"info@corporativolb.com"}
        />
        </a>
         <a href={traduccion.contacto.mensaje}>
        <ContactCard
        icono={'/assetsSecurity/icons/whatsapp.svg'}
        titulo={traduccion.contacto.titulo2}
        parrafo={"+52 55 1689 1448"}
        /> 
        </a>   
        <a href="https://maps.app.goo.gl/zUC11owWN5uMZD4e7" target="_blank">
        <ContactCard
        icono={'/assetsSecurity/icons/ubicacion.svg'}
        titulo={traduccion.contacto.titulo3}
        parrafo={"Miguel Cervantes, CDMX."}
        />
        </a>

      </div>
      <div className='w-[90%] flex flex-row justify-center items-center gap-[14px]'>
      
        <a href="tel:+525516891448">

        <ContactCard
        icono={'/assetsSecurity/icons/weixin.svg'}
        titulo={'WeChat'}
        parrafo={"+52 55 1689 1448"}
        />
        </a>
      </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Contacto