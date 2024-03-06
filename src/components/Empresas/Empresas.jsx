import Image from 'next/image'
import React, { useState } from 'react'

function Empresas() {

  const empresas=[
    {
      id:1,
      nombre:'Seguridad privada',
      imagen:'/images/empresas/seguridad.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:2,
      nombre:'Real Estate',
      imagen:'/images/empresas/realestate.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:3,
      nombre:'OIL & GAS INDUSTRY',
      imagen:'/images/empresas/oil.png',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros'
    },
    {
      id:4,
      nombre:'INVESTMENT & FINANCES',
      imagen:'/images/empresas/investment.png',
      descripcion:'Alcanza tus metas financieras con nosotros. Maximizamos tus oportunidades de crecimiento y éxito.'
    },
    {
      id:5,
      nombre:'GOLD MINING',
      imagen:'/images/empresas/gold.png',
      descripcion:'Adquisición de minerales preciosos y su procesamiento en nuestras refinadoras de alta tecnología.'
    }
  ]

const [seleccion, setSeleccion] = useState(0)

  return (
    <div className='h-[1024px] w-full  text-white  relative z-20'>
      <Image src='/images/empresas.png' width={100} height={100} alt='fondo-empresas' className='w-full h-full absolute -z-10' />
      <div className='grid grid-cols-8 w-full h-full px-14 items-center gap-9 '>
        {
          empresas.map((empresa,index)=>(
          <div key={index}  className={seleccion != index?'w-full h-[774px] rounded-[22px]  relative cursor-pointer':'col-span-4 h-[774px] rounded-[22px]  '}
          onClick={()=>setSeleccion(index)}
          >
            {
              seleccion == index? 
              <div className='w-full h-full flex flex-col justify-between bg-[
                #183F5C] rounded-t-[22px]'>
                <div className='w-full h-[50%] flex flex-col justify-center items-center '>
                <p className='font-paragraph font-semibold  leading-[48px] text-[36px] w-[491px] h-[192px]'>
                  {empresa.descripcion}
                </p>
                </div>
                <div className='w-full h-[50%] '>
                  <Image src={empresa.imagen} width={100} height={100} alt={empresa.nombre} className='w-full h-full object-cover rounded-b-[22px]'/>
                  </div>
                </div>
              :
              <Image src={empresa.imagen} width={100} height={100} alt={empresa.nombre} className='w-full h-full object-cover rounded-[22px]'/>
            }
        <div className={seleccion != index ?'absolute bg-[#4084d2] w-[50%] h-[250px] bottom-0': "hidden"}>
          <h3 className='text-white -rotate-90 font-header font-bold text-[28px] absolute bottom-14 -left-[25%] uppercase '>{empresa.nombre}</h3>
        </div>
        </div>
          ))
        }

      </div>
    </div>
  )
}

export default Empresas