import React from 'react'

//Security
import HeroSecurity from "@/componentsSecurity/Home/Hero/Hero";
import AcercaSecurity from "@/componentsSecurity/Home/Acerca/Acerca";
import QuienesSecurity from "@/componentsSecurity/Home/Quienes/Quienes";
import ServicioSecurity from "@/componentsSecurity/Home/Servicio/Servicio";
import ContactoSecurity from "@/componentsSecurity/Home/Contacto/Contacto";



function Security() {
    return(
        <>
            <main className="w-full h-full bg-[#000206] relative overflow-hidden max-w-[1440px] min-w-sm mx-auto">
          <HeroSecurity/>
          <AcercaSecurity/>
          <QuienesSecurity/>
          <ServicioSecurity/>
          <ContactoSecurity/>
        
        </main>
        </>
          )
}

export default Security