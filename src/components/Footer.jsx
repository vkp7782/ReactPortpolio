import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-6 px-6 bg-card border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} vishalportfolio.com, All rights reserved
            </p>


            <p className="text-sm text-muted-foreground text-center md:text-left">
                Made with <span className="text-red-500">❤️</span> by Vishal
            </p>


            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};
