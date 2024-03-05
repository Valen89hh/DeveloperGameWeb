interface SubTitleProps{
    text: string
    className?: string
}


const SubTitle: React.FC<SubTitleProps> = ({
    text,
    className
}) => {
    return ( <h3 className={`text-blackout text-lg font-bold ${className}`}>
        {text}
    </h3> );
}
 
export default SubTitle;