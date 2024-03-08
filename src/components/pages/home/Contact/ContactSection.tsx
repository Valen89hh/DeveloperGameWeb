"use client"

import ContainerCenter from "@/components/general/Containers/CotainerCenter";
import { InputContact, TextFieldContact } from "./Inputs";
import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";
import { useState } from "react";

const ContactSection = () => {

    const [isDisable, setIsDisable] = useState(true)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const checkedCompletFields = ()=>{
        return firstName != "" && lastName != "" && email != "" && message != ""
    }

    return ( <div className="bg-secondary dark:bg-accent-light my-[8rem] " id="contact">
        <ContainerCenter className="flex-col px-2 py-[3rem] ">
            <h3 className="font-bold text-[1.6rem] text-primary-dar dark:text-accent-text">Say hello</h3>
            <span className="text-[0.8rem] font-medium text-secondary-dark dark:text-accent-text mb-[3rem] ">Lorem Ipsum is simply dummy text of the printing .</span>
            <form action="" className="w-full sm:w-2/3 flex flex-col gap-4">
                

                <div className="flex w-full gap-4 flex-col xs:flex-row">
                    <InputContact name="First Name" id="iptFirstName" value={firstName} onValueChange={setFirstName} />
                    <InputContact name="Last Name" id="iptLastName" value={lastName} onValueChange={setLastName}/>
                </div>
                <InputContact name="Email Address" id="iptEmailAddress" type="email" value={email} onValueChange={setEmail} />
                <TextFieldContact name="Message" id="txtMessage" value={message} onValueChange={setMessage}/>

                <ButtonPrimary className="w-full sm:self-end sm:w-fit px-[2rem]" onClick={async()=>{
                    const res = await fetch("/api/send", {
                        method: "POST",
                        body:JSON.stringify({
                            "email": email,
                            "firstname": firstName,
                            "lastname": lastName,
                            "message": message
                        })
                    })
                    const data = await res.json()
                    console.log(data)
                }}
                    disable={!checkedCompletFields()}>
                    Send
                </ButtonPrimary>
            </form>
        </ContainerCenter>
    </div> );
}
 
export default ContactSection;