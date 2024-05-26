"use client"

import { createContext, useContext, useEffect, useState } from "react"

const PreloadContext = createContext({  });

export default function PreloadProvider({ children }) {

    const [foiVisitado, setFoiVisitado] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const foiVisitadoAntes = localStorage.getItem('foiVisitadoAntes');
        if(!foiVisitadoAntes) {
            localStorage.setItem('foiVisitadoAntes', true);
        } else {
            setFoiVisitado(true);
        }
      }, [])

  return (
    <PreloadContext.Provider value={{isLoading, foiVisitado, setIsLoading}}>
        {children}
    </PreloadContext.Provider>
  )
}

export const usePreload = () => useContext(PreloadContext);