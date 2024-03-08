"use client"; // Indica que se trata de código para ser ejecutado en el cliente

import { SideBarProvider } from "@/context/SideBarContext"; // Importa el proveedor de contexto SideBarProvider
import NavBar from "../NavBar/NavBar"; // Importa el componente NavBar
import SideBar from "../SideBar/SideBar"; // Importa el componente SideBar

// Componente funcional Header
const Header = () => {
    return (
        // Proveedor de contexto SideBarProvider
        <SideBarProvider>
            {/* Componente NavBar */}
            <NavBar />
            {/* Componente SideBar */}
            <SideBar />
        </SideBarProvider>
    );
}

export default Header; // Exporta el componente Header
