import SubTitle from "@/components/general/Texts/SubTitle"; // Importa el componente SubTitle desde el directorio especificado
import getAllProjectsGame from "@/data/local/ProjectGameRepository"; // Importa la función getAllProjectsGame desde el repositorio de proyectos locales

// Interfaz que define las props para el componente CardProject
interface CardProjectProps {
    src: string; // URL de la imagen del proyecto
    link: string; // URL del enlace al proyecto
}

// Componente funcional para renderizar un proyecto individual
const CardProject: React.FC<CardProjectProps> = ({ src, link }) => {
    return (
        <article className="relative rounded-md overflow-hidden max-h-[300px]">
            {/* Overlay que aparece al pasar el ratón y permite abrir el enlace al proyecto */}
            <div className="absolute inset-0 bg-[#ffffff60] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <a href={link} target="_blank">
                    <img src="/icons/PlayGame.png" alt="Play button" />
                </a>
            </div>
            {/* Imagen del proyecto */}
            <img src={src} alt="Project Image" className="w-full h-full object-cover" />
        </article>
    );
}

// Componente funcional para la sección de proyectos
const ProjectsSection = () => {
    return (
        <div className="mt-[3rem]">
            {/* Título de la sección */}
            <SubTitle text="Featured Projects" className="mb-3" />
            {/* Contenedor de proyectos */}
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {/* Mapeo de todos los proyectos y renderización de cada uno */}
                {getAllProjectsGame().map((game, i) => (
                    <CardProject key={i} link={game.link} src={game.img} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection; // Exporta el componente ProjectsSection para su uso en otros archivos
