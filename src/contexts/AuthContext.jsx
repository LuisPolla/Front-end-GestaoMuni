
import { createContext, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function loginUser({ email, senha }) {
        try {
            setLoading(true)
            const result = await api.post('/login', {
                email,
                senha,
            });
            localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
            setUser(result.data.user);
        } catch (error) {
            console.error(error);
            setError(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    async function registerUser({ nome, cpf, email, senha, dataNascimento, registroMilitar }) {
        try {
            setLoading(true);
            const result = await api.post('/register', {
                nome,
                cpf,
                email,
                senha,
                dataNascimento: dataNascimento.split('-').reverse().join('/'),
                registroMilitar,
            });
            localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
            setUser(result.data.user);
        } catch (error) {
            console.error(error);
            setError(error.response.data.error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                loginUser,
                registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
