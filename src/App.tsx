import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import Etudier from './pages/Etudier'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/etudier" element={<Etudier />} />
        <Route path="/profil" element={<Profil />} />
        {/* futures routes signin, signup... */}
      </Routes>
    </BrowserRouter>
  );
}