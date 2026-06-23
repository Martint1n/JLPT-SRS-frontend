import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function hiraganas() {
  const { deckId } = useParams(); // lit les params de l'url 
  // const { review, newReview } = location.state;
  const token = localStorage.getItem('token')

  const [translation, setTranslation] = useState(false)
  const [cards, setCards] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = cards[currentIndex];
  
  useEffect(() => {
    const fetchReview = async () => {
      try {
      const [review, newReview] = await Promise.all([
        axios.get(`${import.meta.env.VITE_URL_BACKEND}/progress/get${deckId}forreview`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${import.meta.env.VITE_URL_BACKEND}/progress/getnew${deckId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ])
      setCards([...review.data.review.map((item) => item.hiragana), ...newReview.data.unknownHiraganas]);
      }catch {
        console.log('Error fetching deck data');
      };
    };
    fetchReview();
  }, [])
  


  const sendUserAnswer = async (correct: boolean) => {
    try{
    const response = await axios({
      method: 'post',
      url: `${import.meta.env.VITE_URL_BACKEND}/progress/answercard`,
      headers: {Authorization:  `Bearer ${token}`},
      data: {
        hiraganaId: currentCard.id,
        correct
      }
    })
    console.log('Progress row created or updated');
    setTranslation(!translation);
    if (correct) {
      setCurrentIndex(currentIndex + 1);
    }} catch{
    console.log('Error server')
    }
  };
  
//probleme, au reload de la page apres mauvais ou bon, l'hiragana reste dans le tableau newReview

  if (!currentCard) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
        <div>{currentCard.hiragana}</div>
        { translation ? (
          <>
            <div>{currentCard.romaji}</div>
            <button
              className=''
              onClick={() => {sendUserAnswer(true)}}
            >
              Bon
            </button>
            <button
              className=''
              onClick={() => {sendUserAnswer(false)}}
            >
              Mauvais
            </button>
          </>
        ) : (
          <button 
            onClick={() => setTranslation(!translation)}
          >
            voir la traduction
          </button>
        )
      }
    </div>
  )
}