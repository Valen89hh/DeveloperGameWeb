import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";
import Container from "@/components/general/Containers/Container";

const MainSection = () => {
    return ( <Container style="relative h-[400px] rounded-xl overflow-hidden my-[4rem] " id="home">
        <img src="/drawable/MainImage1.svg" alt="" className="block object-cover w-full h-full rounded-xl" />
        <div className="absolute left-0 px-10 pb-10 bottom-0 z-3">
            <h1 className="text-[2.1rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white">Pixel-perfect game development services</h1>
            <p className="text-[0.8rem] sm:text-[0.9rem] font-normal text-white">From concept to launch, we help you create games that players will love. We offer a full suite of video game development services for PC, console, and mobile platforms.</p>
            <ButtonPrimary className="mt-4">
                <span>Get Sterted</span>
            </ButtonPrimary>
        </div>
    </Container> );
}
 
export default MainSection;