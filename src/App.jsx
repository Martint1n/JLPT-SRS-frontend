import globe from "./assets/globe-asia-svgrepo.svg";
import { FR, JP, US, ES, CN, KR, DE } from "country-flag-icons/react/3x2";

export default function App() {
document.documentElement.className = "white"
  return (
    <div className="font-sans dark:bg-black dark:text-white w-screen h-screen">
      <div className="w-full h-full">
        <img
          src={globe}
          alt="globe"
          className="animate-[spin_80s_linear_infinite] rounded-full"
        />
        <div className="w-full overflow-hidden">
        <div className="flex animate-[slide_15s_linear_infinite]">
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          <FR width={24} height={24}/>
          <JP width={24} height={24}/>
          <US width={24} height={24}/>
          <ES width={24} height={24}/>
          <CN width={24} height={24}/>
          <KR width={24} height={24}/>
          <DE width={24} height={24}/>
          
        </div>
        </div>
      </div>
    </div>
  );
}