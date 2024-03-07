import Image from "next/image";
import React, { useState } from "react";

function Empresas() {
  const empresas = [
    {
      id: 1,
      nombre: "Seguridad privada",
      imagen: "/images/empresas/seguridad.png",
      url: "LarkinBaumanSeguridad.com",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros",
    },
    {
      id: 2,
      nombre: "Real Estate",
      url: "LarkinBaumanSeguridad.com",
      imagen: "/images/empresas/realestate.png",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros",
    },
    {
      id: 3,
      nombre: "OIL & GAS INDUSTRY",
      imagen: "/images/empresas/oil.png",
      url: "LarkinBaumanSeguridad.com",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor eros",
    },
    {
      id: 4,
      nombre: "INVESTMENT & FINANCES",
      imagen: "/images/empresas/investment.png",
      url: "LarkinBaumanSeguridad.com",
      descripcion:
        "Alcanza tus metas financieras con nosotros. Maximizamos tus oportunidades de crecimiento y éxito.",
    },
    {
      id: 5,
      nombre: "GOLD MINING",
      imagen: "/images/empresas/gold.png",
      url: "LarkinBaumanSeguridad.com",
      descripcion:
        "Adquisición de minerales preciosos y su procesamiento en nuestras refinadoras de alta tecnología.",
    },
  ];

  const [seleccion, setSeleccion] = useState(0);

  return (
    <div className="h-[1024px] w-full  text-white  relative z-0">
      <Image
        src="/images/empresas.png"
        width={100}
        height={100}
        alt="fondo-empresas"
        className="w-full h-full absolute -z-20"
      />
      <div className="grid grid-cols-8 w-full h-full px-14 items-center gap-9 ">
        {empresas.map((empresa, index) => (
          <div
            key={index}
            className={
              seleccion != index
                ? "w-full h-[774px] rounded-[22px]  relative cursor-pointer"
                : "col-span-4 h-[774px] rounded-[22px]  "
            }
            onClick={() => setSeleccion(index)}
          >
            {seleccion == index ? (
              <div
                className="w-full h-full flex flex-col justify-between bg-[
                #183F5C] rounded-t-[22px]"
              >
                <div className="w-full h-[50%] flex flex-col justify-center items-center ">
                  <p className="font-paragraph font-semibold  leading-[48px] text-[36px] w-[491px] h-[192px]">
                    {empresa.descripcion}
                  </p>
                </div>
                <div className="w-full h-[50%] relative ">
                  <Image
                    src={empresa.imagen}
                    width={100}
                    height={100}
                    alt={empresa.nombre}
                    className="w-full h-full object-cover rounded-b-[22px]"
                  />
                  <button className="text-white w-[171px] h-[42px] absolute bg-[#005E93] bottom-10 right-10 flex justify-center items-center gap-[14px] text-[19px] font-paragraph">
                    Ir a sitio web{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M15.7392 1.60058C15.7392 1.063 15.3035 0.627207 14.7659 0.627206L6.00553 0.627207C5.46795 0.627207 5.03216 1.063 5.03216 1.60058C5.03216 2.13816 5.46795 2.57395 6.00553 2.57395L13.7925 2.57395L13.7925 10.3609C13.7925 10.8985 14.2283 11.3343 14.7659 11.3343C15.3035 11.3343 15.7392 10.8985 15.7392 10.3609L15.7392 1.60058ZM1.82695 15.9161L15.4542 2.28886L14.0776 0.912301L0.450394 14.5395L1.82695 15.9161Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <Image
                src={empresa.imagen}
                width={100}
                height={100}
                alt={empresa.nombre}
                className="w-full h-full object-cover rounded-[22px] "
              />
            )}
            <svg
              className={
                seleccion != index
                  ? " absolute  bottom-0 flex flex-row justify-center items-center text-left"
                  : "hidden"
              }
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="297"
              viewBox="0 0 87 297"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.4408 53.9612L86.525 53.9067L86.4408 53.8544V53.7167H86.2191L0.865231 0.707672L1.51143 88.5769V296.611H86.4408V53.9612Z"
                fill="#005E93"
              />
            </svg>

            <h3
              className={
                seleccion != index
                  ? "absolute bottom-16 right-0 text-white -rotate-90 font-header font-bold text-[28px]  uppercase leading-[35px] "
                  : "hidden"
              }
            >
              {empresa.nombre}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empresas;
