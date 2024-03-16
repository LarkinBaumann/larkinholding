import React from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function ShadowAcercaSm2({inView}) {
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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <motion.div
    initial="hidden"
        animate="visible"
        variants={variants}
        className='w-full h-full lg:hidden absolute top-[100px] -right-[200px]  -z-20  '>
        <svg xmlns="http://www.w3.org/2000/svg" width="307" height={isTabletOrMobile?"650":"1054"}  viewBox="0 0 307 768" fill="none">
  <g filter="url(#filter0_f_368_828)">
    <path d="M259.004 512.796L194.87 363.523C165.577 295.343 207.976 217.755 281.176 205.584L392.857 187.014C404.943 185.005 417.272 184.95 429.375 186.854L550.135 205.842C645.693 220.868 680.587 340.373 608.128 404.457L439.821 553.312C381.48 604.911 289.749 584.357 259.004 512.796Z" fill="#005E93" fill-opacity="0.65"/>
  </g>
  <defs>
    <filter id="filter0_f_368_828" x="0.264908" y="0.22072" width="831.815" height="767.063" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="92.6224" result="effect1_foregroundBlur_368_828"/>
    </filter>
  </defs>
</svg>

    </motion.div>
  )
}

export default ShadowAcercaSm2