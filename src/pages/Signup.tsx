import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    try {
      if (password !== password2) {
        return setPasswordError('mot de passe différents');
      }
      const response = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_URL_BACKEND}/auth/signup`,
        data: {
          email,
          name,
          password,
        },
      });
    navigate('/signin');
    } catch{
      setEmailError('email deja existant')
      console.log({message: 'axios signup error'})
    };
  }


  return (
    <div className='h-screen w-screen flex bg-[#030b18]'>
      <div className= 'h-4/5 w-full max-w-100 m-auto flex flex-col justify-around'>
        <div className='font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mx-auto'>
          SIGN UP
        </div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-between h-3/5'>
          <div className=''>
            <input
              className='h-12 border border-accent w-full'
              required
              type='email'
              placeholder='exemple@mail.co'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
          </div>
          <input
            className='h-12 border border-accent'
            required
            type='text'
            placeholder='pseudo'
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='h-12 border border-accent'
            required
            type='password'
            placeholder='mot de passe'
            maxLength={20}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input
              className='h-12 border border-accent  w-full'
              required
              type='password'
              placeholder='confirmer le mot de passe'
              maxLength={20}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
          </div>
          <button type='submit' className="cursor-pointer">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}
