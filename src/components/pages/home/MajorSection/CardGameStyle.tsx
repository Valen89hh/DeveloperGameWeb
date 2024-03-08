import { GameStyleModel } from "@/domain/models/local/GameStyleModel";
import Image from "next/image";


interface CardGameStyleProps{
    gameStyle: GameStyleModel
}

const CardGameStyle: React.FC<CardGameStyleProps> = ({
    gameStyle
}) => {
    return ( <article className="p-3 border-solid border-[2px] border-primary-light dark:border-accent-border rounded-lg bg-white dark:bg-accent-light">
        <Image
            src={gameStyle.img}
            alt="style1"
            height={50}
            width={50}
            className="rounded-full"
        />
        <h4 className="text-blackout dark:text-white font-bold text-lg my-1">{gameStyle.style}</h4>
        <p className="text-primary-dark dark:text-accent-text text-sm">{gameStyle.description}</p>
    </article> );
}
 
export default CardGameStyle;