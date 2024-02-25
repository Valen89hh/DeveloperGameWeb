interface ContainerProps{
    style?: string,
    children: React.ReactNode
}


const Container: React.FC<ContainerProps> = ({
    style,
    children
}) => {
    return ( <div className={`container mx-auto ${style}`}>
        {children}
    </div> );
}
 
export default Container;