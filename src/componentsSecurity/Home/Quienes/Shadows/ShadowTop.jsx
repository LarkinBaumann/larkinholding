import React from 'react'

function ShadowTop() {
  return (
    <div className='md:hidden absolute -top-[110px] z-10 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="204" viewBox="0 0 1000 204" fill="none">
  <g filter="url(#filter0_f_415_681)">
    <path d="M558.168 72.708C443.427 37.5515 53.3563 50.348 -127.336 61.1407C-601.895 152.311 -10.4854 159.418 344.539 151.574C463.558 139.934 672.91 107.865 558.168 72.708Z" fill="#020307"/>
  </g>
  <defs>
    <filter id="filter0_f_415_681" x="-353.575" y="0.390339" width="994.321" height="202.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="24.65" result="effect1_foregroundBlur_415_681"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default ShadowTop