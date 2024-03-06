import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Acerca from "@/components/Acerca/Acerca";
import Empresas from "@/components/Empresas/Empresas";
import Servicio from "@/components/Servicio/Servicio";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import ShadowFooter from "@/components/Shadows/shadowFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1440px] mx-auto min-w-sm overflow-hidden ">
      <div className="w-full relative z-10">
      <Image src='/images/heroInvestment.png' alt="hero" layout='fill' objectFit='cover' className='w-full h-full -z-10'/>
      <Navbar/>
      <Hero/>
      </div>
      <Empresas/>
      <Servicio/>
      <Contacto/>
      <Footer/>
   
    </main>
  );
}
