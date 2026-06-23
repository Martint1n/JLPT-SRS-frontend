  import { useState } from "react";
  import axios from "axios";
  import { useAuth } from "../context/AuthContext";
  import { useNavigate } from "react-router-dom";

  export default function Etudier() {

    // peut etre ajouter préférence langue a apprendre au User db pour aafficher les decks relevant 
    // avoir une interface genre deck hiragana 

    // axios -> fetch la préférence langue du user -> affiche decks disponibles
    type Deck = {
      id: string;
      title: string;
      language: 'ja' | 'en' | 'es' | 'zh'; // codes ISO 639-1
    };

    const decks: Deck[] = [
      { id: 'hiraganas', title: 'Hiragana', language: 'ja'},
      { id: 'katakanas', title: 'Katakana', language: 'ja'},
    ];

    const [chosenDeck, setChosenDeck] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user } = useAuth();
    // if (chosenDeck) -> fetch dans la db avec token récuperer progress about hriagana 

const handleDeckClick = async (id: string) => {
  if (!token) return;
  try {
    navigate(`/etudier/${id}`);
  } catch {
    console.log('Error fetching deck data');
  }
};

    return (
      <div className="h-screen w-screen flex bg-[#030b18]">
        <div className="h-4/5 w-full max-w-100 m-auto flex flex-col justify-around border border-amber-50">
          { !chosenDeck ?
            (
            decks.map(({id, title}) => (
            <button 
              className= "bg-[#030b18] flex flex-col border border-amber-600"
              onClick={() => handleDeckClick(id)}
              key={id}
            >
              { title }
            </button>
            ))):
            (
              <div>
              </div>
            )
    }
          <div></div>
        </div>
      </div>
    );
  }
