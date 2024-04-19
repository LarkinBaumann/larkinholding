import Elige from '@/componentsSecurity/Servicios/Elige/Elige'
import Hero from '@/componentsSecurity/Servicios/Hero/Hero'
import ServiciosSec from '@/componentsSecurity/Servicios/ServiciosSec/ServiciosSec'
import Image from 'next/image'
import React from 'react'
import Head  from 'next/head';


function Servicios() {
  return (
    <>
    <Head>
        <meta name="theme-color" content="#050409"/>
        <title>Larkin Baumann Security. Services</title>
        <meta name="description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta name="keywords" content="seguridad privada, seguridad, escoltas, blindaje, protección, emergencia, investigación, auditoria, ejecutivo" />
        <meta property="og:title" content="Larkin Baumann Security" />
        <meta property="og:description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
        <meta property="og:image" content="/assetsSecurity/ogimage.jpg" />
        <meta property="og:url" content="https://www.corportativolb.com/Security/Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assetsSecurity/ogimage.jpg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
    <div className='overflow-hidden max-w-[1440px] min-w-sm mx-auto'>
      <Hero/>
      <div className='w-full h-full relative'>

      <ServiciosSec/>
      <Image src="/assetsSecurity/servicios/serviciossec.png" width={100} height={100} alt="Hero Servicios" className='w-full h-full absolute top-0 -z-20'/>
      </div>
      <Elige/>
    </div>
    </>
  )
}

export default Servicios