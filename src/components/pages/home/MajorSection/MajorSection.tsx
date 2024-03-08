import Container from "@/components/general/Containers/Container"; // Importa el componente Container desde el directorio especificado
import CardGameStyle from "./CardGameStyle"; // Importa el componente CardGameStyle localmente
import Title from "@/components/general/Texts/Title"; // Importa el componente Title desde el directorio especificado
import getAllGameStyle from "@/data/local/GameStyleRepository"; // Importa la función getAllGameStyle desde el repositorio de estilos de juego local

// Componente funcional para la sección principal que muestra diferentes estilos de juegos
const MajorSection = () => {
    return (
        <Container style="my-[8rem] "> {/* Contenedor principal */}
            <Title text="Game Styles" className="text-center mb-4" /> {/* Título de la sección */}
            {/* Grid para mostrar las tarjetas de estilo de juego */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
                {/* Mapeo de todos los estilos de juego y renderización de las tarjetas de estilo */}
                {getAllGameStyle().map((gameStyle, i) => (
                    <CardGameStyle key={i} gameStyle={gameStyle} /> // Tarjeta de estilo de juego
                ))}
            </div>
        </Container>
    );
}

export default MajorSection; // Exporta el componente MajorSection para su uso en otros archivos
