import React from "react";

function Servicio() {
  return (
    <div className="h-[830px] w-full px-14 flex flex-row justify-between text-white">
      <div className="w-full">
        <div className="w-[557px] h-[539px]">Mapa</div>
      </div>
      <div className="w-full flex flex-col gap-[8px]">
        <h2 className="font-header w-[532px] text-[40px] font-bold leading-[44px]">
          Tus Socios en Todo México:
          <br/>
          <span className="titulo2">Servicios a lo Largo y Ancho del País</span>
        </h2>
        <p className="w-[532px]  font-paragraph text-[20px] leading-[34px] ">Cobertura en toda la República Mexicana,  nuestro equipo está listo para atender tus necesidades donde sea que estés. Confía en nosotros para proporcionarte soluciones confiables y de calidad en todo el país.</p>
      </div>
    </div>
  );
}

export default Servicio;
