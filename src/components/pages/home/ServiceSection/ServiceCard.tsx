import { ServiceModel } from "@/domain/models/local/ServiceModel"; // Importa el modelo de servicio desde el directorio especificado

// Componente funcional para el botón "More Info"
const ButtonMoreInfo = () => {
    return (
        <button className="mx-auto my-2 text-blackout dark:text-white bg-secondary dark:bg-accent-secondary-button cursor-pointer w-2/3 p-3 rounded-2xl font-bold">
            More Info
        </button>
    );
}

// Componente funcional para mostrar características del servicio
const ServiceCharacteristic = ({ characteristic }: { characteristic: string }) => {
    return (
        <li className="flex gap-2 items-center">
            {/* Icono */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-secondary-dark dark:text-accent-text" d="M1.51313 15.487L5.67913 19.653C6.24172 20.2154 7.00464 20.5314 7.80013 20.5314C8.59563 20.5314 9.35855 20.2154 9.92113 19.653L22.7871 6.787C22.9693 6.59839 23.0701 6.34579 23.0678 6.0836C23.0655 5.8214 22.9604 5.57059 22.775 5.38518C22.5895 5.19977 22.3387 5.0946 22.0765 5.09232C21.8143 5.09004 21.5617 5.19084 21.3731 5.373L8.50713 18.239C8.31961 18.4265 8.0653 18.5318 7.80013 18.5318C7.53497 18.5318 7.28066 18.4265 7.09313 18.239L2.92713 14.073C2.73853 13.8908 2.48593 13.79 2.22373 13.7923C1.96154 13.7946 1.71072 13.8998 1.52532 14.0852C1.33991 14.2706 1.23474 14.5214 1.23246 14.7836C1.23018 15.0458 1.33098 15.2984 1.51313 15.487Z" fill="#374957" />
            </svg>
            {/* Texto de la característica */}
            <span className="text-[1rem] font-normal text-secondary-dark dark:text-accent-text ">{characteristic}</span>
        </li>
    );
}

// Props para el componente de la tarjeta de servicio
interface ServiceCardProps {
    service: ServiceModel; // Modelo de servicio
}

// Componente funcional para la tarjeta de servicio
const ServiceCard: React.FC<ServiceCardProps> = ({
    service
}) => {
    return (
        <article className="border-solid border-[2px] border-primary-light dark:border-accent-border rounded-xl p-4 flex flex-col bg-white dark:bg-accent-light">
            {/* Nombre del servicio */}
            <h3 className="font-bold dark:text-slate-100 text-[1.3rem] m-0">{service.nameService}</h3>
            {/* Precio del servicio */}
            <span className="text-blackout dark:text-white text-[4rem] font-bold p-0 leading-[4.5rem] ">${service.price != -1 ? service.price : "XXX"}</span>
            {/* Botón de "More Info" */}
            <ButtonMoreInfo />
            {/* Lista de características del servicio */}
            <ul className="flex flex-col gap-3 mt-2">
                {service.characteristics.map((characteristic, i) => (
                    <ServiceCharacteristic key={i} characteristic={characteristic} />
                ))}
            </ul>
        </article>
    );
}

export default ServiceCard; // Exporta el componente ServiceCard para su uso en otros archivos
