// Importa componentes y hooks necesarios
import Image from "next/image";
import Container from "../Containers/Container";
import { useSideBarContext } from "@/context/SideBarContext";
import ThemeMode from "../Header/ThemeMode";
import Logo from "../Logo/Logo";
import { useState } from "react";

// Definición del componente NavBar
const NavBar = () => {
    // Obtiene la función para abrir/cerrar la barra lateral del contexto
    const { setOpen } = useSideBarContext();

    // Estado para controlar el modo de imagen (claro/oscuro)
    const [imgMode, setImgMode] = useState("/icons/light-mode.svg");

    // Renderiza el componente NavBar
    return ( 
        <Container>
            <header className="w-full flex justify-between items-center py-4">
                {/* Componente del logo */}
                <Logo/>

                {/* Navegación */}
                <nav className="hidden sm:block">
                    <ul className="flex gap-4 items-center text-blackout dark:text-white">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                        {/* Elemento de contacto */}
                        <li className="px-3 py-[0.4rem] text-white bg-primary rounded-md">
                            <a href="#contact">Contact</a>
                        </li>
                        {/* Componente de cambio de tema */}
                        <ThemeMode imgMode={imgMode} setImgMode={setImgMode}/>
                    </ul>
                </nav>

                {/* Boton Menú desplegable para dispositivos pequeños */}
                <div className="flex sm:hidden gap-2">
                    {/* Icono de menú para abrir la barra lateral */}
                    <Image
                        src={"/icons/Menu.svg"}
                        alt="menu"
                        height={27}
                        width={27}
                        className="cursor-pointer"
                        onClick={() => setOpen(true)}
                    />
                    {/* Componente de cambio de tema */}
                    <ThemeMode imgMode={imgMode} setImgMode={setImgMode}/>
                </div>
            </header> 
        </Container>
    );
}
 
// Exporta el componente NavBar
export default NavBar;
