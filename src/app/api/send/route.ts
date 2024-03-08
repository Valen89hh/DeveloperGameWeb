// Importa la clase EmailTemplate desde un archivo ubicado en "@/components/email/EmailTemplate"
import { EmailTemplate } from "@/components/email/EmailTemplate";

// Importa la clase Resend del módulo "resend"
import { Resend } from "resend";

// Crea una instancia de Resend con la clave de API proporcionada
const resend = new Resend("re_J7iC59Ac_82xLib1akq9dbQBGF2MbnZXy");

// Función asincrónica POST para manejar solicitudes POST
export async function POST(req: any) {
    try {
        // Espera a que los datos de la solicitud se conviertan en un objeto JavaScript
        const reqData = await req.json();
        
        // Construye un objeto de datos para enviar el correo electrónico
        const data = await resend.emails.send({
            // Dirección de correo electrónico del remitente
            from: 'Acme <onboarding@resend.dev>',
            // Dirección(es) de correo electrónico del destinatario
            to: ['valvasvarodri@gmail.com'],
            // Asunto del correo electrónico con interpolación de cadena
            subject: `'Te hablo ${reqData.firstname}'`,
            // Cuerpo del correo electrónico generado utilizando la plantilla de correo electrónico
            react: EmailTemplate({
                firstName: reqData.firstname,
                lastName: reqData.lastname,
                message: reqData.message,
                email: reqData.email
            }),
            // Texto del correo electrónico (vacío en este caso)
            text: ""
        });
        
        // Devuelve una respuesta JSON con los datos del correo electrónico enviado
        return Response.json(data);
    } catch(error) {
        // Maneja los errores y devuelve una respuesta JSON que contiene el objeto de error
        return Response.json({ error });
    }
}