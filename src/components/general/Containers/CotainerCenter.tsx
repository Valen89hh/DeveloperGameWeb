// Define una interfaz para las props del componente ContainerCenter
interface ContainerCenterProps {
    children: React.ReactNode; // Contenido del contenedor
    className?: string; // Clases CSS adicionales para el contenedor (opcional)
}

// Componente funcional ContainerCenter que recibe las props definidas por la interfaz
const ContainerCenter: React.FC<ContainerCenterProps> = ({
    children,
    className // Por defecto, className es undefined
}) => {
    return (
        // Renderiza un div que sirve como contenedor centrado, con las clases CSS generadas dinámicamente
        <div className={`flex justify-center items-center ${className}`}>
            {children} {/* Renderiza el contenido dentro del contenedor */}
        </div>
    );
}

// Exporta el componente ContainerCenter
export default ContainerCenter;
