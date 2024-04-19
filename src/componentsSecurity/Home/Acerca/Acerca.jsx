
  import React, { useContext } from 'react'
  import { motion } from 'framer-motion'
  import Button from '../../Button'
  import Image from 'next/image'
  import ShadowTop from './Shadows/ShadowTop'
  import { AppContextSecurity } from '@/ContextSecurity/AppContextSecurity'
  import { useInView } from 'react-intersection-observer';
import Link from 'next/link'


  function Acerca() {
    const {traduccion} = useContext(AppContextSecurity)

    const { ref, inView } = useInView({
      triggerOnce: true, // Cambia a true si solo quieres que la animación se ejecute una vez
    });

    return (
      <div className='w-full h-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between relative lg:px-8 '>
        <ShadowTop/>

        <div className='w-full lg:w-[50%] h-[300px] lg:h-[500px] flex flex-row justify-center items-center relative '>

          <div className='w-full h-[350px] absolute left-[0%] top-[35px] z-0'>
              <Image src='/assetsSecurity/home/acerca/fondo.png' width={2000} height={2000} alt='Acerca de nosotros' className='w-full h-full lg:hidden' />
          </div>
          <div className='w-[700px]  h-[200px] lg:h-full flex flex-col items-center justify-center'>
            <div className='flex w-full justify-center items-center'>


        <div className='w-[222px] lg:w-[354px] h-[189px] lg:h-[300px] translate-x-[30%] xl:translate-x-[0%] lg:-translate-y-[40%] z-20'>
              <Image src='/assetsSecurity/home/acerca/3.png' width={1920} height={1080} alt='Acerca de nosotros' className='w-full h-full' />
          </div>
          <div className='w-[222px] lg:w-[354px] h-[189px] lg:h-[300px] -translate-x-[20%] xl:-translate-x-[40%] translate-y-[20%] lg:-translate-y-[10%]  z-10'>
              <Image src='/assetsSecurity/home/acerca/4.png' fill={true}
            quality={100}
            priority alt='Acerca de nosotros' className='w-full h-full' />
          </div>
            </div>
          </div>
          </div>
          <div className='w-full lg:w-[50%] h-full flex flex-col items-center lg:items-start  justify-center  text-white text-center lg:text-left gap-[15px] px-2 md:pl-4 xl:px-10 z-20'>
              <motion.h2 
                ref={ref}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                className='font-header text-[30px] md:text-[40px] font-extrabold leading-[32px] md:leading-[40px] w-[95%] lg:w-[482px] z-10  '
              >
                  {traduccion.acercaInicio.titulo} <span className='titulo3'>{traduccion.acercaInicio.accent}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-[13px] md:text-[20px] lg:text-[18px] md:leading-[34px] lg:w-[482px] font-paragraph leading-[22px] z-20 px-10 md:px-0 '
              >
                {traduccion.acercaInicio.paragraph}
              </motion.p>
           
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href='/Servicios'>
                <Button
                  text={traduccion.acercaInicio.button}
                  />
                  </Link>
              </motion.div>
             
          </div>
      </div>
    )
  }


export default Acerca