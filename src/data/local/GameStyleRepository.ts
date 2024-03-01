import { GameStyleModel } from "@/domain/models/local/GameStyleModel";

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


function getAllGameStyle(){
    return listGameStyle
}

export default getAllGameStyle