import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary"; // Importar el componente ButtonPrimary
import Container from "@/components/general/Containers/Container"; // Importar el componente Container

// Componente funcional para la sección principal de la página
const MainSection = () => {
    return (
        // Contenedor principal con una imagen de fondo
        <Container style="relative h-[400px] rounded-xl overflow-hidden my-[4rem] " id="home">
            {/* Imagen de fondo */}
            <img src="/drawable/MainImage1.svg" alt="" className="block object-cover w-full h-full rounded-xl" />
            {/* Contenido superpuesto */}
            <div className="absolute left-0 px-10 pb-10 bottom-0 z-3">
                {/* Título */}
                <h1 className="text-[2.1rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white">Pixel-perfect game development services</h1>
                {/* Descripción */}
                <p className="text-[0.8rem] sm:text-[0.9rem] font-normal text-white">From concept to launch, we help you create games that players will love. We offer a full suite of video game development services for PC, console, and mobile platforms.</p>
                {/* Botón de acción */}
                <ButtonPrimary className="mt-4">
                    <span>Get Started</span>
                </ButtonPrimary>
            </div>
        </Container>
    );
}

export default MainSection; // Exportar el componente MainSection
