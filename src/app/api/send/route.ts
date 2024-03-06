import { EmailTemplate } from "@/components/email/EmailTemplate";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_J7iC59Ac_82xLib1akq9dbQBGF2MbnZXy")

export async function POST(req: any) {
    try{
        const reqData = await req.json()
        console.log(reqData)
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['valvasvarodri@gmail.com'],
            subject: `'Hello ${reqData.firstname}'`,
            react: EmailTemplate({
                firstName: reqData.firstname,
                lastName: reqData.lastname,
                message: reqData.message,
                email: reqData.email
            }),
            text: ""
        })
        return Response.json(data)
    }catch(error){
        return Response.json({error})
    }
    
}