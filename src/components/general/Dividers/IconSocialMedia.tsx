interface IconSocialMediaProps{
    src: string
}

const IconSocialMedia: React.FC<IconSocialMediaProps> = ({
    src
}) => {
    return ( <a href="#" className="rounded-full hover:bg-slate-200 p-2 transition-all ease-in-out">
                <img src={src} alt="" className="" />
            </a> );
}
 
export default IconSocialMedia;