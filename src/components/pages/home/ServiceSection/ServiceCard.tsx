import { ServiceModel } from "@/domain/models/local/ServiceModel";
import Image from "next/image";

const ButtonMoreInfo = () => {
    return ( <button className="mx-auto my-2 bg-secondary cursor-pointer w-2/3 p-3 rounded-2xl font-bold">
        More Info
    </button> );
}
 

const ServiceCharacteristic = ({characteristic}:{characteristic: string}) => {
    return ( <li className="flex gap-2 items-center">
        <Image
            src={"/icons/Check.svg"}
            alt="check"
            height={15}
            width={15}
        />
        <span className="text-[1rem] font-normal text-secondary-dark">{characteristic}</span>
    </li> );
}
 

interface ServiceCardProps{
    service: ServiceModel
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    service
}) => {
    return ( <article className="border-solid border-[2px]
     border-primary-light rounded-xl
     p-4 flex flex-col">
        <h3 className="font-bold text-[1.3rem] m-0">{service.nameService}</h3>
        <span className="text-blackout text-[4rem] font-bold p-0 leading-[4.5rem] ">${service.price != -1 ? service.price : "XXX"}</span>
        <ButtonMoreInfo/>
        <ul className="flex flex-col gap-3 mt-2">
            {service.characteristics.map((characteristic, i)=>(
                <ServiceCharacteristic key={i} characteristic={characteristic} />
            ))}
        </ul>
    </article> );
}
 
export default ServiceCard;