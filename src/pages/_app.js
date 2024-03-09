import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <AppProvider>
  <div className="bg-[#000206] ">

  <Component {...pageProps} />;
  </div>
  </AppProvider>

  )
}
