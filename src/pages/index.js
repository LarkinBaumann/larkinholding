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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full  ">
      <div className="w-full relative z-10">
      <Image src='/images/heroInvestment.png' alt="hero" width={5000} height={5000} className='w-full h-full absolute object-cover -z-10'/>
      <Navbar/>
      <Hero/>
      </div>

      <Empresas/>
      <Servicio/>
      <Contacto/>
      <Footer/>
      <Jaizmora/>
   
    </main>
  );
}
