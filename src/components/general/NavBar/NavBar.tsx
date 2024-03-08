import Image from "next/image";
import Container from "../Containers/Container";
import { useSideBarContext } from "@/context/SideBarContext";
import ThemeMode from "../Header/ThemeMode";
import Logo from "../Logo/Logo";
import { useState } from "react";

const NavBar = () => {

    const {setOpen} = useSideBarContext()
    const [imgMode, setImgMode] = useState("/icons/light-mode.svg")

    const changeModeTheme = (e: React.MouseEvent)=>{
        document.documentElement.classList.toggle("dark")
        if(document.documentElement.classList.contains("dark")){
            setImgMode("/icons/night-mode.svg")
        }else{
            setImgMode("/icons/light-mode.svg")
        }
    }

    return ( 
    <Container>
        <header className="w-full flex 
    justify-between items-center 
    py-4 ">
        <div className="flex gap-2">
        
            <Logo/>
        </div>

        <nav className="hidden sm:block">
            <ul className="flex gap-4 items-center text-blackout dark:text-white">
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
                    <a href="#about">About</a>
                </li>
                <li className="px-3 py-[0.4rem] text-white bg-primary rounded-md">
                    <a href="#contact">Contact</a>
                </li>
                <ThemeMode imgMode={imgMode} setImgMode={setImgMode}/>
            </ul>
        </nav>
        <div className="flex sm:hidden gap-2 ">
            <Image
                src={"/icons/Menu.svg"}
                alt="menu"
                height={27}
                width={27}
                className="cursor-pointer"
                onClick={()=> setOpen(true)}
            />
            <ThemeMode imgMode={imgMode} setImgMode={setImgMode}/>
        </div>
        </header> 
    </Container>
    );
}
 
export default NavBar;