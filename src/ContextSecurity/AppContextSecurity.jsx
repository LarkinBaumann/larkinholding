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
        nombre: "ES",
        code: "MX",
      })
      const [traduccion, setTraduccion] = useState(ES)

      useEffect(() => {
        if (idioma.nombre === "ES") {
          setTraduccion(ES)
        } else if (idioma.nombre === "EN") {
          setTraduccion(EN)
        } else if (idioma.nombre === "ZH-S") {
          setTraduccion(ZHS)
        } else if (idioma.nombre === "ZH-T") {
          setTraduccion(ZHT)
        }
         else if (idioma.nombre === "FR") {
          setTraduccion(FR)
        } else if (idioma.nombre === "UAE") {
          setTraduccion(AE)
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