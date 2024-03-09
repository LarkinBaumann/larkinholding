import { AppContext } from "@/Context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";

function Navbar({}) {

  const [navIdioma, setNavIdioma] = useState(false)
  const {idioma, setIdioma} = useContext(AppContext)
 

 

  return (
    <div className="w-full h-[93px] flex flex-col px-14 max-w-[1440px] mx-auto min-w-sm overflow-hidden">
      <div className="w-full h-full flex flex-row justify-around items-center text-white ">
        <div className="w-[227px] h-[60px]">
          <Image
            src="/assets/logonav.png"
            alt="logo"
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-center text-[16px] font-paragraph leading-[24px] gap-8 relative">
          <span className="cursor-pointer">Nosotros</span>
          <span className="cursor-pointer">Experiencia</span>
          <span className="cursor-pointer">Empresas</span>
          <div>
            <div className="absolute -right-[100px] top-0 flex flex-col gap-4">
              <div className="w-[110px] flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => {
                  setNavIdioma(!navIdioma)
                }}
              >
                <div>
                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.89819 7.16292C6.67851 7.38259 6.32241 7.38259 6.10274 7.16292L0.367876 1.42804C0.148208 1.20837 0.148208 0.852268 0.367876 0.632593L0.633046 0.367393C0.852713 0.147718 1.20887 0.147718 1.42854 0.367393L6.50046 5.43934L11.5724 0.367393C11.7921 0.147718 12.1482 0.147718 12.3679 0.367393L12.6331 0.632593C12.8527 0.852268 12.8527 1.20837 12.6331 1.42804L6.89819 7.16292Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <FlagIcon code={idioma.code} />
                {idioma.nombre}
              </div>

              {navIdioma && (
                <div
                  className="w-full h-full  flex flex-col gap-2"
                  style={{
                    background: 'rgba(11, 32, 46, 0.30)',
                    hover: { backgroundColor: 'rgba(44, 82, 107, 0.3)' }
                  }}
                >
                  <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]" onClick={() => 
                  {
                  setIdioma({
                    nombre: "EN",
                    code: "GB",
                  })
                  setNavIdioma(!navIdioma)
                }
              }
                  >
                    <FlagIcon code="GB" /> EN
                  </div>
                  <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]" onClick={() =>{
                    setNavIdioma(!navIdioma)
                  setIdioma({
                    nombre: "ES",
                    code: "ES",
                  })}
                }>
                    <FlagIcon code="ES" /> ES
                  </div>
                  <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]" onClick={() => {
                    setNavIdioma(!navIdioma)
                    setIdioma(
                    {
                      nombre: "ZH-T",
                      code: "TW"
                    }
                  )}}>
                    <FlagIcon code="TW" /> ZH-T
                  </div>
                  <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]" onClick={() => {
                    setNavIdioma(!navIdioma)
                    setIdioma(
                    {
                      nombre: "ZH-S",
                      code: "CN"
                    }
                  )}
                  }>
                    <FlagIcon code="CN" /> ZH-S
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <button className="w-130 h-49 px-8 py-2 flex justify-center items-center gap-8 flex-shrink-0 bg-[#005E93]">
            Contacto
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-[#1777BA]" />
    </div>
  );
}

export default Navbar;
