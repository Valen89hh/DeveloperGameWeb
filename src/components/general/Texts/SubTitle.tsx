// Interfaz que define las propiedades que acepta el componente SubTitle
interface SubTitleProps {
    text: string; // Texto del subtítulo
    className?: string; // Clases de estilo adicionales (opcional)
}

// Componente funcional SubTitle
const SubTitle: React.FC<SubTitleProps> = ({
    text,
    className
}) => {
    return (
        // Subtítulo con clases de estilo específicas y el texto proporcionado
        <h3 className={`text-blackout text-lg font-bold ${className}`}>
            {text} {/* Renderiza el texto del subtítulo */}
        </h3>
    );
};

export default SubTitle; // Exporta el componente SubTitle
