import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


function ShadowServicio({inView}) {

 
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div className='w-full absolute -bottom-[450px] -z-10 overflow-hidden '
    
    initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="2240" height="1832" viewBox="0 0 1440 1832" fill="none ">
  <g filter="url(#filter0_f_99_522)">
    <path d="M1368.36 622.196C1188.36 381.855 581.838 553.724 301.076 669.701C-433.74 1443.86 486.923 1381.4 1039.11 1253.4C1223.85 1143.14 1548.35 862.538 1368.36 622.196Z" fill="url(#paint0_linear_99_522)"/>
    <path d="M1368.36 622.196C1188.36 381.855 581.838 553.724 301.076 669.701C-433.74 1443.86 486.923 1381.4 1039.11 1253.4C1223.85 1143.14 1548.35 862.538 1368.36 622.196Z" stroke="black"/>
  </g>
  <defs>
    <filter id="filter0_f_99_522" x="-472.5" y="0.5" width="2394" height="1831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_99_522"/>
    </filter>
    <linearGradient id="paint0_linear_99_522" x1="724.5" y1="501" x2="724.5" y2="1331" gradientUnits="userSpaceOnUse">
      <stop stopColor="#026DAA"/>
      <stop offset="0.761666" stopColor="#005E93"/>
      <stop offset="1" stopColor="#001520"/>
    </linearGradient>
  </defs>
</svg>
    </motion.div>
  )
}

export default ShadowServicio