import { AppContext } from "@/Context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Navbar({}) {
  const [navIdioma, setNavIdioma] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { idioma, setIdioma, traduccion } = useContext(AppContext);

  const router = useRouter();
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false); // valor inicial que se renderizará en el servidor

  useEffect(() => {
    // lógica que calcula isTabletOrMobile
    const isTabletOrMobile = window.innerWidth < 768; // o cualquier lógica que estés utilizando
    setIsTabletOrMobile(isTabletOrMobile);
  }, []);
  

  const variantsLogo = isTabletOrMobile
    ? {
        hidden: { x: -100 },
        visible: {
          x: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: -20 },
        visible: {
          y: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      };
  const variantsMenu = isTabletOrMobile
    ? {
        hidden: { y: 100 },
        visible: {
          y: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: 20 },
        visible: {
          y: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      };
  const variantsMenuMovil = isTabletOrMobile && {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  const variantsButton = isTabletOrMobile
    ? {
        hidden: { x: 100 },
        visible: {
          x: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: -20 },
        visible: {
          y: 0,
          transition: { duration: 2, ease: "easeOut" },
        },
      };

  return (
    <>
      <div className="hidden w-full h-[93px] lg:flex flex-col px-14 max-w-[1440px] mx-auto min-w-sm  ">
        <div className="w-full h-full flex flex-row justify-around items-center text-white ">
          <div className="w-[227px] h-[60px]">
            <Image
              src="/assets/logonav.png"
              alt="logo"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="w-[170px] lg:w-full h-[45px] lg:h-full object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-[16px] font-paragraph leading-[24px] gap-8 relative">
            <span
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("Acerca")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {traduccion.navbar.link1}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("Empresas")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {traduccion.navbar.link2}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("Servicio")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {traduccion.navbar.link3}
            </span>
            <div>
              <div className="absolute -right-[100px] top-0 flex flex-col gap-4">
                <div
                  className="w-[110px] flex flex-row items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setNavIdioma(!navIdioma);
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
                    className="w-full h-full  flex flex-col gap-2 z-20"
                    style={{
                      background: "rgba(11, 32, 46, 0.30)",
                      hover: { backgroundColor: "rgba(44, 82, 107, 0.3)" },
                    }}
                  >
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setIdioma({
                          nombre: "EN",
                          code: "GB",
                        });
                        setNavIdioma(!navIdioma);
                      }}
                    >
                      <FlagIcon code="GB" /> EN
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ES",
                          code: "ES",
                        });
                      }}
                    >
                      <FlagIcon code="ES" /> ES
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ZH-T",
                          code: "TW",
                        });
                      }}
                    >
                      <FlagIcon code="TW" /> ZH-T
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ZH-S",
                          code: "CN",
                        });
                      }}
                    >
                      <FlagIcon code="CN" /> ZH-S
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-130 h-49 px-8 py-2 flex justify-center items-center gap-8 flex-shrink-0 bg-[#005E93]"
              onClick={() => {
                document
                  .getElementById("Contacto")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {traduccion.contactoNavbar.titulo}
            </button>
          </div>
        </div>
        <div className="h-[1px] bg-[#1777BA]" />
      </div>

      <div className="w-full h-full flex flex-col relative ">
        {showMenu && (
          <Image
            src="/images/Servicios/ShadowSm.png"
            width={5000}
            height={5000}
            alt="fondo-empresas"
            className="flex lg:hidden object-cover -top-[180px]  absolute -z-10"
          />
        )}

        <div className="lg:hidden w-full h-[80px] flex flex-row items-center justify-between  lg:border-b-[2px] border-black px-4 ">
          <div className="w-full h-full ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsLogo}
              className="w-full h-full flex flex-col items-center justify-end"
            >

              <Image
                src="/assets/logonav.png"
                width={1000}
                height={1000}
                alt="logo"
                priority
                className="w-[170px] h-[45px] object-cover ml-4"
                />
            </motion.div>
          </div>
          <div className="w-full h-full flex flex-row justify-end items-center">
          <div>
              <div className="flex flex-col gap-4">
                <div
                  className="w-[110px] flex flex-row items-center gap-2 cursor-pointer justify-end text-white"
                  onClick={() => {
                    setNavIdioma(!navIdioma);
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
                    className="w-full h-full  flex flex-col gap-2 z-20 text-white translate-y-[30px]"
                    style={{
                      background: "rgba(11, 32, 46, 0.30)",
                      hover: { backgroundColor: "rgba(44, 82, 107, 0.3)" },
                    }}
                  >
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setIdioma({
                          nombre: "EN",
                          code: "GB",
                        });
                        setNavIdioma(!navIdioma);
                      }}
                    >
                      <FlagIcon code="GB" /> EN
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ES",
                          code: "ES",
                        });
                      }}
                    >
                      <FlagIcon code="ES" /> ES
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ZH-T",
                          code: "TW",
                        });
                      }}
                    >
                      <FlagIcon code="TW" /> ZH-T
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#959595]"
                      onClick={() => {
                        setNavIdioma(!navIdioma);
                        setIdioma({
                          nombre: "ZH-S",
                          code: "CN",
                        });
                      }}
                    >
                      <FlagIcon code="CN" /> ZH-S
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-end items-center">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variantsButton}
              onClick={() => setShowMenu(!showMenu)}
              className="px-[20px] py-[8px]  rounded-[10px]  text-white uppercase"
            >
              {!showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="21"
                  viewBox="0 0 32 21"
                  fill="none"
                >
                  <path
                    d="M2 2H30"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 10H30"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 19H30"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  fill="none"
                >
                  <line
                    x1="3.02081"
                    y1="6.22437"
                    x2="24.6884"
                    y2="26.444"
                    stroke="white"
                    strokeWidth="4.27462"
                    strokeLinecap="round"
                  />
                  <line
                    x1="23.0855"
                    y1="3.00016"
                    x2="4.83461"
                    y2="26.3501"
                    stroke="white"
                    strokeWidth="4.27462"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </motion.button>
            </div>
          </div>
        </div>
        {showMenu && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsMenuMovil}
              className="w-full h-[50vh] flex flex-col mt-[87px] items-center text-center gap-4  text-white px-4 py-4"
            >
              <div className="w-full h-full flex flex-col gap-[42px]">
                <span
                  className="text-[40px] font-header font-bold"
                  onClick={() => {
                    document
                      .getElementById("Acerca")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {traduccion.navbar.link1}
                </span>
                <span
                  className="text-[40px] font-header font-bold"
                  onClick={() => {
                    document
                      .getElementById("Empresas")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {traduccion.navbar.link2}
                </span>
                <span
                  className="text-[40px] font-header font-bold"
                  onClick={() => {
                    document
                      .getElementById("Servicio")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {traduccion.navbar.link3}
                </span>
              </div>
            </motion.div>

            <div className="w-full flex flex-col items-center gap-[47px]">
              <div
                className="w-[204px]h-[77px] flex flex-row justify-center px-[31px] py-[12px] items-center bg-[#022136] border-[1px] border-[#1777BA] text-white rounded-[11px] 
            font-paragraph text-[25px] cursor-pointer
            "
              >
                Contacto
              </div>
              <div className="flex flex-row justify-center items-center text-white gap-[42px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
