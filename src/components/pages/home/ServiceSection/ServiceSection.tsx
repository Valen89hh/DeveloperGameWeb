import Container from "@/components/general/Containers/Container";
import Title from "@/components/general/Texts/Title";
import ServiceCard from "./ServiceCard";
import getAllService from "@/data/local/ServiceRepository";

const ServiceSection = () => {
    return ( <Container style="my-8">
        <Title text="Our Services" className="text-center my-4"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {getAllService().map((i)=>(
                <ServiceCard key={i.id} service={i}/>
            ))}
        </div>
    </Container> );
}
 
export default ServiceSection;