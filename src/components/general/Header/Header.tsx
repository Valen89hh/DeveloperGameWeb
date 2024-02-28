"use client"


import { SideBarProvider } from "@/context/SideBarContext";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const Header = () => {
    return ( <SideBarProvider>
        <NavBar/>
        <SideBar/>
    </SideBarProvider>);
}
 
export default Header;