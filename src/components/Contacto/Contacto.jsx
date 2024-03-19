import { AppContext } from "@/Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

function Contacto() {
  const { traduccion } = useContext(AppContext);

  
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  

  const variants = isLarge ? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
        staggerChildren: 0.5,
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
        <motion.span
          className="titulo2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          {traduccion.contacto.accent}
        </motion.span>
      </motion.h2>
      <motion.p
        className="w-[289px] lg:w-[930px] text-white text-center text-[12px] lg:text-[25px] font-paragraph leading-[20px] lg:leading-[43px]"
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
          <p className="font-paragraph text-[18px] ">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-paragraph text-[18px] "> hello@relume.io</p>
        </motion.div>
        </a>
        <a href="tel:+5255789945612">	
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
              d="M27.3867 19.0129C27.2432 18.8692 27.0728 18.7551 26.8851 18.6773C26.6975 18.5995 26.4964 18.5594 26.2932 18.5594C26.0901 18.5594 25.889 18.5995 25.7013 18.6773C25.5137 18.7551 25.3433 18.8692 25.1997 19.0129L22.7344 21.4783C21.5914 21.138 19.4585 20.3647 18.1067 19.0129C16.7549 17.6611 15.9816 15.5283 15.6413 14.3853L18.1067 11.9199C18.2505 11.7764 18.3645 11.606 18.4423 11.4183C18.5202 11.2307 18.5602 11.0295 18.5602 10.8264C18.5602 10.6233 18.5202 10.4222 18.4423 10.2345C18.3645 10.0469 18.2505 9.87644 18.1067 9.73292L11.9201 3.54626C11.7766 3.4025 11.6061 3.28845 11.4185 3.21064C11.2308 3.13283 11.0297 3.09277 10.8266 3.09277C10.6234 3.09277 10.4223 3.13283 10.2347 3.21064C10.047 3.28845 9.87659 3.4025 9.73308 3.54626L5.53852 7.74082C4.95078 8.32855 4.6198 9.13591 4.63217 9.96028C4.66774 12.1627 5.25084 19.8126 11.2797 25.8415C17.3087 31.8704 24.9585 32.4519 27.1625 32.489H27.2058C28.0224 32.489 28.7942 32.1673 29.3788 31.5827L33.5734 27.3881C33.7172 27.2446 33.8312 27.0742 33.909 26.8865C33.9868 26.6989 34.0269 26.4978 34.0269 26.2946C34.0269 26.0915 33.9868 25.8904 33.909 25.7027C33.8312 25.5151 33.7172 25.3447 33.5734 25.2011L27.3867 19.0129ZM27.1903 29.3941C25.2601 29.3617 18.6558 28.8435 13.4667 23.6529C8.26065 18.4468 7.75644 11.8194 7.7255 9.9278L10.8266 6.82674L14.8263 10.8264L12.8264 12.8263C12.6446 13.0079 12.511 13.232 12.4375 13.4783C12.3641 13.7246 12.3531 13.9853 12.4057 14.2368C12.4428 14.4147 13.3507 18.6324 15.9182 21.1999C18.4857 23.7674 22.7034 24.6753 22.8813 24.7124C23.1327 24.7665 23.3937 24.7564 23.6402 24.6832C23.8867 24.6099 24.1108 24.4758 24.2918 24.2932L26.2932 22.2934L30.2929 26.2931L27.1903 29.3941Z"
              fill="url(#paint0_linear_224_708)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_224_708"
                x1="19.3294"
                y1="3.09277"
                x2="19.3294"
                y2="32.489"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1777BA" />
                <stop offset="1" stopColor="#8FAFF1" />
              </linearGradient>
            </defs>
          </svg>
          <h4 className="font-bold font-header text-[23px] md:text-[17px]">
            {traduccion.contacto.titulo2}
          </h4>
          <p className="font-paragraph text-[18px] ">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-paragraph text-[18px] "> +1 (555) 000-0000</p>
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
          <p className="font-paragraph text-[18px] ">123 Sample St, Sydney </p>
          <p className="font-paragraph text-[18px] ">NSW 2000 AU</p>
        </motion.div>
        </a>
      </motion.div>

      <div className="w-full h-full flex flex-col gap-[9px] md:gap-[15px] items-center">
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
          className="w-full md:w-[530px] lg:w-[930px] lg:hidden text-white text-center text-[12px] md:text-[17px] lg:text-[25px] font-paragraph leading-[20px] md:leading-[27px] lg:leading-[43px]"
          initial="hidden"
          animate={inView2? "visible" : "hidden"}
          variants={variants}
        >
          {traduccion.contacto.paragraph}
        </motion.p>
        <div className="w-full h-full flex lg:hidden flex-row justify-center items-center gap-[14px]">
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="mailto:correo@hotmail.com">
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

              <p className="font-paragraph text-[12px] md:text-[17px] text-center  md:w-[120px] ">
                {" "}
                hello@relume.io
              </p>
            </motion.div>
            </a>
          </div>
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="tel:+5255789945612">
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
                  d="M27.3867 19.0132C27.2432 18.8694 27.0728 18.7554 26.8851 18.6776C26.6975 18.5997 26.4964 18.5597 26.2932 18.5597C26.0901 18.5597 25.889 18.5997 25.7013 18.6776C25.5137 18.7554 25.3433 18.8694 25.1997 19.0132L22.7344 21.4786C21.5914 21.1383 19.4585 20.365 18.1067 19.0132C16.7549 17.6614 15.9816 15.5285 15.6413 14.3855L18.1067 11.9202C18.2505 11.7766 18.3645 11.6062 18.4423 11.4186C18.5202 11.2309 18.5602 11.0298 18.5602 10.8267C18.5602 10.6235 18.5202 10.4224 18.4423 10.2348C18.3645 10.0471 18.2505 9.87668 18.1067 9.73317L11.9201 3.5465C11.7766 3.40275 11.6061 3.2887 11.4185 3.21088C11.2308 3.13307 11.0297 3.09302 10.8266 3.09302C10.6234 3.09302 10.4223 3.13307 10.2347 3.21088C10.047 3.2887 9.87659 3.40275 9.73308 3.5465L5.53852 7.74106C4.95078 8.3288 4.6198 9.13616 4.63217 9.96053C4.66774 12.163 5.25084 19.8128 11.2797 25.8417C17.3087 31.8706 24.9585 32.4522 27.1625 32.4893H27.2058C28.0224 32.4893 28.7942 32.1676 29.3788 31.5829L33.5734 27.3884C33.7172 27.2449 33.8312 27.0744 33.909 26.8868C33.9868 26.6991 34.0269 26.498 34.0269 26.2949C34.0269 26.0917 33.9868 25.8906 33.909 25.703C33.8312 25.5153 33.7172 25.3449 33.5734 25.2014L27.3867 19.0132ZM27.1903 29.3944C25.2601 29.3619 18.6558 28.8438 13.4667 23.6532C8.26065 18.4471 7.75644 11.8196 7.7255 9.92805L10.8266 6.82698L14.8263 10.8267L12.8264 12.8265C12.6446 13.0082 12.511 13.2323 12.4375 13.4785C12.3641 13.7248 12.3531 13.9855 12.4057 14.2371C12.4428 14.4149 13.3507 18.6327 15.9182 21.2002C18.4857 23.7676 22.7034 24.6755 22.8813 24.7126C23.1327 24.7667 23.3937 24.7567 23.6402 24.6834C23.8867 24.6102 24.1108 24.4761 24.2918 24.2935L26.2932 22.2936L30.2929 26.2933L27.1903 29.3944Z"
                  fill="url(#paint0_linear_370_913)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_370_913"
                    x1="19.3294"
                    y1="3.09302"
                    x2="19.3294"
                    y2="32.4893"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo2}
              </h4>

              <p className="font-paragraph text-[12px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                {" "}
                +52 5523 5652
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

              <p className="font-paragraph text-[12px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                123 Sample St,
              </p>
            </motion.div>
            </a>
          </div>
        </div>
        <div className="w-full h-full flex lg:hidden flex-row justify-center items-center gap-[14px]">
          <div
            className="w-[103px] md:w-[200px] lg:w-[302px] h-[108px] md:h-[150px] lg:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]"
            style={{ background: "rgba(11, 32, 46, 0.30)" }}
          >
            <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer">
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
                  d="M27.3867 19.0132C27.2432 18.8694 27.0728 18.7554 26.8851 18.6776C26.6975 18.5997 26.4964 18.5597 26.2932 18.5597C26.0901 18.5597 25.889 18.5997 25.7013 18.6776C25.5137 18.7554 25.3433 18.8694 25.1997 19.0132L22.7344 21.4786C21.5914 21.1383 19.4585 20.365 18.1067 19.0132C16.7549 17.6614 15.9816 15.5285 15.6413 14.3855L18.1067 11.9202C18.2505 11.7766 18.3645 11.6062 18.4423 11.4186C18.5202 11.2309 18.5602 11.0298 18.5602 10.8267C18.5602 10.6235 18.5202 10.4224 18.4423 10.2348C18.3645 10.0471 18.2505 9.87668 18.1067 9.73317L11.9201 3.5465C11.7766 3.40275 11.6061 3.2887 11.4185 3.21088C11.2308 3.13307 11.0297 3.09302 10.8266 3.09302C10.6234 3.09302 10.4223 3.13307 10.2347 3.21088C10.047 3.2887 9.87659 3.40275 9.73308 3.5465L5.53852 7.74106C4.95078 8.3288 4.6198 9.13616 4.63217 9.96053C4.66774 12.163 5.25084 19.8128 11.2797 25.8417C17.3087 31.8706 24.9585 32.4522 27.1625 32.4893H27.2058C28.0224 32.4893 28.7942 32.1676 29.3788 31.5829L33.5734 27.3884C33.7172 27.2449 33.8312 27.0744 33.909 26.8868C33.9868 26.6991 34.0269 26.498 34.0269 26.2949C34.0269 26.0917 33.9868 25.8906 33.909 25.703C33.8312 25.5153 33.7172 25.3449 33.5734 25.2014L27.3867 19.0132ZM27.1903 29.3944C25.2601 29.3619 18.6558 28.8438 13.4667 23.6532C8.26065 18.4471 7.75644 11.8196 7.7255 9.92805L10.8266 6.82698L14.8263 10.8267L12.8264 12.8265C12.6446 13.0082 12.511 13.2323 12.4375 13.4785C12.3641 13.7248 12.3531 13.9855 12.4057 14.2371C12.4428 14.4149 13.3507 18.6327 15.9182 21.2002C18.4857 23.7676 22.7034 24.6755 22.8813 24.7126C23.1327 24.7667 23.3937 24.7567 23.6402 24.6834C23.8867 24.6102 24.1108 24.4761 24.2918 24.2935L26.2932 22.2936L30.2929 26.2933L27.1903 29.3944Z"
                  fill="url(#paint0_linear_370_913)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_370_913"
                    x1="19.3294"
                    y1="3.09302"
                    x2="19.3294"
                    y2="32.4893"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1777BA" />
                    <stop offset="1" stopColor="#8FAFF1" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="font-bold font-header text-[12px] md:text-[17px] text-center">
                {traduccion.contacto.titulo4}
              </h4>

              <p className="font-paragraph text-[12px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                {" "}
                +52 5523 5652
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

              <p className="font-paragraph text-[12px] md:text-[17px] text-center w-[83px] md:w-[120px] ">
                123 Sample St,
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
