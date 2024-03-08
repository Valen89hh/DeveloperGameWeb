interface IconSocialMediaProps{
    link: string,
    children: React.ReactNode
}

const IconSocialMedia: React.FC<IconSocialMediaProps> = ({
    link,
    children
}) => {
    return ( <a href={link} target="_blank" className="rounded-full  hover:bg-slate-200 p-2 transition-all ease-in-out">
                <svg className="fill-current text-primary-dark dark:text-accent-text" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                
                    {children}
                </svg>
            </a> );
}
 
export default IconSocialMedia;