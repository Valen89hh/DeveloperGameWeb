import Container from "@/components/general/Containers/Container";
import InformationGameDev from "./InformationGameDev";
import ProjectsSection from "./ProjectsSection";

const Portfolio = () => {
    return ( <Container style="my-[3rem] ">
        <InformationGameDev/>
        <ProjectsSection/>
    </Container> );
}
 
export default Portfolio;