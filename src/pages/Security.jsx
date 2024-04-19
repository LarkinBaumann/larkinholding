import React from 'react'

//Security
import HeroSecurity from "@/componentsSecurity/Home/Hero/Hero";
import AcercaSecurity from "@/componentsSecurity/Home/Acerca/Acerca";
import QuienesSecurity from "@/componentsSecurity/Home/Quienes/Quienes";
import ServicioSecurity from "@/componentsSecurity/Home/Servicio/Servicio";
import ContactoSecurity from "@/componentsSecurity/Home/Contacto/Contacto";
import Head  from 'next/head';



function Security() {
    return(
        <>
         <Head>
        <meta name="theme-color" content="#050409"/>
        <title>Larkin Baumann Security.</title>
        <meta name="description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta name="keywords" content="seguridad privada, seguridad, escoltas, blindaje, protección, emergencia, investigación, auditoria, ejecutivo" />
        <meta property="og:title" content="Larkin Baumann Security" />
        <meta property="og:description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta property="og:image" content="/assetsSecurity/ogimage.jpg" />
        <meta property="og:url" content="https://www.corportativolb.com/Security" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assetsSecurity/ogimage.jpg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
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