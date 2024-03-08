import { GameStyleModel } from "@/domain/models/local/GameStyleModel"; // Importa el modelo de estilo de juego desde el directorio especificado
import Image from "next/image"; // Importa el componente Image de Next.js

// Define una interfaz para las propiedades de la tarjeta del estilo de juego
interface CardGameStyleProps {
    gameStyle: GameStyleModel; // Modelo de estilo de juego que se utilizará para mostrar la información
}

// Componente funcional para la tarjeta de estilo de juego
const CardGameStyle: React.FC<CardGameStyleProps> = ({
    gameStyle
}) => {
    return (
        <article className="p-3 border-solid border-[2px] border-primary-light dark:border-accent-border rounded-lg bg-white dark:bg-accent-light">
            {/* Componente Image de Next.js para mostrar la imagen del estilo de juego */}
            <Image
                src={gameStyle.img} // Fuente de la imagen
                alt="style1" // Texto alternativo para la imagen
                height={50} // Altura de la imagen
                width={50} // Ancho de la imagen
                className="rounded-full" // Clase para aplicar estilos adicionales a la imagen
            />
            {/* Título del estilo de juego */}
            <h4 className="text-blackout dark:text-white font-bold text-lg my-1">{gameStyle.style}</h4>
            {/* Descripción del estilo de juego */}
            <p className="text-primary-dark dark:text-accent-text text-sm">{gameStyle.description}</p>
        </article>
    );
}

export default CardGameStyle; // Exporta el componente CardGameStyle para su uso en otros archivos
