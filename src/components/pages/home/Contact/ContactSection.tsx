import ContainerCenter from "@/components/general/Containers/CotainerCenter";
import { InputContact, TextFieldContact } from "./Inputs";
import ButtonPrimary from "@/components/general/Buttons/ButtonPrimary";

const ContactSection = () => {
    return ( <div className="bg-secondary my-[8rem] " id="contact">
        <ContainerCenter className="flex-col px-2 py-[3rem] ">
            <h3 className="font-bold text-[1.6rem] text-primary-dark">Say hello</h3>
            <span className="text-[0.8rem] font-medium text-secondary-dark mb-[3rem] ">Lorem Ipsum is simply dummy text of the printing .</span>
            <form action="" className="w-full sm:w-2/3 flex flex-col gap-4">
                

                <div className="flex w-full gap-4 flex-col xs:flex-row">
                    <InputContact name="First Name" id="iptFirstName"/>
                    <InputContact name="Last Name" id="iptLastName"/>
                </div>
                <InputContact name="Email Address" id="iptEmailAddress" type="email" />
                <TextFieldContact name="Message" id="txtMessage"/>

                <ButtonPrimary className="w-full sm:self-end sm:w-fit px-[2rem] ">
                    Send
                </ButtonPrimary>
            </form>
        </ContainerCenter>
    </div> );
}
 
export default ContactSection;