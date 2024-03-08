// Define una interfaz para las props del componente Container
interface ContainerProps {
    style?: string; // Estilo personalizado para el contenedor
    children: React.ReactNode; // Contenido del contenedor
    id?: string; // Identificador único para el contenedor
}

// Componente funcional Container que recibe las props definidas por la interfaz
const Container: React.FC<ContainerProps> = ({
    style, // Estilo personalizado para el contenedor
    children, // Contenido del contenedor
    id // Identificador único para el contenedor
}) => {
    return (
        // Renderiza un div que sirve como contenedor, con las clases CSS generadas dinámicamente y un posible identificador único
        <div className={`container mx-auto ${style} px-2 sm:px-0`} id={id}>
            {children} {/* Renderiza el contenido dentro del contenedor */}
        </div>
    );
}

// Exporta el componente Container
export default Container;
