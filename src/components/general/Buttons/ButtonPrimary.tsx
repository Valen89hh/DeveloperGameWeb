interface ButtonPrimaryProps{
    children: React.ReactNode,
    className?: string,
    onClick?: ()=> void,
    disable?: boolean
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    children,
    className = "",
    onClick,
    disable = false
}) => {
    return ( <button className={`px-3 py-[0.4rem] text-white bg-primary rounded-md ${className}`}
     onClick={onClick} disabled={disable} >
        {children}
    </button> );
}
 
export default ButtonPrimary;