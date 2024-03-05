import Container from "@/components/general/Containers/Container";
import CardGameStyle from "./CardGameStyle";
import Title from "@/components/general/Texts/Title";
import getAllGameStyle from "@/data/local/GameStyleRepository";

const MajorSection = () => {
    return ( <Container style="my-[3rem] ">

        <Title text="Game Styles" className="text-center mb-4"/>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
            {getAllGameStyle().map((gameStyle, i)=>(
                <CardGameStyle key={i} gameStyle={gameStyle}/>
            ))}
        </div>
    </Container> );
}
 
export default MajorSection;