import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <AppProvider>
  <div className="w-full h-full bg-[#000206] ">
  <Component {...pageProps} />;
  </div>
  </AppProvider>

  )
}
