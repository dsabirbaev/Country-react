
import "./style.scss";
import moon from "../../assets/icons/moon.svg";
const index = () => {
    return (
        <header className="shadow-md bg-white fixed top-0 left-0 w-full">
            <div className="container mx-auto px-5">
                <nav className="flex items-center justify-between h-[80px]">
                    <a href="#" className="text-[24px] text-black font-extrabold">Where in the world?</a>
                    <div className="flex items-center gap-2">
                        <img src={moon} alt="moon" />
                        <span className="text-[16px] text-black font-semibold">Dark Mode</span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;