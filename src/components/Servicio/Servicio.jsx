import Image from "next/image";
import React, { useContext } from "react";
import ShadowServicio from "../Shadows/ShadowServicio";
import { AppContext } from "@/Context/AppContext";

function Servicio() {
  const {traduccion} = useContext(AppContext)
  return (
    <div className="w-full h-full relative z-10 ">

      <ShadowServicio/>
    <div className="w-full h-[830px] flex flex-row justify-center items-center px-14 
    max-w-[1444px] mx-auto min-w-sm 
    ">
    <div className="w-full h-[604px] flex flex-row justify-around text-white bg-[#0E192187] items-center rounded-[22px]
      ">
      <div className="">
        <div className="w-[557px] h-[539px]">
          <Image src='/images/mapa.png' alt="mapa" width={1000} height={1000} className='w-full h-full'/>
        </div>
      </div>
      <div className=" flex flex-col gap-[8px]">
        <h2 className="font-header w-[532px] text-[40px] font-bold leading-[44px]">
          {traduccion.servicio.header}
          <br/>
          <span className="titulo2">{traduccion.servicio.accent}</span>
        </h2>
        <p className="w-[532px]  font-paragraph text-[20px] leading-[34px] ">{traduccion.servicio.paragraph}</p>
      </div>
    </div>
   
      
    
        </div>
        </div>
  );
}

export default Servicio;
