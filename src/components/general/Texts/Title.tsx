// Interfaz que define las propiedades que acepta el componente Title
interface TitleProps {
    text: string; // Texto del título
    className?: string; // Clases de estilo adicionales (opcional)
}

// Componente funcional Title
const Title: React.FC<TitleProps> = ({
    text,
    className = ""
}) => {
    return (
        // Título con clases de estilo específicas y el texto proporcionado
        <h2 className={`text-blackout dark:text-white text-2xl font-bold ${className}`}>
            {text} {/* Renderiza el texto del título */}
        </h2>
    );
};

export default Title; // Exporta el componente Title
