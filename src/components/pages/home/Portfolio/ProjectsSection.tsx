import SubTitle from "@/components/general/Texts/SubTitle";
import getAllProjectsGame from "@/data/local/ProjectGameRepository";
import { Licorice } from "next/font/google";

interface CardProjectProps{
    src: string,
    link: string
}

const CardProject: React.FC<CardProjectProps> = ({
    src, 
    link
}) => {
    return  <article className="relative rounded-md overflow-hidden max-h-[300px] ">
        <div className="absolute inset-0 bg-[#ffffff60] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <a href={link} target="_blank">
                <img src="/icons/PlayGame.png" alt="" />
            </a>-
        </div>

        <img src={src} alt="IMGPROPJECT" className="w-full h-full object-cover" />
    </article> ;
}
 

const ProjectsSection = () => {
    return ( <div className="mt-[3rem] ">
        <SubTitle text="Featured Projects" className="mb-3"/>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {getAllProjectsGame().map((game, i)=>(
                <CardProject key={i} link={game.link} src={game.img}/>
            ))}
        </div>
    </div> );
}
 
export default ProjectsSection;