import React from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function ShadowAcerca({inView}) {
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
        animate={"visible"}
        variants={variants}
    className='w-full  absolute top-[500px] -left-[450px] lg:top-[200px] lg:left-[150px] -z-20  lg:-z-10'>
        <svg width="984" height={isTabletOrMobile?"650":"1054"} viewBox="0 0 984 1054" fill="none" xmlns="http://www.w3.org/2000/svg">

<g filter="url(#filter0_f_224_634)">
<path d="M588.3 814.371L378.95 802.676C283.332 797.335 218.048 703.746 246.06 612.166L288.796 472.445C293.421 457.325 300.445 443.047 309.601 430.156L400.954 301.533C473.243 199.752 631.388 228.123 663.789 348.685L739.049 628.724C765.138 725.797 688.661 819.978 588.3 814.371Z" fill="#005E93"/>
</g>
<defs>
<filter id="filter0_f_224_634" x="0.449661" y="0.276001" width="982.823" height="1053.41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="119.536" result="effect1_foregroundBlur_224_634"/>
</filter>
</defs>
</svg>

    </motion.div>
  )
}

export default ShadowAcerca