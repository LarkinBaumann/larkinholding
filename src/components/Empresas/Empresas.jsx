import Image from 'next/image'
import React, { useState } from 'react'

function Empresas() {

  const empresas=[
    {
      id:1,
      nombre:'Seguridad privada',
      imagen:'/images/empresas.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:2,
      nombre:'Seguridad privada',
      imagen:'/images/empresas.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:3,
      nombre:'Seguridad privada',
      imagen:'/images/empresas.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:4,
      nombre:'Seguridad privada',
      imagen:'/images/empresas.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:5,
      nombre:'Seguridad privada',
      imagen:'/images/empresas.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    }
  ]

const [seleccion, setSeleccion] = useState(0)

  return (
    <div className='h-[1024px] w-full  text-white  relative z-20'>
      <Image src='/images/empresas.png' width={100} height={100} alt='fondo-empresas' className='w-full h-full absolute -z-10' />
      <div className='grid grid-cols-6 w-full h-full px-14 items-center gap-9 '>
        {
          empresas.map((empresa,index)=>(
          <div key={index}  className={seleccion != index?'w-full h-[774px] rounded-[22px] bg-red-500 relative cursor-pointer':'col-span-2 h-[774px] rounded-[22px] bg-red-500'}
          onClick={()=>setSeleccion(index)}
          >
        <div className={seleccion != index ?'absolute bg-[#4084d2] w-[50%] h-[250px] bottom-0': "hidden"}>
          <h3 className='text-white -rotate-90 font-header font-bold text-[28px] absolute bottom-14 -left-[25%] uppercase '>Seguridad<br></br> privada</h3>
        </div>
        </div>
          ))
        }

      </div>
    </div>
  )
}

export default Empresas