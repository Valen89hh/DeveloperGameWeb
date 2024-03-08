// Define una interfaz para las propiedades de los componentes Input y TextField
interface InputProps {
    name: string; // Nombre del campo de entrada
    id: string; // Identificador único del campo
    type?: string; // Tipo de entrada (por defecto: texto)
    value: string; // Valor del campo
    onValueChange: (param: string) => void; // Función de callback para manejar cambios en el valor del campo
}

// Componente funcional para un campo de entrada de texto
const InputContact: React.FC<InputProps> = ({
    name,
    id,
    type = "text", // Por defecto, el tipo de entrada es texto
    value,
    onValueChange
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {/* Etiqueta para el campo de entrada */}
            <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark dark:text-accent-text cursor-pointer">
                {name}
            </label>
            {/* Campo de entrada */}
            <input
                type={type}
                id={`ipt${id}`}
                className="rounded-md p-3 border-solid border-background dark:border-accent-text border-[1px] outline-none font-semibold text-sm text-secondary-dark dark:text-white bg-slate-50 dark:bg-accent-secondary-button"
                required={true} // Campo requerido
                value={value}
                onChange={e => onValueChange(e.target.value)} // Manejar cambios en el valor
            />
        </div>
    );
}

// Componente funcional para un campo de texto de área grande
const TextFieldContact: React.FC<InputProps> = ({
    name,
    id,
    value,
    onValueChange
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {/* Etiqueta para el campo de texto */}
            <label htmlFor={`ipt${id}`} className="font-semibold text-sm text-primary-dark dark:text-accent-text cursor-pointer">
                {name}
            </label>
            {/* Campo de texto de área grande */}
            <textarea
                id={`ipt${id}`}
                className="rounded-md p-3 border-solid w-full h-[200px] border-background dark:border-accent-text border-[1px] outline-none font-semibold text-sm text-secondary-dark dark:text-white bg-slate-50 dark:bg-accent-secondary-button resize-none"
                value={value}
                onChange={e => onValueChange(e.target.value)} // Manejar cambios en el valor
            ></textarea>
        </div>
    );
}

// Exportar los componentes InputContact y TextFieldContact para su uso en otros archivos
export { InputContact, TextFieldContact };
