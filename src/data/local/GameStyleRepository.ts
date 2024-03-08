import { GameStyleModel } from "@/domain/models/local/GameStyleModel"; // Importa el modelo de estilo de juego

// Lista de estilos de juego con sus detalles
const listGameStyle: GameStyleModel[] = [
    {
        img: "/drawable/StyleGame1.svg",
        style: "Strategy Games",
        description: "Create a new world with deep systems and intricate mechanics."
    },
    {
        img: "/drawable/StyleGame2.svg",
        style: "Action Games",
        description: "Design fast-paced, thrilling experiences that keep players  on the edge of their seats."
    },
    {
        img: "/drawable/StyleGame3.svg",
        style: "Adventure Games",
        description: "Craft rich, immersive narratives and breathtaking environments."
    },
    {
        img: "/drawable/StyleGame4.svg",
        style: "Role-Playing Games",
        description: "Develop epic quests, character progression, and dynamic combat systems."
    }
]


// Función para obtener todos los estilos de juego disponibles
function getAllGameStyle(): GameStyleModel[] {
    return listGameStyle; // Devuelve la lista de estilos de juego
}

export default getAllGameStyle; // Exporta la función getAllGameStyle para su uso en otros archivos