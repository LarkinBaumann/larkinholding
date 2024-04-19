import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Image from 'next/image'


//Security
import { AppProviderSecurity } from "@/ContextSecurity/AppContextSecurity";
import Footer from "@/componentsSecurity/Footer/Footer";
import Jaizmora from "@/componentsSecurity/Jaizmora/Jaizmora";
import Navbar from "@/componentsSecurity/Navbar/Navbar";

export default function App({ Component, pageProps }) {

const router = useRouter();

if(router.pathname.startsWith('/Security')){
  return(
  
  <AppProviderSecurity>
  <div className="w-full h-full relative    ">
    <Image src="/assetsSecurity/fondoTotal2.png"
    layout='fill'
    quality={100}
    objectFit='cover'
    alt="Fondo Total"
    className="-z-50 hidden xl:block"
     
     />
  <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 max-w-[1440px] mx-auto min-w-sm m-auto z-20">
    <Navbar/>
    </div>
  <Component {...pageProps} />
  <div className="w-full h-full  max-w-[1440px] mx-auto min-w-sm m-auto z-20">
  </div>
  <Footer/>
  <Jaizmora/>
    
  </div>
  </AppProviderSecurity>
  )
}
else{
  return(
    <AppProvider>
  <div className="w-full h-full bg-[#000206] ">
  <Component {...pageProps} />;
  </div>
  </AppProvider>

  )
}
}
