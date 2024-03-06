interface ParrafoProps{
    children: React.ReactNode
}


const Parrafo: React.FC<ParrafoProps> = ({
    children
}) => {
    return ( <p className="text-sm text-secondary-dark">
        {children}
    </p> );
}
 
export default Parrafo;