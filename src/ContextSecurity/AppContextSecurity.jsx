import React, { createContext, useState } from 'react';
import ES from '../TraduccionesSecurity/ES.json'
import EN from '../TraduccionesSecurity/EN.json'
import FR from '../TraduccionesSecurity/FR.json'
import AE from '../TraduccionesSecurity/AE.json'
import ZHS from '../TraduccionesSecurity/ZH-S.json'
import ZHT from '../TraduccionesSecurity/ZH-T.json'
import { useEffect } from 'react';

// Crea el contexto
export const AppContextSecurity = createContext();

// Crea el proveedor del contexto
export const AppProviderSecurity = ({ children }) => {
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
        <AppContextSecurity.Provider value={{ 
            
            data,
            idioma,
            traduccion,
            setIdioma,
            setData
            
            }}>
            {children}
        </AppContextSecurity.Provider>
    );
};