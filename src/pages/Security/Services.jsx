import Elige from '@/componentsSecurity/Servicios/Elige/Elige'
import Hero from '@/componentsSecurity/Servicios/Hero/Hero'
import ServiciosSec from '@/componentsSecurity/Servicios/ServiciosSec/ServiciosSec'
import Image from 'next/image'
import React from 'react'

function Servicios() {
  return (
    <div className='overflow-hidden max-w-[1440px] min-w-sm mx-auto'>
      <Hero/>
      <div className='w-full h-full relative'>

      <ServiciosSec/>
      <Image src="/assetsSecurity/servicios/serviciossec.png" width={100} height={100} alt="Hero Servicios" className='w-full h-full absolute top-0 -z-20'/>
      </div>
      <Elige/>
    </div>
  )
}

export default Servicios