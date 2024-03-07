import Image from 'next/image'
import React from 'react'

function Navbar({}) {
  return (
    <div className='w-full h-[133px] flex flex-col px-14'>

    <div
      className='w-full h-full flex flex-row justify-around items-center text-white '
      >
      <div>
        <Image src='/assets/logonav.png' alt="logo" width={1000} height={1000} className='w-[227px] h-[60px] object-cover' />
      </div>
      <div className='flex flex-row items-center justify-center gap-8'>
        <span>Nosotros</span>
        <span>Experiencia</span>
        <span>Empresas</span>
        <span className=''>Idioma <span
        >{'<'}</span></span>
      </div>
      <div>
        <button className='w-130 h-49 px-8 py-2 flex justify-center items-center gap-8 flex-shrink-0 bg-[#005E93]'>Contacto</button>
          
      </div>
    </div>
    <div className='h-[1px] bg-[#1777BA]'/>
        </div>
  );
}

export default Navbar