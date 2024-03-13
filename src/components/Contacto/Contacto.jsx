import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contacto() {
  const { traduccion } = useContext(AppContext);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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
        staggerChildren: 0.5 
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
    <div
      id="Contacto"
      className="w-full h-[604px] flex flex-col  justify-center items-center px-14 gap-[15px] relative z-20"
    >
      <motion.h2
        className="text-white font-roboto text-[65px] font-bold leading-[87.55px] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {traduccion.contacto.header}
        <br />
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
      
        className="w-[930px] text-white text-center text-[25px] font-paragraph leading-[43px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsText}
      >
        {traduccion.contacto.paragraph}
      </motion.p>
      <motion.div
      ref={ref}
      className="w-[930px] flex flex-row justify-around items-center"
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={containerVariants}
      >
        <motion.div
        variants={childVariants}
        className=" flex flex-col  gap-[9px] text-white">
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
          <h4 className="font-bold font-header text-[23px]">
            {traduccion.contacto.titulo}
          </h4>
          <p className="font-paragraph text-[18px] ">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-paragraph text-[18px] "> hello@relume.io</p>
        </motion.div>
        <motion.div
        variants={childVariants}
        className=" flex flex-col gap-[9px]  text-white">
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
          <h4 className="font-bold font-header text-[23px]">
            {traduccion.contacto.titulo2}
          </h4>
          <p className="font-paragraph text-[18px] ">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-paragraph text-[18px] "> +1 (555) 000-0000</p>
        </motion.div>
        <motion.div
        variants={childVariants}
        className=" flex flex-col gap-[9px]  text-white">
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
          <h4 className="font-bold font-header text-[23px]">
            {traduccion.contacto.titulo3}
          </h4>
          <p className="font-paragraph text-[18px] ">123 Sample St, Sydney </p>
          <p className="font-paragraph text-[18px] ">NSW 2000 AU</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contacto;
