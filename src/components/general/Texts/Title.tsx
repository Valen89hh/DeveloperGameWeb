interface TitleProps{
    text: string,
    className?: string
}

const Title: React.FC<TitleProps> = ({
    text,
    className = ""
}) => {
    return ( <h2 className={`text-blackout dark:text-white text-2xl font-bold ${className}`}>
        {text}
    </h2> );
}
 
export default Title;