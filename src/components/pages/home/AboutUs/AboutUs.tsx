import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";
import Container from "@/components/general/Containers/Container";

// Componente funcional que representa la sección "Acerca de nosotros"
const AboutUs = () => {
    return (
        // Contenedor con estilo de cuadrícula y clases adicionales, con un ID "about"
        <Container style="grid grid-cols-1 md:grid-cols-2 gap-5 my-[8rem]" id="about">
            {/* Imagen relacionada con el contenido */}
            <img src="/drawable/ImgAboutUs.svg" alt="" className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" />

            <div className="flex flex-col gap-4">
                {/* Título principal */}
                <h3 className="font-bold text-[2rem] text-blackout dark:text-white">A new frontier for game development</h3>
                {/* Párrafo con información sobre la empresa */}
                <p className="text-sm text-secondary-dark dark:text-accent-text">At GameDevCo, we are a passionate team of developers dedicated to delivering unforgettable gaming experiences for players of all ages and tastes. From idea conception to delivery of the final product, we strive to exceed expectations and leave a lasting impression on our players. With creative and talented minds, we transform concepts into stunning digital realities, whether it is a thrilling adventure game, a fast-paced action game, or an immersive virtual reality experience. Join us at GameDevCo and discover how we can turn your vision into a game that will make its mark on the game development industry.</p>
                {/* Botón primario para explorar los juegos */}
                <ButtonPrimary className="w-fit">
                    <span>Explore our games</span>
                </ButtonPrimary>
            </div>
        </Container>
    );
};

export default AboutUs; // Exporta el componente AboutUs
