import { GameStyleModel } from "@/domain/models/local/GameStyleModel";
import Image from "next/image";


interface CardGameStyleProps{
    gameStyle: GameStyleModel
}

const CardGameStyle: React.FC<CardGameStyleProps> = ({
    gameStyle
}) => {
    return ( <article className="p-3 border-solid border-[1px] border-primary-light rounded-lg">
        <Image
            src={gameStyle.img}
            alt="style1"
            height={50}
            width={50}
            className="rounded-full"
        />
        <h4 className="text-blackout font-bold text-lg my-1">{gameStyle.style}</h4>
        <p className="text-primary-dark text-sm">{gameStyle.description}</p>
    </article> );
}
 
export default CardGameStyle;