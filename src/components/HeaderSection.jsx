import { useState } from "react";
import logo from "../assets/images/logo.jpg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState("หน้าแรก"); // กำหนด default

    const navItems = ["หน้าแรก", "สินค้า", "บริการ", "ผลงาน", "ติดต่อเรา"];

    return (
        <header className="bg-neutral-light">
            <nav className="flex items-center justify-between px-8 py-4 container mx-auto">

                <a href="#">
                    <img src={logo} alt="logo" className="h-10 w-10 md:h-16 md:w-16" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium text-content-hover text-lg">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className={activePage === item ? "border-b-2 border-accent-hover pb-1" : ""}
                        >
                            <a href="#" onClick={() => setActivePage(item)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-4">
                    <button>
                        <span className="material-symbols-outlined text-[28px]">person</span>
                    </button>
                    <button className="relative">
                        <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
                        <span className="absolute -top-1 -right-2 bg-accent-dark text-accent-lighter text-xs rounded-full px-1.5">
                            2
                        </span>
                    </button>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined text-[28px]">menu</span>
                    </button>
                </div>

            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} px-8 pb-4`}>
                <ul className="flex flex-col space-y-4 font-medium text-content-hover text-lg">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className={activePage === item ? "border-b-2 border-accent-hover pb-1" : ""}
                        >
                            <a href="#" onClick={() => setActivePage(item)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    );
}

export default Header;