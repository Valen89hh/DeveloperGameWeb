interface ButtonPrimaryProps{
    children: React.ReactNode,
    className?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    children,
    className = ""
}) => {
    return ( <button className={`px-3 py-[0.4rem] text-white bg-primary rounded-md ${className}`}>
        {children}
    </button> );
}
 
export default ButtonPrimary;