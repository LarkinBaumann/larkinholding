import React from 'react'
import { motion } from "framer-motion";

function ShadowFooter({inView}) {

   
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
    <motion.div 
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={variants}
    className='hidden lg:flex w-full absolute -top-[500px]  -z-10 overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2240" height="859" viewBox="0 0 1440 859" fill="none">
  <g filter="url(#filter0_f_99_526)">
    <path d="M1371.84 613.152C1206.12 470.18 593.567 494.132 308.003 523.98C-465.341 844.527 453.533 910.384 1009.64 903.244C1199.42 866.119 1537.55 756.124 1371.84 613.152Z" fill="url(#paint0_linear_99_526)"/>
    <path d="M1371.84 613.152C1206.12 470.18 593.567 494.132 308.003 523.98C-465.341 844.527 453.533 910.384 1009.64 903.244C1199.42 866.119 1537.55 756.124 1371.84 613.152Z" stroke="black"/>
  </g>
  <defs>
    <filter id="filter0_f_99_526" x="-489.323" y="0.793945" width="2406.03" height="1403.45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_99_526"/>
    </filter>
    <linearGradient id="paint0_linear_99_526" x1="738.326" y1="482.163" x2="692.54" y2="909.719" gradientUnits="userSpaceOnUse">
      <stop stopColor="#025686"/>
      <stop offset="0.761666" stopColor="#005E93"/>
      <stop offset="1" stopColor="#001520"/>
    </linearGradient>
  </defs>
</svg>
    </motion.div>
  )
}

export default ShadowFooter