import Image from "next/image";
import React, { useContext } from "react";
import ShadowFooter from "../Shadows/ShadowFooter";
import ShadowFooterSm from "../Shadows/ShadowFooterSm";
import { AppContext } from "@/Context/AppContext";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const { traduccion } = useContext(AppContext);  

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const variantsH1 = isTabletOrMobile
    ? {
        hidden: { opacity: 0, y: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 3, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: -100 },
        visible: {
          y: 0,
          transition: { duration: 3, ease: "easeOut" },
        },
      };


  return (
    <motion.div 
    ref={ref}
    className="w-full h-full relative z-10 bg-[#0e192170]"
    initial="hidden"
    animate="visible"
      variants={variants}
      >
      <ShadowFooter
      inView={inView}
      />
      <ShadowFooterSm
      inView={inView}
      />
      <div className="w-full h-[327px] flex flex-row justify-center lg:justify-between items-center text-white 
      max-w-[1444px] mx-auto min-w-sm  ">
        <div className="w-full flex flex-col lg:flex-row items-center lf:items-start gap-4 ">
          <div className="w-[138px] lg:w-[227px] h-[123px] lg:h-[203px]">
            <Image
              src="/assets/logoHolding.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="h-[150px] lg:h-[203px] flex flex-col justify-between items-center lg:items-start">
            <div className="flex flex-col">
              <p className="text-center lg:text-left">{traduccion.footer.titulo1}</p>
              <p>Miguel Cervantes, CDMX</p>
            </div>
            <div className="flex flex-col">
              <p className="text-center lg:text-left">{traduccion.footer.titulo2}</p>
              <a href="https://wa.me/525516891448?text=Hola!%20Quiero%20mas%20informacion">
              <p className="text-center lg:text-left flex flex-row items-center justify-center lg:justify-start gap-2">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31 31" fill="none">
  <path d="M26.1444 4.46836C23.2684 1.58555 19.4384 0 15.3681 0C6.9668 0 0.130413 6.83638 0.130413 15.2377C0.130413 17.9215 0.830525 20.5435 2.16211 22.8566L0 30.75L8.07874 28.6291C10.3026 29.844 12.8079 30.4823 15.3613 30.4823H15.3681C23.7626 30.4823 30.75 23.6459 30.75 15.2446C30.75 11.1743 29.0203 7.35117 26.1444 4.46836ZM15.3681 27.9152C13.0893 27.9152 10.8586 27.3044 8.91613 26.1512L8.45625 25.8767L3.66529 27.1328L4.94196 22.4585L4.63996 21.978C3.37014 19.96 2.70435 17.6332 2.70435 15.2377C2.70435 8.2572 8.38761 2.57394 15.375 2.57394C18.7589 2.57394 21.9368 3.8918 24.3254 6.28728C26.7141 8.68276 28.1829 11.8607 28.1761 15.2446C28.1761 22.232 22.3487 27.9152 15.3681 27.9152ZM22.3143 18.4294C21.9368 18.2372 20.063 17.3175 19.7129 17.1939C19.3629 17.0635 19.1089 17.0017 18.855 17.3861C18.601 17.7705 17.8734 18.6216 17.6469 18.8824C17.4273 19.1364 17.2008 19.1707 16.8233 18.9785C14.5857 17.8597 13.1168 16.9811 11.6411 14.4484C11.2498 13.7757 12.0323 13.8238 12.7599 12.3686C12.8834 12.1147 12.8217 11.895 12.7256 11.7028C12.6295 11.5107 11.8676 9.63683 11.5518 8.87494C11.243 8.13365 10.9272 8.23661 10.6939 8.22288C10.4742 8.20915 10.2203 8.20915 9.96629 8.20915C9.71233 8.20915 9.3005 8.30525 8.95045 8.68276C8.60039 9.06713 7.61886 9.98689 7.61886 11.8607C7.61886 13.7345 8.98477 15.5466 9.17009 15.8006C9.36228 16.0545 11.8538 19.8983 15.677 21.5525C18.0931 22.5958 19.0403 22.685 20.2483 22.5065C20.9828 22.3967 22.4997 21.5868 22.8154 20.6945C23.1311 19.8022 23.1311 19.0403 23.035 18.8824C22.9458 18.7108 22.6919 18.6147 22.3143 18.4294Z" fill="url(#paint0_linear_560_564)"/>
  <defs>
    <linearGradient id="paint0_linear_560_564" x1="15.375" y1="0" x2="15.375" y2="30.75" gradientUnits="userSpaceOnUse">
      <stop stopColor="#1B79BC"/>
      <stop offset="1" stopColor="#A2B3EE"/>
    </linearGradient>
  </defs>
</svg>
                </span>
                +52 55 1689 1448</p>
              </a>
              <a href="mailto:info@corporativo.com">
              <p className="text-center flex items-center gap-2">
                <span>
                <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M30.9338 6.18652H6.18708C4.48111 6.18652 3.09375 7.57388 3.09375 9.27986V27.8399C3.09375 29.5458 4.48111 30.9332 6.18708 30.9332H30.9338C32.6397 30.9332 34.0271 29.5458 34.0271 27.8399V9.27986C34.0271 7.57388 32.6397 6.18652 30.9338 6.18652ZM30.9338 9.27986V10.0702L18.5604 19.6951L6.18708 10.0717V9.27986H30.9338ZM6.18708 27.8399V13.9879L17.6108 22.8735C17.8816 23.0862 18.216 23.2019 18.5604 23.2019C18.9048 23.2019 19.2392 23.0862 19.5101 22.8735L30.9338 13.9879L30.9368 27.8399H6.18708Z"
              fill="url(#paint0_linear_224_713)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_224_713"
                x1="18.5604"
                y1="6.18652"
                x2="18.5604"
                y2="30.9332"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1777BA" />
                <stop offset="1" stopColor="#8FAFF1" />
              </linearGradient>
            </defs>
          </svg>
                </span>
                info@corporativolb.com</p>
              </a>
            </div>
            <div className="hidden lg:flex flex-row justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                width="24"
                height="24"
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
                width="24"
                height="24"
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
                width="24"
                height="24"
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
                width="24"
                height="24"
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
        </div>
        <div className="hidden lg:flex flex-row ">
          <div className="w-[227px] h-[203px]">
            <Image
              src="/assets/WeChatQr.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
