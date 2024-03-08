// Define una interfaz para las props del componente Divider
interface DividerProps {
    style?: string; // Estilo personalizado para el divider
    color?: string; // Color de fondo del divider
    size?: string; // Tamaño del divider
}

// Componente funcional Divider que recibe las props definidas por la interfaz
const Divider: React.FC<DividerProps> = ({
    style = "", // Por defecto, el estilo está vacío
    color = "bg-secondary dark:bg-accent-light", // Por defecto, el color es el color secundario o su equivalente en modo oscuro
    size = "h-[2px]" // Por defecto, el tamaño es 2 píxeles de alto
}) => {
    return (
        // Renderiza un div que sirve como divider, con las clases CSS generadas dinámicamente
        <div className={`${size} ${color} w-full ${style}`}>
        </div>
    );
}

// Exporta el componente Divider
export default Divider;
