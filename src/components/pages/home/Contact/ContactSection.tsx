"use client"

// Importaciones de componentes y funciones de React necesarios
import ContainerCenter from "@/components/general/Containers/CotainerCenter";
import { InputContact, TextFieldContact } from "./Inputs";
import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";
import { FormEvent, useEffect, useState } from "react";

// Definición del componente ContactSection
const ContactSection = () => {
    // Estados para controlar los campos del formulario y su estado de deshabilitado
    const [isDisable, setIsDisable] = useState(true); // Estado para habilitar o deshabilitar el botón de enviar
    const [firstName, setFirstName] = useState(""); // Estado para el nombre
    const [lastName, setLastName] = useState(""); // Estado para el apellido
    const [email, setEmail] = useState(""); // Estado para el correo electrónico
    const [message, setMessage] = useState(""); // Estado para el mensaje

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        try {
            setIsDisable(false); // Deshabilitar el botón de enviar mientras se procesa la solicitud
            // Realizar una solicitud POST a la API con los datos del formulario
            const res = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    firstname: firstName,
                    lastname: lastName,
                    message: message
                })
            });
            // Limpiar los campos del formulario después de enviar la solicitud
            setEmail("");
            setLastName("");
            setFirstName("");
            setMessage("");
            // Extraer los datos de la respuesta
            const data = await res.json();
            console.log(data); // Mostrar los datos de la respuesta en la consola
        } catch (error) {
            console.error("Error en la solicitud de red:", error); // Manejar cualquier error de red
        }
    };

    // Efecto para verificar si todos los campos del formulario tienen algún valor
    useEffect(() => {
        // Habilitar el botón de enviar si todos los campos tienen algún valor, de lo contrario, deshabilitarlo
        setIsDisable(firstName !== "" && lastName !== "" && email !== "" && message !== "");
    }, [firstName, lastName, email, message]); // Dependencias del efecto

    // Renderización del componente
    return (
        <div className="bg-secondary dark:bg-accent-light my-[8rem] " id="contact">
            {/* Contenedor centralizado */}
            <ContainerCenter className="flex-col px-2 py-[3rem] ">
                <h3 className="font-bold text-[1.6rem] text-primary-dar dark:text-accent-text">Say hello</h3>
                <span className="text-[0.8rem] font-medium text-secondary-dark dark:text-accent-text mb-[3rem] ">Lorem Ipsum is simply dummy text of the printing .</span>
                {/* Formulario de contacto */}
                <form onSubmit={handleSubmit} className="w-full sm:w-2/3 flex flex-col gap-4">
                    {/* Campos de entrada para el nombre y el apellido */}
                    <div className="flex w-full gap-4 flex-col xs:flex-row">
                        <InputContact name="First Name" id="iptFirstName" value={firstName} onValueChange={setFirstName} />
                        <InputContact name="Last Name" id="iptLastName" value={lastName} onValueChange={setLastName} />
                    </div>
                    {/* Campo de entrada para la dirección de correo electrónico */}
                    <InputContact name="Email Address" id="iptEmailAddress" type="email" value={email} onValueChange={setEmail} />
                    {/* Campo de texto para el mensaje */}
                    <TextFieldContact name="Message" id="txtMessage" value={message} onValueChange={setMessage} />
                    {/* Botón de enviar */}
                    <ButtonPrimary className="w-full sm:self-end sm:w-fit px-[2rem]" disable={!isDisable}>
                        Send
                    </ButtonPrimary>
                </form>
            </ContainerCenter>
        </div>
    );
};

export default ContactSection; // Exporta el componente ContactSection
