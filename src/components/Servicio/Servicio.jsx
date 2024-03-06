import Image from "next/image";
import React from "react";
import ShadowServicio from "../Shadows/ShadowServicio";

function Servicio() {
  return (
    <div className="w-full h-[830px] flex flex-row justify-center items-center px-14 relative z-10 ">
<ShadowServicio/>
    <div className="w-full h-[604px] flex flex-row justify-around text-white bg-[#0E192187] items-center rounded-[22px]
      ">
      <div className="">
        <div className="w-[557px] h-[539px]">
          <Image src='/images/mapa.png' alt="mapa" width={100} height={100} className='w-full h-full'/>
        </div>
      </div>
      <div className=" flex flex-col gap-[8px]">
        <h2 className="font-header w-[532px] text-[40px] font-bold leading-[44px]">
          Tus Socios en Todo México:
          <br/>
          <span className="titulo2">Servicios a lo Largo y Ancho del País</span>
        </h2>
        <p className="w-[532px]  font-paragraph text-[20px] leading-[34px] ">Cobertura en toda la República Mexicana,  nuestro equipo está listo para atender tus necesidades donde sea que estés. Confía en nosotros para proporcionarte soluciones confiables y de calidad en todo el país.</p>
      </div>
    </div>
   
      
    
        </div>
  );
}

export default Servicio;
