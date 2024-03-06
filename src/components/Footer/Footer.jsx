import Image from 'next/image'
import React from 'react'
import ShadowFooter from '../Shadows/shadowFooter'

function Footer() {
  return (
    <div className='w-full h-full relative z-10 over'>
      <ShadowFooter/>
    <div
    className='w-full h-[327px] flex flex-row justify-between items-center text-white bg-[#0e192170]  ' 
    >
     

      <div className='w-full flex flex-row '>
        <div className='w-[227px] h-[203px]'>
          <Image src='/assets/logoHolding.png' alt="logo" width={100} height={100} className='w-full h-full'/>
        </div>
        <div className='h-[203px] flex flex-col justify-between'>
          <div className='flex flex-col'>
              <p>Dirección</p>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
          </div>
          <div className='flex flex-col'>
            <p>Contacto</p>
            <p>1800 123 4567</p>
            <p>info@relume.io</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <span>icono1</span>
            <span>icono1</span>
            <span>icono1</span>
            <span>icono1</span>
            <span>icono1</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row '>
      <div className='w-[227px] h-[203px]'>
          <Image src='/images/wechatFooter.png' alt="logo" width={100} height={100} className='w-full h-full'/>
        </div>
      <div className='w-[227px] h-[203px]'>
          <Image src='/images/wechatFooter.png' alt="logo" width={100} height={100} className='w-full h-full'/>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Footer