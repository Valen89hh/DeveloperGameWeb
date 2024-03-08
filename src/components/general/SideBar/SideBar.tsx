// Importaciones necesarias
import { useRef } from 'react';
import style from './Sidebar.module.css' // Estilos CSS para el componente Sidebar
import { useSideBarContext } from '@/context/SideBarContext'; // Importa el contexto para controlar la barra lateral
import Logo from '../Logo/Logo'; // Componente del logo

// Definición del componente Sidebar
const SideBar = () => {
    // Obtiene el estado de la barra lateral y la función para cambiar su estado del contexto
    const { open, setOpen } = useSideBarContext();

    // Referencia al elemento de la barra lateral
    const refSide = useRef<HTMLDivElement>(null);

    // Función para cerrar la barra lateral si se hace clic fuera de ella
    const onDismissRequest = (e: React.MouseEvent) => {
        if (refSide.current && refSide.current === e.target) {
            setOpen(false);
        }
    }

    // Renderiza el componente Sidebar
    return (
        <div ref={refSide} onClick={onDismissRequest} className={`bg-[#02020277] fixed inset-0 w-screen h-screen z-10 ${open ? style["visible-side"] : style["hidden-side"]}`}>
            <div className={`w-[80%] sm:w-[400px] h-full bg-white dark:bg-accent-dark absolute top-0 right-0 ${open ? style["side-open"] : style["side-close"]}`}>
                <nav className="p-4">
                    {/* Componente del logo */}
                    <Logo />
                    {/* Lista de navegación */}
                    <ul className="flex mt-3 flex-col gap-4 font-bold text-primary-dark">
                        <li>
                            <a href="#home" onClick={() => setOpen(false)}>Home</a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => setOpen(false)}>Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setOpen(false)}>About</a>
                        </li>
                        {/* Elemento de contacto */}
                        <a href='#contact' className="px-3 py-[0.4rem] text-white bg-primary rounded-md" onClick={() => setOpen(false)}>
                            Contact
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

// Exporta el componente Sidebar
export default SideBar;
