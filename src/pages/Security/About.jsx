import AcercaDe from '@/componentsSecurity/Acerca/AcercaDe/AcercaDe'
import Hero from '@/componentsSecurity/Acerca/Hero/Hero'
import Valores from '@/componentsSecurity/Acerca/Valores/Valores'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='w-full h-full px-4 relative overflow-hidden max-w-[1440px] min-w-sm mx-auto'>
      <div className='w-full h-full absolute -z-10 '>
      <Image src={'/assetsSecurity/acerca/hero/fondo2.png'} alt='fondo' width={10000} height={10000} className='w-full h-full ' />
      </div>
        <Hero/>
        <AcercaDe/>
        <Valores/>
    </div>
  ) 
}

export default About