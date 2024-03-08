import Container from "@/components/general/Containers/Container"; // Importa el componente Container desde el directorio especificado
import InformationGameDev from "./InformationGameDev"; // Importa el componente InformationGameDev desde el archivo local
import ProjectsSection from "./ProjectsSection"; // Importa el componente ProjectsSection desde el archivo local

// Componente funcional para la sección de cartera
const Portfolio = () => {
    return (
        <Container style="my-[8rem] " id="portfolio"> {/* Contenedor principal con estilos y ID específicos */}
            <InformationGameDev /> {/* Renderiza el componente InformationGameDev */}
            <ProjectsSection /> {/* Renderiza el componente ProjectsSection */}
        </Container>
    );
}

export default Portfolio; // Exporta el componente Portfolio para su uso en otros archivos
