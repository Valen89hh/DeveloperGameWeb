interface DividerProps{
    style?: string,
    color?: string,
    size?: string
}



const Divider: React.FC<DividerProps> = ({
    style = "",
    color = "bg-secondary dark:bg-accent-light",
    size = "h-[2px]"
}) => {
    return ( <div className={`${size} ${color}  w-full ${style}`}>

    </div> );
}
 
export default Divider;