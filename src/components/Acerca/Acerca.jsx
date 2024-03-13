import React, { useContext } from 'react'
import ShadowAcerca from '../Shadows/ShadowAcerca'
import { AppContext } from '@/Context/AppContext'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';

function Acerca() {

  const{traduccion}= useContext(AppContext)

  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const { ref2, inView2 } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <div
     className='w-full h-full justify-between items-center flex flex-col-reverse lg:flex-row gap-[45px] '>

    <div className='w-full grid grid-cols-2 gap-x-4 gap-y-8'>
      <div className='w-[302px] h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
        <div className='flex'>

      <CountUp className='titulo2 text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo1)} duration={5} />
      <h4 className='titulo2 text-[76px] font-black font-header'>{traduccion.acerca.complemento1}</h4>
        </div>



        <div className='text-white font-header text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion1}
  </Fade>
</div>
      </div>
      <div className='w-[302px] h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex'>

<CountUp className='titulo2 text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo2)} duration={5} />
<h4 className='titulo2 text-[76px] font-black font-header'>{traduccion.acerca.complemento2}</h4>
  </div>        <div className='text-white font-header text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion2}
  </Fade>
</div>
      </div>
      <div className='w-[302px] h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex'>

      {inView ? <CountUp className='titulo2 text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo3)} duration={5} /> : <></>}<h4 className='titulo2 text-[76px] font-black font-header'>{traduccion.acerca.complemento3}</h4>
  </div>
  <div className='text-white font-header text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion3}
  </Fade>
</div>
      </div>
      <div className='w-[302px] h-[228px] border-solid border-[0.723px] border-[#005E93] rounded-[15.901px 15.901px 15.901px 0px] rounded-[16px] flex flex-col justify-center px-[34px] py-[56px]' style={{ background: 'rgba(11, 32, 46, 0.30)' }}>
      <div className='flex' ref={ref}>

      {inView ? <CountUp className='titulo2 text-[76px] font-black font-header' end={parseInt(traduccion.acerca.titulo4)} duration={5} /> : <></>}
<h4 className='titulo2 text-[76px] font-black font-header'>{traduccion.acerca.complemento4}</h4>
  </div>
  <div className=' text-white font-header text-[23px] leading-[31px]'>
  <Fade direction="left" cascade duration={200}>
    {traduccion.acerca.descripcion4}
  </Fade>
</div>
      </div>
      
    </div>
    <div className='w-full h-full flex flex-col justify-center gap-[16px]'>
      <h2 className='text-[47px] font-black text-white leading-[49px]'>
      {traduccion.acerca.header} <span className='titulo2'>{traduccion.acerca.accent}</span>
      </h2>
      <p className='text-white font-paragraph leading-[34px] text-[20px] w-[569px]'>{traduccion.acerca.paragraph}</p>
    </div>
    

  </div>
  )
}

export default Acerca