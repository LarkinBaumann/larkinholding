import React from 'react'
import { useMediaQuery } from 'react-responsive';

function ShadowQuienesLg() {
    const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
    const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });
  return (
    <div
    className='hidden md:block '
    ><svg xmlns="http://www.w3.org/2000/svg" width="1440" height={isLarge?"900":"600"} viewBox="0 0 1366 847" fill="none">
    <g filter="url(#filter0_f_563_863)">
      <path d="M1812.18 346.195C1501.77 197.529 417.801 206.624 -85.3804 229.755C-1420.52 534.799 217.2 624.084 1202.95 630.595C1535.37 597.74 2122.6 494.862 1812.18 346.195Z" fill="#030C14"/>
      <path d="M1812.18 346.195C1501.77 197.529 417.801 206.624 -85.3804 229.755C-1420.52 534.799 217.2 624.084 1202.95 630.595C1535.37 597.74 2122.6 494.862 1812.18 346.195Z" stroke="black" stroke-width="1.21662"/>
    </g>
    <defs>
      <filter id="filter0_f_563_863" x="-803.848" y="0.757996" width="2919.6" height="845.646" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="107.6" result="effect1_foregroundBlur_563_863"/>
      </filter>
    </defs>
  </svg></div>
  )
}

export default ShadowQuienesLg