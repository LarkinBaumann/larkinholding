import React from 'react'

function ShadowTop() {
  return (
    <div className='md:hidden absolute -top-[120px] z-20'>
        <svg xmlns="http://www.w3.org/2000/svg" width="428" height="258" viewBox="0 0 428 258" fill="none">
  <g filter="url(#filter0_f_427_792)">
    <path d="M472.476 99.3065C401.901 58.7232 155.077 69.5978 40.4874 80.1079C-263.74 178.384 109.102 191.715 333.551 186.096C409.265 174.076 543.051 139.89 472.476 99.3065Z" fill="#000206" fill-opacity="0.79"/>
  </g>
  <defs>
    <filter id="filter0_f_427_792" x="-144.482" y="0.0464859" width="707.25" height="257.51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="35.1849" result="effect1_foregroundBlur_427_792"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default ShadowTop