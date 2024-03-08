import Container from "@/components/general/Containers/Container"; // Importa el contenedor de la aplicación
import Title from "@/components/general/Texts/Title"; // Importa el componente de título
import ServiceCard from "./ServiceCard"; // Importa el componente de tarjeta de servicio
import getAllService from "@/data/local/ServiceRepository"; // Importa la función para obtener todos los servicios


const ServiceSection = () => {
    return (
        <Container style="my-[4rem] " id="services"> {/* Contenedor para la sección de servicios */}
            <Title text="Our Services" className="text-center my-4" /> {/* Título de la sección */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"> {/* Grid para mostrar las tarjetas de servicio */}
                {/* Mapea sobre todos los servicios y crea una tarjeta de servicio para cada uno */}
                {getAllService().map((i) => (
                    <ServiceCard key={i.id} service={i} />
                ))}
            </div>
        </Container>

    );
}

export default ServiceSection;