import Image from 'next/image'
import React from 'react'

function ShadowMapa() {
  return (
    <div className=' absolute -top-[120px] lg:-top-[250px] -z-10'>
        <svg xmlns="http://www.w3.org/2000/svg"
        className='lg:hidden'
        width="1000" height="362" viewBox="0 0 428 362" fill="none">
  <g filter="url(#filter0_f_415_714)">
    <path d="M673.912 147.525C541.414 84.0682 78.7321 87.9504 -136.046 97.8235C-705.938 228.029 -6.89263 266.14 413.867 268.919C555.756 254.895 806.411 210.982 673.912 147.525Z" fill="#00131F"/>
    <path d="M673.912 147.525C541.414 84.0682 78.7321 87.9504 -136.046 97.8235C-705.938 228.029 -6.89263 266.14 413.867 268.919C555.756 254.895 806.411 210.982 673.912 147.525Z" stroke="black" stroke-width="0.519303"/>
  </g>
  <defs>
    <filter id="filter0_f_415_714" x="-442.718" y="0.0783615" width="1246.21" height="360.957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="45.9281" result="effect1_foregroundBlur_415_714"/>
    </filter>
  </defs>
</svg>
<Image src="/assetsSecurity/home/servicios/ShadowTop3.png"
width={1440} height={1000} alt='shadow' className=''
/>
    </div>
  )
}

export default ShadowMapa