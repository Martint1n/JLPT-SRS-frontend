import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profil() {

  const {user, isLoading, refreshUser, logout} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const token = localStorage.getItem('token');
  const [deleteUser, setDeleteUser] = useState(false)
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user])

  console.log('user : ', user)
  //au reload de la page 

  const handleSave = async () => {
    //check si password sont egaux et null ou string
    if (password !== password2 ) {
      return setPasswordError('Les mots de passe ne correspondent pas');
    } 
    try{
      await axios ({
        method: 'put',
        url:`${import.meta.env.VITE_URL_BACKEND}/user/updateuser`, 
        headers: { Authorization: `Bearer ${token}` },
        data: {
          email, 
          name,
          ...(password ? { password } : {}) 
        }
      });
      refreshUser();
      setSuccessMessage('Profil modifié');
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch(error){
      console.log('Frontend fetch error', error)
    }
  };

  const handleDelete = async () => {
    if (!deleteUser) {
      return setDeleteUser(!deleteUser);
    } else {
      try {
        await axios ({
          method: 'delete',
          url:`${import.meta.env.VITE_URL_BACKEND}/user/deleteuser`, 
          headers: { Authorization: `Bearer ${token}` },
        });
        logout();
        navigate('/')
      } catch(error){
        console.log('Frontend fetch error', error)
      }
    }
  }

  if (isLoading) return <div>Chargement...</div>;
  if (!user) return <div>Non connecté</div>;
  return (
    <div className= "relative min-h-screen bg-[#030b18] overflow-hidden flex flex-col">
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Nouveau mot de passe" />
      <input type="password" onChange={(e) => setPassword2(e.target.value)} placeholder="Confirmer le mot de passe" />
      <div>{passwordError}</div>
      <button onClick={() => handleSave()}>Sauvegarder</button>
      { deleteUser ? (<button onClick={() => handleDelete()}>Cliquer pour supprimer définitivement</button>) : (<button onClick={() => handleDelete()}>Supprimer le compte</button> )}
      { successMessage ? (<div>{successMessage}</div>) : (<></>) }
    </div>
  );
}