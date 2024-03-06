import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string,
  email: string,
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message
}) => (
  <div>
    <h1>Hola soy, {firstName} {lastName}!</h1>
    <h4>
      <strong>Email: </strong>{email}
    </h4>
    <span>
      <strong>Message:</strong><br /> 
      <p>{message}</p>
    </span>
    
  </div>
);
