import Image from 'next/image'
import React, { useContext } from 'react'
import Mapa from './Mapa'
import ShadowTop from './Shadows/ShadowTop'
import ShadowMapa from './Shadows/ShadowMapa'
import ShadowTopLg from './Shadows/ShadowTopLg'
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'

function Servicio() {
  const{traduccion} = useContext(AppContextSecurity)
  return (
    <div className='text-white w-full h-full flex  flex-col gap-[30px] relative'>
      <Image src="/assetsSecurity/home/servicios/fondo2.png"  width={4000} height={4000} className='w-full h-[350px] absolute ' alt='fondo servicio'/>
      <ShadowTop/>
      <ShadowTopLg/>
      <div className='w-full h-full flex lg:hidden flex-row justify-center px-4 '>
        <div className='h-[250px] flex flex-col justify-end relative '>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] h-[126px]' />
          <div className='flex flex-col text-center w-full absolute top-[65%] text-[9px] sm:text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader1}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph1}</p>
          </div>
        </div>
        <div className='h-full flex flex-col justify-start relative z-10'>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000}
          className='w-[182px] h-[197px]'
          />
          <div className='flex flex-col text-center w-full absolute top-[35%] text-[10px] sm:text-[14px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader2}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph2}</p>
          </div>
        </div>
        <div className=' flex flex-col justify-end relative'>
          <Image src="/assetsSecurity/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} 
          className='w-[123px] h-[126px]'
          />
           <div className='flex flex-col text-center w-full absolute top-[65%] text-[9px] sm:text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>{traduccion.quienesInicio.escudoHeader3}</p>
          <p className='font-light'>{traduccion.quienesInicio.escudoParagraph3}</p>
          </div>
        </div>

      </div>
      <div className='w-full z-20 relative'>
       
        <ShadowMapa/>
        <Image src="/assetsSecurity/home/servicios/fondo.png" alt="Escudo" width={1000} height={1000} className='w-full h-[570px] absolute -z-20' />

      <Mapa/>
      </div>
    </div>
  )
}

export default Servicio