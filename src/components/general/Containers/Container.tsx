interface ContainerProps{
    style?: string,
    children: React.ReactNode,
    id?: string
}


const Container: React.FC<ContainerProps> = ({
    style,
    children,
    id
}) => {
    return ( <div className={`container mx-auto ${style} px-2 sm:px-0`} id={id}>
        {children}
    </div> );
}
 
export default Container;