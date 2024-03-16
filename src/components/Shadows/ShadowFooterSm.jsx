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
    className=' w-full absolute -top-[750px]  -z-10 overflow-hidden lg:hidden'>
       <svg xmlns="http://www.w3.org/2000/svg" width="428" height="1057" viewBox="0 0 428 1057" fill="none">
  <g filter="url(#filter0_f_370_895)">
    <path d="M1023.36 587.589C843.361 415.876 236.838 538.669 -43.924 621.53C-778.74 1174.63 141.923 1130.01 694.107 1038.56C878.855 959.783 1203.35 759.303 1023.36 587.589Z" fill="url(#paint0_linear_370_895)"/>
    <path d="M1023.36 587.589C843.361 415.876 236.838 538.669 -43.924 621.53C-778.74 1174.63 141.923 1130.01 694.107 1038.56C878.855 959.783 1203.35 759.303 1023.36 587.589Z" stroke="black"/>
  </g>
  <defs>
    <filter id="filter0_f_370_895" x="-817.5" y="0.5" width="2394" height="1594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_370_895"/>
    </filter>
    <linearGradient id="paint0_linear_370_895" x1="379.5" y1="501" x2="379.5" y2="1094" gradientUnits="userSpaceOnUse">
      <stop stop-color="#026DAA"/>
      <stop offset="0.761666" stop-color="#005E93"/>
      <stop offset="1" stop-color="#001520"/>
    </linearGradient>
  </defs>
</svg>
    </motion.div>
  )
}

export default ShadowFooter