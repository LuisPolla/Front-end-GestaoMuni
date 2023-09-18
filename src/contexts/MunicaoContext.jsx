import { createContext, useState } from 'react';
import { api } from '../services/api';

export const MunicaoContext = createContext(null);

export function MunicaoContextProvider({ children }) {
    const [municoes, setMunicoes] = useState(null);
    const [loading, setLoading] = useState(false);

    async function createMunicao({
        modelo,
        calibragem,
        dataFabriacao,
        estadoConservacao,
        quatidadeEmEstoque,
        tipoPonta,
        material,
        peso,
        empresaFabricante
    }) {
        try {
            setLoading(true);
            const accessToken = localStorage.getItem('accessToken');
            await api.post('/municao', {
                modelo,
                calibragem,
                dataFabriacao: dataFabriacao.split('-').reverse().join('/'),
                estadoConservacao,
                quatidadeEmEstoque,
                tipoPonta,
                material,
                peso,
                empresaFabricante
            }, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`
                }
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function getAllMunicao() {
        try {
            setLoading(true);
            const accessToken = localStorage.getItem('accessToken');
            const result = await api.get('/municao', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`
                }
            });
            console.log(result.data);
            setMunicoes(result.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function updateMunicao(id, data) {
        try {
            setLoading(true);
            const accessToken = localStorage.getItem('accessToken');
            await api.put(`/municao/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`
                }
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteMunicao(municaoId) {
        try {
          setLoading(true);
          const accessToken = localStorage.getItem('accessToken');
          await api.delete(`/municao/${municaoId}`, {
            headers: {
              Authorization: `Bearer ${JSON.parse(accessToken)}`
            }
          });
          await getAllMunicao();
        } catch (error) {
          console.error("Erro ao excluir a munição:", error);
        } finally {
          setLoading(false);
        }
      }

    return (
        <MunicaoContext.Provider
            value={{
                municoes,
                loading,
                setMunicoes,
                getAllMunicao,
                createMunicao,
                updateMunicao,
                deleteMunicao,
            }}
        >
            {children}
        </MunicaoContext.Provider>
    )
}
