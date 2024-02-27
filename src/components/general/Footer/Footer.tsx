import Container from "../Containers/Container";
import Divider from "../Dividers/Divider";
import IconSocialMedia from "../Dividers/IconSocialMedia";
import Logo from "../Logo/Logo";

const Footer = () => {
    return ( <footer>
        <Divider/>

        <div className="flex justify-center items-center py-1">
            <IconSocialMedia src="/icons/Discord.svg"/>
            <IconSocialMedia src="/icons/Twitter.svg"/>
            <IconSocialMedia src="/icons/Discord.svg"/>

        </div>
        <Divider/>
        <Container style="flex justify-between flex-wrap pt-[2rem] pb-[3rem]">
            <div className="w-1/3">
                <Logo/>
                <p className="text-primary-dark text-[0.9rem] mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="w-1/3 flex flex-col items-center">
                <ul className="text-primary-dark text-[0.9rem] flex flex-col gap-1">
                    <li className="mb-[1rem]">
                        <h3 className="font-bold text-primary-dark text-[1rem]">About us</h3>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#home">About us</a>
                    </li>
                    <li>
                        <a href="#contact">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 text-primary-dark text-[0.9rem] font-normal">
                <h3 className="font-bold text-primary-dark text-[1rem] mb-[1rem]">Contact us</h3>
                <p className="mb-[1.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <span>+51 914 605 806</span>
            </div>
        </Container>
        <Divider/>
        <div className="w-full text-center py-[1rem]">
            <span className="text-primary-dark text-sm">Copyright ® 2024 GameDevCo</span>
        </div>
        <Divider/>

    </footer> );
}
 
export default Footer;