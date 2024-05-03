import React, { createContext, useState } from 'react';
import ES from '../Traducciones/ES.json'
import EN from '../Traducciones/EN.json'
import FR from '../Traducciones/FR.json'
import AE from '../Traducciones/AE.json'
import ZHS from '../Traducciones/ZH-S.json'
import ZHT from '../Traducciones/ZH-T.json'
import { useEffect } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del contexto
export const AppProvider = ({ children }) => {
    // Define el estado o cualquier otra lógica que necesites
    const [data, setData] = useState([]);
    const [idioma, setIdioma] = useState({
       
      })
      const [traduccion, setTraduccion] = useState(ES)

      useEffect(() => {
        const savedLang = localStorage.getItem("idioma");
        if (savedLang === "ES") {
            setIdioma({
                nombre: 'ES',
                code: 'MX',
            });
        } else if (savedLang === "EN") {
            setIdioma({
                nombre: 'EN',
                code: 'US',
            });
        } else if (savedLang === "ZHS") {
            setIdioma({
                nombre: 'ZH-S',
                code: 'CN',
            });
        } else if (savedLang === "ZHT") {
            setIdioma({
                nombre: 'ZH-T',
                code: 'TW',
            });
        } else if (savedLang === "FR") {
            setIdioma({
                nombre: 'FR',
                code: 'FR',
            });
        } else if (savedLang === "UAE") {
            setIdioma({
                nombre: 'UAE',
                code: 'AE',
            });
        } else {
            setIdioma({
                nombre: 'ES',
                code: 'MX',
            });
        }
    }, []);
 
      useEffect(() => {
        if (idioma.nombre === "ES") {
          setTraduccion(ES)
          localStorage.setItem("idioma", "ES")
        } else if (idioma.nombre === "EN") {
          setTraduccion(EN)
          localStorage.setItem("idioma", "EN")
        } else if (idioma.nombre === "ZH-S") {
          setTraduccion(ZHS)
          localStorage.setItem("idioma", "ZHS")
        } else if (idioma.nombre === "ZH-T") {
          setTraduccion(ZHT)
          localStorage.setItem("idioma", "ZHT")
        }
         else if (idioma.nombre === "FR") {
          setTraduccion(FR)
          localStorage.setItem("idioma", "FR")
        }
         else if (idioma.nombre === "UAE") {
          setTraduccion(AE)
          localStorage.setItem("idioma", "AE")
        }
      }, [idioma])


    // Puedes agregar más estados y funciones aquí

    // Retorna el proveedor del contexto con los valores que deseas compartir
    return (
        <AppContext.Provider value={{ 
            
            data,
            idioma,
            traduccion,
            setIdioma,
            setData
            
            }}>
            {children}
        </AppContext.Provider>
    );
};