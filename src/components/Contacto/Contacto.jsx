import { AppContext } from "@/Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

function Contacto() {
  const { traduccion } = useContext(AppContext);

  
  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  

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

  useEffect(() => {
    // lógica que calcula isTabletOrMobile
    const isTabletOrMobile = window.innerWidth < 768; // o cualquier lógica que estés utilizando
    setIsTabletOrMobile(isTabletOrMobile);
  }, []);

  return (
    <div
      id="Contacto"
      className="w-full h-[604px]   flex flex-col  justify-center items-center px-4 lg:px-14 gap-[15px] relative z-20"
    >
      <motion.h2
        className="hidden lg:block  w-[250px] lg:w-full text-white font-roboto text-[27px] lg:text-[65px] font-bold leading-[28px] lg:leading-[87.55px] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {traduccion.contacto.header}
        <br className="" />
        <span
          className="titulo2"
         
        >
          {traduccion.contacto.accent}
        </span>
      </motion.h2>
      <motion.p
        className="w-[289px] lg:w-[930px] hidden lg:flex text-white text-center text-[12px] lg:text-[25px] font-paragraph leading-[20px] lg:leading-[43px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsText}
      >
        {traduccion.contacto.paragraph}
      </motion.p>
      <motion.div
        ref={ref}
        className="hidden w-[930px] lg:flex flex-row justify-around items-center"
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
        <a href="https://wa.me/525516891448?text=Hola!%20Quiero%20mas%20informacion">
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

      <div className="w-full h-full flex flex-col gap-[20px] md:gap-[15px] justify-center items-center">
        <motion.h2
          ref={ref2}
          className="w-full md:w-[650px] lg:hidden text-white font-header text-[27px] md:text-[37px] lg:text-[65px] font-bold leading-[28px] md:leading-[40px] lg:leading-[87.55px] text-center lg:text-start "
          initial="hidden"
        animate={inView2? "visible" : "hidden"}
          variants={variants}
        >
          {traduccion.contacto.header} 
          <motion.span
            className="titulo2 ml-2 lg:hidden"
            initial="hidden"
          animate={inView2? "visible" : "hidden"}
            variants={variants}
          >
            {traduccion.contacto.accent}
          </motion.span>
        </motion.h2>
        <motion.p
          className="w-full md:w-[530px] lg:w-[930px] lg:hidden text-white text-center text-[12px] md:text-[17px] lg:text-[25px] font-paragraph leading-[20px] md:leading-[27px] lg:leading-[43px] "
          initial="hidden"
          animate={inView2? "visible" : "hidden"}
          variants={variants}
        >
          {traduccion.contacto.paragraph}
        </motion.p>
        <div className="w-full  flex lg:hidden flex-row justify-center items-center gap-[14px]">
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="mailto:info@corporativolb.com">
            <motion.div
              variants={childVariants}
              className=" flex flex-col items-center justify-center  gap-[9px] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M30.9338 6.18677H6.18708C4.48111 6.18677 3.09375 7.57413 3.09375 9.2801V27.8401C3.09375 29.5461 4.48111 30.9334 6.18708 30.9334H30.9338C32.6397 30.9334 34.0271 29.5461 34.0271 27.8401V9.2801C34.0271 7.57413 32.6397 6.18677 30.9338 6.18677ZM30.9338 9.2801V10.0704L18.5604 19.6954L6.18708 10.072V9.2801H30.9338ZM6.18708 27.8401V13.9882L17.6108 22.8738C17.8816 23.0865 18.216 23.2021 18.5604 23.2021C18.9048 23.2021 19.2392 23.0865 19.5101 22.8738L30.9338 13.9882L30.9368 27.8401H6.18708Z"
                  fill="url(#paint0_linear_370_896)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_370_896"
                    x1="18.5604"
                    y1="6.18677"
                    x2="18.5604"
                    y2="30.9334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center w-[83px]">
                {traduccion.contacto.titulo}
              </h4>

              <p className="font-paragraph text-[8px] md:text-[17px] text-center  md:w-[120px] ">
                {" "}
                info@corporativolb.com
              </p>
            </motion.div>
            </a>
          </div>
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="https://wa.me/525516891448?text=Hola!%20Quiero%20mas%20informacion">
            <motion.div
              variants={childVariants}
              className=" flex flex-col items-center justify-center  gap-[9px] text-white"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M26.1444 4.46836C23.2684 1.58555 19.4384 0 15.3681 0C6.9668 0 0.130413 6.83638 0.130413 15.2377C0.130413 17.9215 0.830525 20.5435 2.16211 22.8566L0 30.75L8.07874 28.6291C10.3026 29.844 12.8079 30.4823 15.3613 30.4823H15.3681C23.7626 30.4823 30.75 23.6459 30.75 15.2446C30.75 11.1743 29.0203 7.35117 26.1444 4.46836ZM15.3681 27.9152C13.0893 27.9152 10.8586 27.3044 8.91613 26.1512L8.45625 25.8767L3.66529 27.1328L4.94196 22.4585L4.63996 21.978C3.37014 19.96 2.70435 17.6332 2.70435 15.2377C2.70435 8.2572 8.38761 2.57394 15.375 2.57394C18.7589 2.57394 21.9368 3.8918 24.3254 6.28728C26.7141 8.68276 28.1829 11.8607 28.1761 15.2446C28.1761 22.232 22.3487 27.9152 15.3681 27.9152ZM22.3143 18.4294C21.9368 18.2372 20.063 17.3175 19.7129 17.1939C19.3629 17.0635 19.1089 17.0017 18.855 17.3861C18.601 17.7705 17.8734 18.6216 17.6469 18.8824C17.4273 19.1364 17.2008 19.1707 16.8233 18.9785C14.5857 17.8597 13.1168 16.9811 11.6411 14.4484C11.2498 13.7757 12.0323 13.8238 12.7599 12.3686C12.8834 12.1147 12.8217 11.895 12.7256 11.7028C12.6295 11.5107 11.8676 9.63683 11.5518 8.87494C11.243 8.13365 10.9272 8.23661 10.6939 8.22288C10.4742 8.20915 10.2203 8.20915 9.96629 8.20915C9.71233 8.20915 9.3005 8.30525 8.95045 8.68276C8.60039 9.06713 7.61886 9.98689 7.61886 11.8607C7.61886 13.7345 8.98477 15.5466 9.17009 15.8006C9.36228 16.0545 11.8538 19.8983 15.677 21.5525C18.0931 22.5958 19.0403 22.685 20.2483 22.5065C20.9828 22.3967 22.4997 21.5868 22.8154 20.6945C23.1311 19.8022 23.1311 19.0403 23.035 18.8824C22.9458 18.7108 22.6919 18.6147 22.3143 18.4294Z" fill="url(#paint0_linear_560_564)"/>
          <defs>
            <linearGradient id="paint0_linear_560_564" x1="15.375" y1="0" x2="15.375" y2="30.75" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B79BC"/>
              <stop offset="1" stop-color="#A2B3EE"/>
            </linearGradient>
          </defs>
        </svg>

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo2}
              </h4>

              <p className="font-paragraph text-[8px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                {" "}
                +52 55 1689 1448
              </p>
            </motion.div>
            </a>
          </div>
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="https://maps.app.goo.gl/xAPL9j85xiapX6LNA" target="_blank">
            <motion.div
              variants={childVariants}
              className=" flex flex-col items-center justify-center  gap-[9px] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M18.56 21.6533C21.9719 21.6533 24.7466 18.8785 24.7466 15.4666C24.7466 12.0546 21.9719 9.27993 18.56 9.27993C15.148 9.27993 12.3733 12.0546 12.3733 15.4666C12.3733 18.8785 15.148 21.6533 18.56 21.6533ZM18.56 12.3733C20.2659 12.3733 21.6533 13.7606 21.6533 15.4666C21.6533 17.1726 20.2659 18.5599 18.56 18.5599C16.854 18.5599 15.4666 17.1726 15.4666 15.4666C15.4666 13.7606 16.854 12.3733 18.56 12.3733ZM17.6629 33.7389C17.9247 33.9259 18.2383 34.0263 18.56 34.0263C18.8817 34.0263 19.1953 33.9259 19.4571 33.7389C19.9272 33.4064 30.9782 25.4271 30.9333 15.4666C30.9333 8.64425 25.3823 3.09326 18.56 3.09326C11.7376 3.09326 6.18666 8.64425 6.18666 15.4589C6.14181 25.4271 17.1927 33.4064 17.6629 33.7389ZM18.56 6.1866C23.6779 6.1866 27.84 10.3487 27.84 15.4743C27.8725 22.3384 21.0532 28.5019 18.56 30.5234C16.0683 28.5004 9.24751 22.3353 9.27999 15.4666C9.27999 10.3487 13.4421 6.1866 18.56 6.1866Z"
                  fill="url(#paint0_linear_370_915)"
                />
                <path
                  d="M18.56 21.6533C21.9719 21.6533 24.7466 18.8785 24.7466 15.4666C24.7466 12.0546 21.9719 9.27993 18.56 9.27993C15.148 9.27993 12.3733 12.0546 12.3733 15.4666C12.3733 18.8785 15.148 21.6533 18.56 21.6533ZM18.56 12.3733C20.2659 12.3733 21.6533 13.7606 21.6533 15.4666C21.6533 17.1726 20.2659 18.5599 18.56 18.5599C16.854 18.5599 15.4666 17.1726 15.4666 15.4666C15.4666 13.7606 16.854 12.3733 18.56 12.3733ZM17.6629 33.7389C17.9247 33.9259 18.2383 34.0263 18.56 34.0263C18.8817 34.0263 19.1953 33.9259 19.4571 33.7389C19.9272 33.4064 30.9782 25.4271 30.9333 15.4666C30.9333 8.64425 25.3823 3.09326 18.56 3.09326C11.7376 3.09326 6.18666 8.64425 6.18666 15.4589C6.14181 25.4271 17.1927 33.4064 17.6629 33.7389ZM18.56 6.1866C23.6779 6.1866 27.84 10.3487 27.84 15.4743C27.8725 22.3384 21.0532 28.5019 18.56 30.5234C16.0683 28.5004 9.24751 22.3353 9.27999 15.4666C9.27999 10.3487 13.4421 6.1866 18.56 6.1866Z"
                  fill="url(#paint1_linear_370_915)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_370_915"
                    x1="18.56"
                    y1="3.09326"
                    x2="18.56"
                    y2="34.0263"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_370_915"
                    x1="18.56"
                    y1="3.09326"
                    x2="18.56"
                    y2="34.0263"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo3}
              </h4>

              <p className="font-paragraph text-[8px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                Miguel Cervantes, CDMX
              </p>
            </motion.div>
            </a>
          </div>
        </div>
        <div className="w-full  flex lg:hidden flex-row justify-center items-center gap-[14px]">
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer">
            <motion.div
              variants={childVariants}
              className=" flex flex-col items-center justify-center  gap-[9px] text-white"
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

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo4}
              </h4>

              <p className="font-paragraph text-[8px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                {" "}
                +52 55 1689 1448
              </p>
            </motion.div>
            </a>
          </div>
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <motion.div
              variants={childVariants}
              className=" flex flex-col items-center justify-center  gap-[9px] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M18.56 21.6533C21.9719 21.6533 24.7466 18.8785 24.7466 15.4666C24.7466 12.0546 21.9719 9.27993 18.56 9.27993C15.148 9.27993 12.3733 12.0546 12.3733 15.4666C12.3733 18.8785 15.148 21.6533 18.56 21.6533ZM18.56 12.3733C20.2659 12.3733 21.6533 13.7606 21.6533 15.4666C21.6533 17.1726 20.2659 18.5599 18.56 18.5599C16.854 18.5599 15.4666 17.1726 15.4666 15.4666C15.4666 13.7606 16.854 12.3733 18.56 12.3733ZM17.6629 33.7389C17.9247 33.9259 18.2383 34.0263 18.56 34.0263C18.8817 34.0263 19.1953 33.9259 19.4571 33.7389C19.9272 33.4064 30.9782 25.4271 30.9333 15.4666C30.9333 8.64425 25.3823 3.09326 18.56 3.09326C11.7376 3.09326 6.18666 8.64425 6.18666 15.4589C6.14181 25.4271 17.1927 33.4064 17.6629 33.7389ZM18.56 6.1866C23.6779 6.1866 27.84 10.3487 27.84 15.4743C27.8725 22.3384 21.0532 28.5019 18.56 30.5234C16.0683 28.5004 9.24751 22.3353 9.27999 15.4666C9.27999 10.3487 13.4421 6.1866 18.56 6.1866Z"
                  fill="url(#paint0_linear_370_915)"
                />
                <path
                  d="M18.56 21.6533C21.9719 21.6533 24.7466 18.8785 24.7466 15.4666C24.7466 12.0546 21.9719 9.27993 18.56 9.27993C15.148 9.27993 12.3733 12.0546 12.3733 15.4666C12.3733 18.8785 15.148 21.6533 18.56 21.6533ZM18.56 12.3733C20.2659 12.3733 21.6533 13.7606 21.6533 15.4666C21.6533 17.1726 20.2659 18.5599 18.56 18.5599C16.854 18.5599 15.4666 17.1726 15.4666 15.4666C15.4666 13.7606 16.854 12.3733 18.56 12.3733ZM17.6629 33.7389C17.9247 33.9259 18.2383 34.0263 18.56 34.0263C18.8817 34.0263 19.1953 33.9259 19.4571 33.7389C19.9272 33.4064 30.9782 25.4271 30.9333 15.4666C30.9333 8.64425 25.3823 3.09326 18.56 3.09326C11.7376 3.09326 6.18666 8.64425 6.18666 15.4589C6.14181 25.4271 17.1927 33.4064 17.6629 33.7389ZM18.56 6.1866C23.6779 6.1866 27.84 10.3487 27.84 15.4743C27.8725 22.3384 21.0532 28.5019 18.56 30.5234C16.0683 28.5004 9.24751 22.3353 9.27999 15.4666C9.27999 10.3487 13.4421 6.1866 18.56 6.1866Z"
                  fill="url(#paint1_linear_370_915)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_370_915"
                    x1="18.56"
                    y1="3.09326"
                    x2="18.56"
                    y2="34.0263"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_370_915"
                    x1="18.56"
                    y1="3.09326"
                    x2="18.56"
                    y2="34.0263"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo5}
              </h4>

              <p className="font-paragraph text-[8px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                Miguel Cervantes, CDMX
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className="flex flex-row justify-between items-center text-white gap-[31px]
                  mb-8 lg:hidden"
                  >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isTabletOrMobile?"35":"24"}
            height={isTabletOrMobile?"35":"24"}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isTabletOrMobile?"35":"24"}
            height={isTabletOrMobile?"35":"24"}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isTabletOrMobile?"35":"24"}
            height={isTabletOrMobile?"35":"24"}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isTabletOrMobile?"35":"24"}
            height={isTabletOrMobile?"35":"24"}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isTabletOrMobile?"35":"24"}
            height={isTabletOrMobile?"35":"24"}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
