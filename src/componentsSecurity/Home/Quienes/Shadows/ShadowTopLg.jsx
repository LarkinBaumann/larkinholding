import React from 'react'
import { useMediaQuery } from 'react-responsive';

function ShadowTopLg() {
  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });
  return (
    <div className='hidden md:block absolute -top-[210px] z-10 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height={isLarge?"437":"320"} viewBox="0 0 1366 437" fill="none">
  <g filter="url(#filter0_f_563_849)">
    <path d="M1513.76 145.085C1278.65 61.7114 478.163 96.007 107.308 123.576C-867.254 346.849 346.172 358.505 1074.7 336.425C1319.02 307.384 1748.88 228.459 1513.76 145.085Z" fill="#020C13"/>
    <path d="M1513.76 145.085C1278.65 61.7114 478.163 96.007 107.308 123.576C-867.254 346.849 346.172 358.505 1074.7 336.425C1319.02 307.384 1748.88 228.459 1513.76 145.085Z" stroke="black" stroke-width="1.21662"/>
  </g>
  <defs>
    <filter id="filter0_f_563_849" x="-348.768" y="0.083519" width="2023.13" height="436.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="45.95" result="effect1_foregroundBlur_563_849"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default ShadowTopLg