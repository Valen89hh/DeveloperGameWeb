import { createContext, useContext, useState } from "react"


//Definomos el tipo de datos a compartir
interface SideBarDataContext{
    open: boolean
    setOpen: (param: boolean) => void
}

//Crear un contexto con un valor inicial
const SideBarContext = createContext<SideBarDataContext | undefined>(undefined)

// Componente proveedor que envuelve a los elemtnos que compartiran la data
const SideBarProvider = ({children}: {children: React.ReactNode}) =>{
    //State shared
    const [open, setOpen] = useState(false)

    //Values shared
    const contextValue: SideBarDataContext = {
        open,
        setOpen
    }

    return <SideBarContext.Provider value={contextValue}>
        {children}
    </SideBarContext.Provider>
}


//Function for provider tha data
const useSideBarContext = ()=>{
    const context = useContext(SideBarContext)

    if(!context){
        throw new Error(
            "useSideBarContext solo debe ser utilizado dentro SideBarProvider"
        )
    }

    return context
}

export {SideBarProvider, useSideBarContext}