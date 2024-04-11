import React, { createContext, useState } from 'react';
import ES from '../Traducciones/ES.json'
import EN from '../Traducciones/EN.json'
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