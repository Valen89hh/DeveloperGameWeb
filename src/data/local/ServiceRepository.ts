import { ServiceModel } from "@/domain/models/local/ServiceModel"; // Importa el modelo de servicio
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar IDs únicos

// Lista de servicios con sus detalles
const listService: ServiceModel[] = [
    {
        id: uuidv4(),
        nameService: "Web Game",
        price: 50,
        characteristics: [
            "Instant Accessibility",
            "Fun without Downloads",
            "Economic Solutions"
        ]
    },
    {
        id: uuidv4(),
        nameService: "Mobile Game",
        price: 150,
        characteristics: [
            "Personalized Experiences",
            "Device Adaptability",
            "Accesible price"
        ]
    },
    {
        id: uuidv4(),
        nameService: "Pc Game",
        price: 300,
        characteristics: [
            "Total immersion",
            "Stunning Graphics",
            "Affordable and Professional"
        ]
    },
    {
        id: uuidv4(),
        nameService: "Custom Game",
        price: -1,
        characteristics: [
            "Instant Accessibility",
            "Fun without Downloads",
            "Economic Solutions"
        ]
    }
]

// Función para obtener todos los servicios disponibles
function getAllService(): ServiceModel[] {
    return listService; // Devuelve la lista de servicios
}

export default getAllService; // Exporta la función getAllService para su uso en otros archivos