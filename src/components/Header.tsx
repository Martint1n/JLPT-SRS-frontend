import { Menu, X } from "lucide-react";
import { useState } from "react";
import globe from "./assets/globe-asia-svgrepo.svg";
import { FR, JP, US, ES, CN, KR, DE } from "country-flag-icons/react/3x2";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
    <header className="relative w-max h-20 dark:bg-black dark:text-white border border-amber-600">
            <div className="overflow-hidden w-full flex animate-[slide_10s_linear_infinite] border border-red-500">
                <div className="flex border w-full border-amber-400">
                    <FR width={72} height={72}/>
                    <JP width={72} height={72}/>
                    <US width={72} height={72}/>
                    <ES width={72} height={72}/>
                    <CN width={72} height={72}/>
                    <KR width={72} height={72}/>
                    <DE width={72} height={72}/>
                </div>
                <div className="flex w-full">
                    <FR width={72} height={72}/>
                    <JP width={72} height={72}/>
                    <US width={72} height={72}/>
                    <ES width={72} height={72}/>
                    <CN width={72} height={72}/>
                    <KR width={72} height={72}/>
                    <DE width={72} height={72}/>
                </div>
            </div>
    </header>
    );
  }