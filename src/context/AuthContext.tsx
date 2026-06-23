import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

    type Progress = {
        id: number;
        userId: number;
        hiraganaId: number;
        reviewDate: Date;
        repetitions: number;
    }

    type User = {
        id: number;
        email: string;
        name: string;
        progress: Progress[];
        dailyNewCards: number;
    };
    
    type AuthContextType = {
        user: User | null;
        isLoading: boolean;
        isAuthenticated: boolean;
        login: (token: string) => void;
        logout: () => void;
        refreshUser: () => void;
    };

export const AuthContext = createContext < AuthContextType | undefined > ( undefined );


export default function AuthProvider({ children }: { children: ReactNode }) {



    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isAuthenticated = !!user;
    const login = (token: string) => {
        localStorage.setItem('token', token);
        checkToken();
    };
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null)
    };

    const refreshUser = async () => {
        await checkToken();
    };

    const checkToken = async () => {
    const token : string | null = localStorage.getItem('token')
    if (!token) {
        return ;
    }
    const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_URL_BACKEND}/auth/me`,
        headers: {Authorization: `Bearer ${token}`}
    });
    setUser(response.data.user);
    setIsLoading(false);
    }


    useEffect(() => {
        checkToken();
    }, []);


    return(
        <AuthContext.Provider value={{user, isAuthenticated, isLoading, login, logout, refreshUser}}> {children} </AuthContext.Provider>
    )
}

// Check pour voir ce que fait cette function useAuth()
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
    return context;
}