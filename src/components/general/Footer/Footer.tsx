import Container from "../Containers/Container"; // Importa el componente Container
import Divider from "../Dividers/Divider"; // Importa el componente Divider
import IconSocialMedia from "../Dividers/IconSocialMedia"; // Importa el componente IconSocialMedia
import Logo from "../Logo/Logo"; // Importa el componente Logo

// Componente funcional Footer
const Footer = () => {
    return (
        // Estructura del footer
        <footer>
            {/* Divider como separador */}
            <Divider />

            {/* Contenedor flex para alinear los iconos sociales */}
            <div className="flex justify-center items-center py-1">
                {/* Iconos sociales */}
                <IconSocialMedia link="https://twitter.com">
                    {/* Contenido del icono de Twitter */}
                    <path d="M 32 6 C 26.568583 6 22.160643 10.388731 22.042969 15.792969 C 17.240727 15.216998 14.113589 13.421507 12.195312 11.652344 C 10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094 C 6.8007812 7.5996094 5 10 5 13.5 C 5 15.500985 5.6317952 16.981554 6.3847656 18.236328 C 6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719 C 4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406 L 8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141 C 7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078 C 10.11485 32.290298 11.34227 33.023169 12.789062 33.701172 C 11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281 C 3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609 C 9.0490812 40.948217 12.539474 42 17.5 42 C 26.219697 42 32.484656 37.817151 36.394531 32.515625 C 40.304407 27.214099 42 20.861111 42 16 C 42 15.691547 41.980739 15.387437 41.953125 15.085938 C 44.064371 13.051602 44.856626 11.522235 44.894531 11.447266 C 45.084531 11.066266 45.01375 10.608688 44.71875 10.304688 C 44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797 L 43.419922 10.166016 C 43.280922 10.230016 43.141953 10.294422 43.001953 10.357422 C 43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875 C 44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375 C 43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312 C 41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594 C 37.072578 7.0534724 34.656873 6 32 6 z M 32 9 C 35.883178 9 39 12.116822 39 16 C 39 20.138889 37.445593 26.035901 33.980469 30.734375 C 30.515344 35.432849 25.280303 39 17.5 39 C 13.7348 39 11.230189 38.318942 9.3535156 37.582031 C 11.319341 37.276755 13.011947 36.869367 14.228516 36.398438 C 16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922 C 14.140556 31.364241 12.394328 30.263307 11.298828 29.345703 L 12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609 C 9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422 C 8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203 C 11.169922 19.158203 8 17.7 8 13.5 C 8 12.745947 8.2088435 12.268355 8.3613281 11.697266 C 8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422 C 12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5 L 25 16 C 25 12.116822 28.116822 9 32 9 z"></path>
                </IconSocialMedia>
                <IconSocialMedia link="https://instagram.com">
                    {/* Contenido del icono de Instagram */}
                    <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                </IconSocialMedia>
                <IconSocialMedia link="https://facebook.com">
                    {/* Contenido del icono de Facebook */}
                    <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 32.380773 34.967178 39.306373 27 40.720703 L 27 29 L 30.625 29 C 31.129 29 31.555188 28.623047 31.617188 28.123047 L 31.992188 25.123047 C 32.028188 24.839047 31.938047 24.553891 31.748047 24.337891 C 31.559047 24.122891 31.287 24 31 24 L 27 24 L 27 20.5 C 27 19.397 27.897 18.5 29 18.5 L 31 18.5 C 31.552 18.5 32 18.053 32 17.5 L 32 14.125 C 32 13.607 31.604844 13.174906 31.089844 13.128906 C 31.030844 13.123906 29.619984 13 27.833984 13 C 23.426984 13 21 15.616187 21 20.367188 L 21 24 L 17 24 C 16.448 24 16 24.447 16 25 L 16 28 C 16 28.553 16.448 29 17 29 L 21 29 L 21 40.720703 C 13.032822 39.306373 7 32.380773 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                </IconSocialMedia>
                <IconSocialMedia link="https://whatsapp.com">
                    {/* Contenido del icono de WhatsApp */}
                    <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z"></path>
                </IconSocialMedia>
            </div>

            {/* Divider como separador */}
            <Divider />

            {/* Contenedor para la sección principal del footer */}
            <Container style="flex justify-between flex-wrap pt-[2rem] pb-[3rem]">
                {/* Contenido izquierdo */}
                <div className="w-2/3 sm:w-1/3">
                    {/* Logo */}
                    <Logo />
                    {/* Texto descriptivo */}
                    <p className="text-primary-dark dark:text-accent-text text-[0.9rem] mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                {/* Contenido central */}
                <div className="w-1/3 flex flex-col items-center">
                    {/* Lista de enlaces */}
                    <ul className="text-primary-dark dark:text-accent-text text-[0.9rem] flex flex-col gap-1">
                        <li className="mb-[1rem]">
                            {/* Título de la sección */}
                            <h3 className="font-bold text-primary-dark dark:text-accent-text text-[1rem]">About us</h3>
                        </li>
                        {/* Enlaces */}
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>
                {/* Contenido derecho */}
                <div className="w-1/3 text-primary-dark dark:text-accent-text text-[0.9rem] font-normal">
                    {/* Información de contacto */}
                    <h3 className="font-bold text-primary-dark dark:text-accent-text text-[1rem] mb-[1rem]">Contact us</h3>
                    <p className="mb-[1.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <span>+51 914 605 806</span>
                </div>
            </Container>

            {/* Divider como separador */}
            <Divider />

            {/* Texto de derechos de autor */}
            <div className="w-full text-center py-[1rem]">
                <span className="text-primary-dark dark:text-accent-text text-sm">Copyright 2024 GameDevCo</span>
            </div>

            {/* Divider como separador */}
            <Divider />
        </footer>
    );
}

export default Footer; // Exporta el componente Footer