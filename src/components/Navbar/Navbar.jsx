import Image from 'next/image'
import React from 'react'

function Navbar({}) {
  return (
    <div
      className='w-full h-[133px] flex flex-row justify-around items-center text-white border-b-[1px] border-[#1777BA]'
    >
      <div>
        <Image src='/assets/logonav.png' alt="logo" width={100} height={100} />
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
  );
}

export default Navbar