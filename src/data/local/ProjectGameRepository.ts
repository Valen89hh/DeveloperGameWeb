import { ProjectGameModel } from "@/domain/models/local/ProjectGameModel"; // Importa el modelo de proyecto de juego

// Lista de proyectos de juego con sus detalles
const listProjectsGame: ProjectGameModel[] = [
    {
        img: "/drawable/Project1.svg",
        link: "/"
    },
    {
        img: "/drawable/Project2.svg",
        link: "/"
    },
    {
        img: "/drawable/Project3.svg",
        link: "/"
    },
    {
        img: "/drawable/Project4.svg",
        link: "/"
    },
    {
        img: "/drawable/Project5.svg",
        link: "/"
    }
]

// Función para obtener todos los proyectos de juego disponibles
function getAllProjectsGame(): ProjectGameModel[] {
    return listProjectsGame; // Devuelve la lista de proyectos de juego
}

export default getAllProjectsGame; // Exporta la función getAllProjectsGame para su uso en otros archivos