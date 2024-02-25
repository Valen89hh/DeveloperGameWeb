import Container from "../Containers/Container";

const NavBar = () => {
    return ( 
    <Container>
        <header className="w-full flex 
    justify-between items-center 
    py-4 ">
        <div className="flex gap-2">
        
            <img src="/drawable/Logo.svg" alt="" />
            <h2 className="text-xl font-bold text-blackout">GameDevCo</h2>
        </div>

        <nav>
            <ul className="flex gap-4 items-center">
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
                    <a href="#About">Home</a>
                </li>
                <li className="px-3 py-[0.4rem] text-white bg-primary rounded-md">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        </header> 
    </Container>
    );
}
 
export default NavBar;