
interface ThemeModeProps{
    imgMode: string
    setImgMode: (param: string) => void
}

const ThemeMode: React.FC<ThemeModeProps> = ({
    imgMode,
    setImgMode
}) => {


    return ( <div onClick={()=>{
        document.documentElement.classList.toggle("dark")
        if(document.documentElement.classList.contains("dark")){
            setImgMode("/icons/night-mode.svg")
        }else{
            setImgMode("/icons/light-mode.svg")
        }
    }} className="w-7 p-1 border-solid border-slate-700 border-2 rounded-full btnMode" >
    <img src={imgMode} alt="img" className="modeImg" />
</div>  );
}
 
export default ThemeMode;