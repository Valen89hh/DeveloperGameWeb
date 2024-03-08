import Parrafo from "@/components/general/Texts/Parrafo"; // Importa el componente Parrafo desde el directorio especificado
import Title from "@/components/general/Texts/Title"; // Importa el componente Title desde el directorio especificado

// Componente funcional para la sección de información sobre GameDev
const InformationGameDev = () => {
    return (
        <div className="w-full sm:w-1/2"> {/* Contenedor principal */}
            <Title text="What is GameDev?" /> {/* Título de la sección */}
            {/* Párrafo de información sobre GameDev */}
            <Parrafo>
                GameDev is a platform for creating and playing games. It is free to use,
                and has a strong community of game developers and players.
            </Parrafo>
        </div>
    );
}

export default InformationGameDev; // Exporta el componente InformationGameDev para su uso en otros archivos
