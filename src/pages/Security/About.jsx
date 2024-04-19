import AcercaDe from '@/componentsSecurity/Acerca/AcercaDe/AcercaDe'
import Hero from '@/componentsSecurity/Acerca/Hero/Hero'
import Valores from '@/componentsSecurity/Acerca/Valores/Valores'
import Image from 'next/image'
import React from 'react'
import Head  from 'next/head';


function About() {
  return (
    <>
    <Head>
        <meta name="theme-color" content="#050409"/>
        <title>Larkin Baumann Security. About</title>
        <meta name="description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta name="keywords" content="seguridad privada, seguridad, escoltas, blindaje, protección, emergencia, investigación, auditoria, ejecutivo" />
        <meta property="og:title" content="Larkin Baumann Security" />
        <meta property="og:description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta property="og:image" content="/assetsSecurity/ogimage.jpg" />
        <meta property="og:url" content="https://www.corportativolb.com/Security/About" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assetsSecurity/ogimage.jpg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
    <div className='w-full h-full px-4 relative overflow-hidden max-w-[1440px] min-w-sm mx-auto'>
      <div className='w-full h-full absolute -z-10 '>
      <Image src={'/assetsSecurity/acerca/hero/fondo2.png'} alt='fondo' width={10000} height={10000} className='w-full h-full ' />
      </div>
        <Hero/>
        <AcercaDe/>
        <Valores/>
    </div>
    </>
  ) 
}

export default About