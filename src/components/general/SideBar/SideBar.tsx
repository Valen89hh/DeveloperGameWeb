
import { useRef, useState } from 'react';
import style from './Sidebar.module.css'
import { useSideBarContext } from '@/context/SideBarContext';


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
        h-full bg-white absolute
         top-0 right-0
         ${open ? style["side-open"] : style["side-close"]}`}>

        </div>
    </div> );
}
 
export default SideBar;