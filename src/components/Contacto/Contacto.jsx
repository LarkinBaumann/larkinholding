import React from 'react'

function Contacto() {
  return (
    <div className='w-full h-[604px] flex flex-col  justify-center items-center px-14 gap-[15px]'>
      <h2 className='text-white font-roboto text-[65px] font-bold leading-[87.55px] text-center'>
      Inicia tu camino, hoy mismo.
      <br/>
<span className='titulo2'>
  Contáctanos.
  </span>
      </h2>
      <p className='w-[930px] text-white text-center text-[25px] font-paragraph leading-[43px]'>
      En nuestro equipo, estamos aquí para ayudarte a dar el primer paso hacia tus metas. Te ofrecemos el impulso que necesitas para iniciar este emocionante camino hacia el éxito.
      </p>
      <div className='w-[930px] flex flex-row justify-around items-center'>
        <div className=' flex flex-col  gap-[9px] text-white'>
          <span>Icono</span>
          <h4 className='font-bold font-header text-[23px]'>E-mail</h4>
          <p className='font-paragraph text-[18px] '> Lorem ipsum dolor sit amet.</p>
          <p className='font-paragraph text-[18px] '> hello@relume.io</p>
        </div>
        <div className=' flex flex-col gap-[9px]  text-white'>
          <span>Icono</span>
          <h4 className='font-bold font-header text-[23px]'>Telefóno</h4>
          <p className='font-paragraph text-[18px] '> Lorem ipsum dolor sit amet.</p>
          <p className='font-paragraph text-[18px] '> +1 (555) 000-0000</p>
        </div>
        <div className=' flex flex-col gap-[9px]  text-white'>
          <span>Icono</span>
          <h4 className='font-bold font-header text-[23px]'>Ubicación</h4>
          <p className='font-paragraph text-[18px] '>123 Sample St, Sydney </p>
          <p className='font-paragraph text-[18px] '>
NSW 2000 AU</p>
        </div>
      </div>

    </div>
  )
}

export default Contacto