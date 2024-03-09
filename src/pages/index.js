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

const inter = Inter({ subsets: ["latin"] });


  export default function Home() {
    const [heroImage, setHeroImage] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setHeroImage((prevImage) =>  prevImage  + 1 > 5? 1 : prevImage + 1);
      }, 6000);

      return () => clearInterval(interval);
    }, []);

    return (
      <main className="w-full h-full">
        <div className="w-full relative z-10">
          <Image
            src={`/images/Hero/${heroImage}.png`}
            alt="hero"
            fill={true}
            quality={100}
            className="w-full h-full absolute object-cover -z-10"
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
