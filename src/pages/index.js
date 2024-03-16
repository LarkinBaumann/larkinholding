import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Acerca from "@/components/Acerca/Acerca";
import Empresas from "@/components/Empresas/Empresas";
import Servicio from "@/components/Servicio/Servicio";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });


  export default function Home() {
    const [heroImage, setHeroImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setHeroImage((prevImage) =>  prevImage  + 1 > 4? 0 : prevImage + 1);
      }, 6000);

      return () => clearInterval(interval);
    }, []);


    const variants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration: 3, 
          ease: "easeOut" 
        } 
      },
    };

    const handlers = useSwipeable({
      onSwipedLeft: () => setHeroImage(prev => (prev + 1) % 5),
      onSwipedRight: () => setHeroImage(prev => (prev - 1 + 5) % 5),
    });

    return (
      <>
      
        <Head>
        <meta name="theme-color" content="#050409"/>
        <title>Larkin Baumann Holding.</title>
        <meta name="description" content="Descubre Larkin Baumann Holding, empresa líder en diversas industrias a nivel global desde 1997. Nuestra holding se especializa en la creación y gestión de empresas en sectores que van desde la seguridad privada hasta la construcción de viviendas. Con un enfoque en la excelencia y la responsabilidad, somos la elección confiable para tus necesidades empresariales." />
        <meta name="keywords" content="seguridad privada, seguridad, finanzas, metales preciosos, oro, metales, hierro, viviendas, mineria, real estate,  petroleo, gas, inversion, inversiones, industrial, industria, proteccion, gestion financiera, diesel, propiedades, escoltas" />
        <meta property="og:title" content="Larkin Baumann Holding" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:url" content="www.lbholding.com" />
        <meta name="twitter:card" content="/images/ogimage.png" />
        </Head>
      <main className="w-full h-full">
        <div
        {...handlers}
        className="w-full relative z-10">
         
          <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          key={heroImage}
            src={`/images/HERO/${heroImage}.png`}
            alt="hero"
            fill={true}
            quality={100}
            className="w-full h-[350px] lg:h-full absolute object-cover -z-10"
            style={{ objectPosition: heroImage == '0'?'-120px center':
                 heroImage == '1'? "-200px center":
                 heroImage == '2'? "-100px center":
                 heroImage == '3'? "-140px center":
                 heroImage == '4'&& "-50px center"
                }}
          />
          <Navbar />
          <Hero 
          heroImage={heroImage}
          />
        </div>
        
        <div className="w-full h-full relative">

        <Empresas />
        <Image
        src="/images/Servicios/ShadowSm.png"
        width={5000}
        height={5000}
        alt="fondo-empresas"
        className="flex lg:hidden object-cover -top-[180px]  absolute -z-0"
      />
        </div>
        <div className="w-full h-full relative">
        <Image
        src="/images/Servicios/ShadowSm.png"
        width={5000}
        height={5000}
        alt="fondo-empresas"
        className="flex lg:hidden w-full h-full object-cover -top-[100px]  absolute z-10"
      />
        <Servicio />
        <Contacto />
        </div>
        <Footer />
        <Jaizmora />
      </main>
      </>
    );
  }
