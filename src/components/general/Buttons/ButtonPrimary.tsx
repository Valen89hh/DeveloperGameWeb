// Define una interfaz para las props del componente ButtonPrimary
interface ButtonPrimaryProps {
    children: React.ReactNode; // Contenido del botón
    className?: string; // Clases CSS adicionales para el botón (opcional)
    onClick?: () => void; // Función que se ejecutará al hacer clic en el botón (opcional)
    disable?: boolean; // Indica si el botón está deshabilitado (opcional)
}

// Componente funcional ButtonPrimary que recibe las props definidas por la interfaz
const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    children,
    className = "", // Por defecto, className es una cadena vacía
    onClick,
    disable = false // Por defecto, el botón no está deshabilitado
}) => {
    return (
        // Renderiza un botón con clases CSS generadas dinámicamente y propiedades condicionales
        <button
            className={`px-3 py-[0.4rem] text-white bg-primary rounded-md ${className}`}
            onClick={onClick} // Asigna la función onClick si está definida
            disabled={disable} // Deshabilita el botón si disable es true
        >
            {children} {/* Renderiza el contenido dentro del botón */}
        </button>
    );
}

// Exporta el componente ButtonPrimary
export default ButtonPrimary;
