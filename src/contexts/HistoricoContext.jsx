import { createContext, useState } from 'react';
import { api } from '../services/api';

export const HistoricoContext = createContext(null);

export function HistoricoContextProvider({ children }) {
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getAllHistorico() {
        try {
            setLoading(true);
            const accessToken = localStorage.getItem('accessToken');
            const result = await api.get('/historico', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`
                }
            });
            setHistorico(result.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <HistoricoContext.Provider
            value={{
                historicoData: historico,
                loading,
                getAllHistorico,
            }}
        >
            {children}
        </HistoricoContext.Provider>
    )
}
