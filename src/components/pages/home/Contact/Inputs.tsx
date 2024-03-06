
interface InputProps{
    name: string,
    id: string,
    type?: string
}

const InputContact: React.FC<InputProps> = ({
    name,
    id,
    type = "text"
}) => {
    return ( <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark cursor-pointer">{name}</label>
        <input type={type} id={`ipt${id}`} className="rounded-md p-3 border-solid 
        border-background border-[1px] outline-none
        font-semibold text-sm text-secondary-dark"
        required={true} />
    </div> );
}

const TextFieldContact: React.FC<InputProps> = ({
    name,
    id
}) => {
    return ( <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark cursor-pointer">{name}</label>
        <textarea id={`ipt${id}`} 
        className="rounded-md p-3 border-solid 
        w-full h-[200px]
        border-background border-[1px] outline-none
        font-semibold text-sm text-secondary-dark
        resize-none"
        ></textarea>
    </div> );
}
 
export  {InputContact,TextFieldContact};