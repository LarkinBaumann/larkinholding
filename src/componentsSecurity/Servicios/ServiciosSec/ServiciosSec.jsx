import React, { useContext } from 'react'
import Carrousel from './Carrousel'
import ShadowTop from './Shadows/ShadowTop'
import Image from 'next/image'
import CarrouselLg from './CarrouselLg'
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'

function ServiciosSec() {
  const {traduccion} = useContext(AppContextSecurity)
  return (
    <div
    className='w-full h-[600px] md:h-[700px] lg:h-full flex flex-col items-center justify-center text-white px-4 pt-8 gap-[37px]  relative'
    >
      
      <ShadowTop/>
        <h2 className='text-[35px] md:text-[40px] xl:text-[96px] font-header font-extrabold z-10'>{traduccion.servicio.title}</h2>
        <Carrousel/>
        <CarrouselLg/>
        </div>
  )
}

export default ServiciosSec