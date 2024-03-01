import { ServiceModel } from "@/domain/models/local/ServiceModel";
import { v4 as uuidv4 } from 'uuid';

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

function getAllService(){
    return listService
}

export default getAllService