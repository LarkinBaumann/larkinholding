import Image from 'next/image'
import React from 'react'
import Acerca from '../Acerca/Acerca'

function Hero() {
  return (
    <div className='w-full h-[1190px] flex flex-col px-14 '>
     
    <div className='w-full h-full flex flex-col justify-center gap-[23px]'>
      <Image src='/assets/logoHero.png' alt="hero" width={100} height={100} className='w-[497px]' />
      <h2 className='w-[656px] text-white font-roboto text-8xl font-bold leading-[87.55px] titulo2'>
        Investment & Finances
      </h2>
      <p className='w-[556px] text-white font-roboto text-xl font-semibold leading-[38.726px]'>
        Potencia tus inversiones con nuestra gestión financiera experta. Confía en nuestro equipo para optimizar tu cartera y asegurar un futuro financiero sólido.
      </p>  
    </div>
    <Acerca/>
    </div>
  )
}

export default Hero