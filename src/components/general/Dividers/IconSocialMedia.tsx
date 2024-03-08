// Define una interfaz para las props del componente IconSocialMedia
interface IconSocialMediaProps {
    link: string; // Propiedad que representa el enlace al que se redirigirá al hacer clic en el icono
    children: React.ReactNode; // Propiedad que representa el contenido del icono
}

// Componente funcional IconSocialMedia que recibe las props definidas por la interfaz
const IconSocialMedia: React.FC<IconSocialMediaProps> = ({
    link,
    children
}) => {
    return (
        // Renderiza un enlace que abre una nueva pestaña al hacer clic, con estilos y comportamiento de hover
        <a href={link} target="_blank" className="rounded-full  hover:bg-slate-200 p-2 transition-all ease-in-out">
            {/* Renderiza un icono SVG dentro del enlace, con clases CSS para el color */}
            <svg className="fill-current text-primary-dark dark:text-accent-text" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                {/* Renderiza el contenido del icono como un path de un svg */}
                {children}
            </svg>
        </a>
    );
}

// Exporta el componente IconSocialMedia
export default IconSocialMedia;
