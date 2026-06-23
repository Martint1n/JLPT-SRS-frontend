import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [combinationError, setCombinationError] = useState('');
  const { login } = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCombinationError('');
    try {
      const response = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_URL_BACKEND}/auth/signin`,
        data: {
          email,
          password,
        },
      });
      login(response.data.token);
      localStorage.setItem('token' , response.data.token);//storer le token dans localStorage
      navigate('/');
    } catch{
      setCombinationError('Mauvaise combinaison email / mot de passe')
      console.log({message: 'axios signup error'})
    };
  };

  return (
    <div className="h-screen w-screen flex bg-[#030b18]">
      <div className= "h-4/5 w-full max-w-100 m-auto flex flex-col justify-around">
        <div className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white  leading-tight mx-auto">
          SIGN IN
        </div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-between h-3/5'>
          <input
            className="h-12 border border-accent"
            required
            type="email"
            placeholder="exemple@mail.co"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="h-12 border border-accent"
            required
            type="password"
            placeholder="password"
            maxLength={20}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          { combinationError && <p className='text-red-500 text-sm'>{combinationError}</p> }
          <button type='submit' className="cursor-pointer">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
