import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";
import Container from "@/components/general/Containers/Container";
import Image from "next/image";

const AboutUs = () => {
    return  <Container style="grid grid-cols-1 md:grid-cols-2 gap-5 my-[8rem] " id="about">
        <img src="/drawable/ImgAboutUs.svg" alt="" className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" />

        <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[2rem] ">A new frontier for game development</h3>
            <p className="text-sm text-secondary-dark">At GameDevCo, we are a passionate team of developers dedicated to delivering unforgettable gaming experiences for players of all ages and tastes. From idea conception to delivery of the final product, we strive to exceed expectations and leave a lasting impression on our players. With creative and talented minds, we transform concepts into stunning digital realities, whether it's a thrilling adventure game, a fast-paced action game, or an immersive virtual reality experience. Join us at GameDevCo and discover how we can turn your vision into a game that will make its mark on the game development industry.</p>
            <ButtonPrimary className="w-fit">
                <span>Explore our games</span>
            </ButtonPrimary>
        </div>
    </Container> ; 
}
 
export default AboutUs;