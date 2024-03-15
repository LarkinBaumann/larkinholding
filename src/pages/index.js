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

    return (
      <main className="w-full h-full">
        <div
        
        className="w-full relative z-10">
          <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          key={heroImage}
            src={`/images/Hero/${heroImage}.png`}
            alt="hero"
            fill={true}
            quality={100}
            className="w-full h-screen lg:h-full absolute object-cover -z-10"
            style={{ objectPosition: heroImage == '0'?'-750px center':
                 heroImage == '1'? "-960px center":
                 heroImage == '2'? "-720px center":
                 heroImage == '3'? "-750px center":
                 heroImage == '4'&& "-660px center"
                }}
          />
          <Navbar />
          <Hero 
          heroImage={heroImage}
          />
        </div>

        <Empresas />
        <Servicio />
        <Contacto />
        <Footer />
        <Jaizmora />
      </main>
    );
  }
