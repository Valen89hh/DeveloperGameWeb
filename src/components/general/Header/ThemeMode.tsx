// Interfaz que define las propiedades que acepta el componente ThemeMode
interface ThemeModeProps {
    imgMode: string; // URL de la imagen que representa el modo de tema
    setImgMode: (param: string) => void; // Función para establecer la URL de la imagen del modo de tema
}

// Componente funcional ThemeMode
const ThemeMode: React.FC<ThemeModeProps> = ({
    imgMode,
    setImgMode
}) => {
    // Función para alternar entre los modos claro y oscuro y cambiar la imagen del modo de tema
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark"); // Cambia la clase "dark" del documento HTML
        // Verifica si el documento HTML tiene la clase "dark" para determinar el tema actual
        if (document.documentElement.classList.contains("dark")) {
            setImgMode("/icons/night-mode.svg"); // Establece la imagen del modo de tema en oscuro
        } else {
            setImgMode("/icons/light-mode.svg"); // Establece la imagen del modo de tema en claro
        }
    };

    return (
        // Contenedor del modo de tema, que cambia entre los modos claro y oscuro al hacer clic
        <div onClick={toggleTheme} className="w-7 p-1 border-solid border-slate-700 border-2 rounded-full btnMode">
            {/* Imagen del modo de tema */}
            <img src={imgMode} alt="img" className="modeImg" />
        </div>
    );
};

export default ThemeMode; // Exporta el componente ThemeMode
