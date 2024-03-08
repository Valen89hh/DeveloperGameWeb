import * as React from 'react';

// Define una interfaz para las props del componente EmailTemplate
interface EmailTemplateProps {
  firstName: string; // Nombre del destinatario del correo
  lastName: string; // Apellido del destinatario del correo
  email: string; // Dirección de correo electrónico del destinatario
  message: string; // Mensaje del correo electrónico
}

// Componente funcional EmailTemplate que recibe las props definidas por la interfaz
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message
}) => (
  <div>
    {/* Renderiza un saludo personalizado */}
    <h1>Hola soy, {firstName} {lastName}!</h1>
    {/* Renderiza la dirección de correo electrónico */}
    <h4>
      <strong>Email: </strong>{email}
    </h4>
    {/* Renderiza el mensaje del correo electrónico */}
    <span>
      <strong>Message:</strong><br />
      <p>{message}</p>
    </span>
  </div>
);
