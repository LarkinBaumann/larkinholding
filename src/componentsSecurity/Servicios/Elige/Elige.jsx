import Image from 'next/image'
import React, { useContext } from 'react'
import ShadowTop from './Shadows/ShadowTop'
import ShadowBottom from './Shadows/ShadowBottom'
import ShadowTopLg from './Shadows/ShadowTopLg'
import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'

function Elige() {

  const {traduccion} = useContext(AppContextSecurity)

  

  return (
    <div className='w-full h-[700px] flex flex-col items-center justify-center text-white px-4 relative '>
      <ShadowTop/>
      <ShadowTopLg/>
      <ShadowBottom/>
      <Image src="/assetsSecurity/servicios/elige.png" layout='fill' objectFit='cover' alt="Hero Servicios" className='absolute bottom-0 -z-10'/>
        <div className='w-full h-[524px] lg:h-[600px] flex flex-col lg:flex-row items-center justify-center border-[1px] border-[#1777BA] bg-[#07141C] rounded-[12px] gap-[38px] z-10 '>
            <div className='w-[450px] lg:w-full  flex flex-col items-center justify-center relative'>
                <Image src="/assetsSecurity/servicios/elige/4.png" width={1000}
                height={1000} alt="Elige Servicios" className='w-[72px] lg:w-[165px] h-[72px] lg:h-[165px] absolute bottom-0 left-[20%] lg:left-[5%]'/>
                <Image src="/assetsSecurity/servicios/elige/5.png" width={1000}
                height={1000} alt="Elige Servicios" className='w-[218px] lg:w-[499px] h-[218px] lg:h-[500px]'/>
                <Image src="/assetsSecurity/servicios/elige/6.png" width={1000}
                height={1000} alt="Elige Servicios" className='w-[104px] lg:w-[239px] xl:w-[200px] h-[104px] lg:h-[239px] xl:h-[200px] absolute top-0 right-[15%] lg:-right-[12%] lg:-top-[6%] xl:right-0'/>
            </div>
            <div className='lg:w-full flex flex-col gap-[10px] px-16 lg:px-10'>
            <div className='text-[35px] md:text-[40px] xl:text-[74px] text-center lg:text-left font-extrabold font-header leading-[39px] xl:leading-[81px]'>
                <h2>{traduccion.elige.header} <br/> <span className='tituloServicios3'>{traduccion.elige.accent}</span></h2>
                
            </div>
            <p className='text-center lg:text-left font-paragraph text-[11px] md:text-[20px] font-medium leading-[18px] md:leading-[34px] '>
            {traduccion.elige.paragraph}
            <br/>
            {traduccion.elige.paragraph2}
            </p>

        </div>
        </div>

    </div>
  )
}

export default Elige