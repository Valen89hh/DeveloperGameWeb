
interface InputProps{
    name: string,
    id: string,
    type?: string,
    value: string,
    onValueChange: (param: string) => void
}

const InputContact: React.FC<InputProps> = ({
    name,
    id,
    type = "text",
    value,
    onValueChange

}) => {
    return ( <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark dark:text-accent-text cursor-pointer">{name}</label>
        <input type={type} id={`ipt${id}`} className="rounded-md p-3 border-solid 
        border-background dark:border-accent-text border-[1px] outline-none
        font-semibold text-sm text-secondary-dark dark:text-white bg-slate-50 dark:bg-accent-secondary-button"
        required={true}
        value={value}
        onChange={e=> onValueChange(e.target.value)} />
    </div> );
}

const TextFieldContact: React.FC<InputProps> = ({
    name,
    id,
    value,
    onValueChange
}) => {
    return ( <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark dark:text-accent-text cursor-pointer">{name}</label>
        <textarea id={`ipt${id}`} 
        className="rounded-md p-3 border-solid 
        w-full h-[200px]
        border-background dark:border-accent-text border-[1px] outline-none
        font-semibold text-sm text-secondary-dark dark:text-white bg-slate-50 dark:bg-accent-secondary-button
        resize-none"
        value={value}
        onChange={e=>onValueChange(e.target.value)}
        ></textarea>
    </div> );
}
 
export  {InputContact,TextFieldContact};