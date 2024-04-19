import React from 'react'
import { useMediaQuery } from 'react-responsive';

function ShadowTop() {

  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
    const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  return (
    <div className='absolute  -top-[230px] z-10'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="1440" height={"552"} viewBox="0 0 1000 552" fill="none">
    <g filter="url(#filter0_f_415_673)">
      <path d="M1435.96 257.709C1122.07 155.618 40.5876 131.406 -460.92 132.061C-1784.89 287.08 -148.073 388.469 835.831 419.786C1166.66 408.298 1749.84 359.799 1435.96 257.709Z" fill="#020202"/>
    </g>
    <defs>
      <filter id="filter0_f_415_673" x="-1088.89" y="0.14859" width="2746.63" height="551.537" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="65.95" result="effect1_foregroundBlur_415_673"/>
      </filter>
    </defs>
  </svg>
  </div>
  )
}

export default ShadowTop