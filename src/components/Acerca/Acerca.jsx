import React, { useContext } from 'react'
import ShadowAcerca from '../Shadows/ShadowAcerca'
import { AppContext } from '@/Context/AppContext'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


function Acerca() {

  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });
  

  const{traduccion}= useContext(AppContext)

  const { ref, inView } = useInView({
    triggerOnce: true, 
  });
  const { ref2, inView2 } = useInView({
    triggerOnce: true, 
  });
  const variants = isLarge ? {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  }
  :
  {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5, ease: "easeOut" } },
  };
  

  return (
    <div
     className='w-full h-full justify-between items-center flex flex-col-reverse lg:flex-row gap-[45px] '>

    <div className='w-full md:w-[580px] lg:w-full grid grid-cols-2 gap-x-0 lg:gap-x-4 gap-y-8 place-items-center lg:place-items-start z-30'>
      
      <div className='w-[161px] md:w-[250px] lg:w-[220px] xl:w-[260px] 2xl:w-[302px]  h-[121px]
      md:h-[180px] xl:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
        <div className='flex'>

      <CountUp className='titulo2 text-[36px] md:text-[50px] xl:text-[76px]   font-black font-header' end={parseInt(traduccion.acerca.titulo1)} duration={5} />
      <h4 className='titulo2 text-[36px] md:text-[50px] xl:text-[76px]  font-black font-header'>{traduccion.acerca.complemento1}</h4>
        </div>



        <div className='text-white font-header  md:text-[17px] text-[12px] xl:text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion1}
  </Fade>
</div>
      </div>
      <div className='w-[161px] md:w-[250px] lg:w-[220px] xl:w-[260px] 2xl:w-[302px]  h-[121px]
      md:h-[180px] xl:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex'>

<CountUp className='titulo2 text-[36px] md:text-[50px] xl:text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo2)} duration={5} />
<h4 className='titulo2 text-[36px] md:text-[50px] xl:text-[76px]  font-black font-header'>{traduccion.acerca.complemento2}</h4>
  </div>        <div className='text-white font-header md:text-[17px] text-[12px] xl:text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion2}
  </Fade>
</div>
      </div>
      <div className='w-[161px] md:w-[250px] lg:w-[220px] xl:w-[260px] 2xl:w-[302px]  h-[121px]
      md:h-[180px] xl:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex'>

      {inView ? <CountUp className='titulo2 text-[36px] md:text-[50px]  xl:text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo3)} duration={5} /> : <></>}<h4 className='titulo2 text-[36px] md:text-[50px] xl:text-[76px]  font-black font-header'>{traduccion.acerca.complemento3}</h4>
  </div>
  <div className='text-white font-header text-[12px] md:text-[17px] lg:text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion3}
  </Fade>
</div>
      </div>
      <div className='w-[161px] md:w-[250px] lg:w-[220px] xl:w-[260px] 2xl:w-[302px]  h-[121px]
      md:h-[180px] xl:h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex' ref={ref}>

      {inView ? <CountUp className='titulo2 text-[36px] md:text-[50px] xl:text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo4)} duration={5} /> : <></>}
<h4 className='titulo2 text-[36px] md:text-[50px] xl:text-[76px]  font-black font-header'>{traduccion.acerca.complemento4}</h4>
  </div>
  <div className=' text-white font-header text-[12px] md:text-[17px] lg:text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion4}
  </Fade>
</div>
      </div>
      
    </div>
    <div className='w-full h-full flex flex-col justify-center items-center lg:items-start gap-[16px]'>
    <motion.h2
  className='w-full text-[27px] md:text-[37px] lg:text-[47px] font-black text-white leading-[28px] md:leading-[40px] lg:leading-[49px] text-center lg:text-start md:w-[500px] '
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={variants}
>
  {traduccion.acerca.header} <span className='titulo2'>{traduccion.acerca.accent}</span>
</motion.h2>
      <motion.p className='text-white font-paragraph leading-[20px] md:leading-[27px]  text-center lg:text-left lg:leading-[34px] text-[12px] md:text-[17px] lg:text-[20px] md:w-[556px]  lg:w-[569px]'
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variants}
      >
        {traduccion.acerca.paragraph}</motion.p>
    </div>
    

  </div>
  )
}

export default Acerca