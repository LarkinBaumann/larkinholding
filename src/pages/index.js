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
            style={{ objectPosition: heroImage == '0'?'-150px center':
                 heroImage == '1'? "-250px center":
                 heroImage == '2'? "-120px center":
                 heroImage == '3'? "-200px center":
                 heroImage == '4'&& "-120px center"
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
