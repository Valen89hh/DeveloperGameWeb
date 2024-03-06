interface ContainerCeterProps{
    children: React.ReactNode
    className?: string
}

const ContainerCenter: React.FC<ContainerCeterProps> = ({
    children,
    className
}) => {
    return ( <div className={`flex  justify-center items-center ${className}`}>
        {children}
    </div> );
}
 
export default ContainerCenter;