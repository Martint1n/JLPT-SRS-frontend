import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
document.documentElement.className = ""
    const [isOpen, setIsOpen] = useState(false)
    return (
    <header className="relative flex justify-between dark:bg-black dark:text-white">
        <div className="text-debug border-[3px] border-red-500 dark:bg-black text-sm pb-4 ">Apprendre une langue</div>
        {isOpen ? (
            <X onClick={() => setIsOpen(false)} />
            ) : (
            <Menu onClick={() => setIsOpen(true)} />
            )
        }

        {isOpen && (
                <nav className="
                absolute
                top-full
                items-end
                w-full
                flex
                flex-col
                bg-transparent
                dark:bg-transparent
                p-4"
                >
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                )
            }
    </header>
    );
  }