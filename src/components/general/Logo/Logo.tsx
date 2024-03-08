const Logo = () => {
    return (
        <div className="flex gap-2 items-center">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current dark:text-white" d="M6 0.833333H0V5.27777V9.72223H6V14.1667H12V9.72223V5.27777H6V0.833333Z" fill="#121417" />
            </svg>
            <h2 className="text-xl font-bold text-blackout dark:text-white">GameDevCo</h2>
        </div>
    );
}

export default Logo;