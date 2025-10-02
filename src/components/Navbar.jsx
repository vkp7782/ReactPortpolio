import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", "href": "#projects" },
    { name: "Contact", "href": "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // --- Theme Toggle State & Logic ---
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

        const handleScroll = () => {
            // Keep this check if you still want the `isScrolled` state for future use, 
            // but it no longer affects the navbar's size.
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    // ---------------------------------

    const ThemeToggleButton = (
        <button
            onClick={toggleTheme}
            className="absolute top-4 left-4 p-2 rounded-full z-50 transition-colors duration-300"
            aria-label="Toggle Theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-foreground" />
            )}
        </button>
    );

    const CloseMenuButton = (
        <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-foreground z-50"
            aria-label="Close Menu"
        >
            <X size={24} />
        </button>
    );

    return (
        // --- FINAL CHANGE HERE ---
        // Fixed padding to "py-6". The isScrolled check is removed from the padding logic.
        <nav className={cn("fixed w-full z-40 transition-all duration-300 py-6")}>

            <div className="container flex items-center justify-between">

                {/* Logo */}
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Vishal</span>Portfolio
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu OPEN Button (Top-Right) */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className={cn("md:hidden p-2 text-foreground z-50 transition-opacity", isMenuOpen && "opacity-0 pointer-events-none")}
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>

                {/* Mobile Menu Overlay */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>

                    {/* Theme Toggle Button (TOP-LEFT) */}
                    {ThemeToggleButton}

                    {/* X Close Button (TOP-RIGHT) */}
                    {CloseMenuButton}

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}