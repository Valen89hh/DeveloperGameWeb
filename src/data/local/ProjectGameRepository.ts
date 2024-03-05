import { ProjectGameModel } from "@/domain/models/local/ProjectGameModel";

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

function getAllProjectsGame(){
    return listProjectsGame
}

export default getAllProjectsGame