// Interfaz que define las propiedades que acepta el componente Parrafo
interface ParrafoProps {
    children: React.ReactNode; // Contenido del párrafo
}

// Componente funcional Parrafo
const Parrafo: React.FC<ParrafoProps> = ({
    children
}) => {
    return (
        // Párrafo de texto con clases de estilo específicas
        <p className="text-sm text-secondary-dark dark:text-accent-text">
            {children} {/* Renderiza el contenido del párrafo */}
        </p>
    );
};

export default Parrafo; // Exporta el componente Parrafo
