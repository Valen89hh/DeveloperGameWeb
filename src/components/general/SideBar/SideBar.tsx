
import { useRef, useState } from 'react';
import style from './Sidebar.module.css'
import { useSideBarContext } from '@/context/SideBarContext';
import Logo from '../Logo/Logo';


const SideBar = () => {

    const {open, setOpen} = useSideBarContext()

    const refSide = useRef<HTMLDivElement>(null)

    const onDismissRequest = (e: React.MouseEvent) =>{
        if(refSide.current && refSide.current == e.target){
            setOpen(false)
        }
    }

    return ( <div ref={refSide} onClick={onDismissRequest} className={`bg-[#02020277] fixed 
    inset-0 w-screen
     h-screen z-10
     ${open ? style["visible-side"] : style["hidden-side"]}`}>
        <div className={`w-[80%] sm:w-[400px] 
        h-full bg-white dark:bg-accent-dark absolute
         top-0 right-0
         ${open ? style["side-open"] : style["side-close"]}`}>
        <nav className="p-4">
            <Logo/>
            <ul className="flex mt-3 flex-col gap-4 font-bold text-primary-dark">
                <li>
                    <a href="#home" onClick={()=>setOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#services" onClick={()=>setOpen(false)}>Services</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>setOpen(false)}>Portfolio</a>
                </li>
                <li>
                    <a href="#about" onClick={()=>setOpen(false)}>About</a>
                </li>
                <a href='#contact' className="px-3 py-[0.4rem] text-white bg-primary rounded-md" onClick={()=>setOpen(false)}>
                    Contact
                </a>
            </ul>
        </nav>
        </div>
    </div> );
}
 
export default SideBar;