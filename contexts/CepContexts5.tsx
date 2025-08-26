import React, { createContext, useState } from "react";
import { Cep } from "../types";
import { getCep } from "../services/api";

interface CepContextData {
  cepData: Cep | null;
  fetchCep: (cep: string) => Promise<void>;
  historico: Cep[];
}

export const CepContext5 = createContext<CepContextData>({} as CepContextData);

export const CepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cepData, setCepData] = useState<Cep | null>(null);
  const [historico, setHistorico] = useState<Cep[]>([]);

  async function fetchCep(cep: string) {
    try {
      const data = await getCep(cep);

      if (data.erro) {
        setCepData(null);
        alert("CEP inválido");
        return;
      }
      setCepData(data);

      setHistorico((prev) => {
        const exists = prev.find((item) => item.cep === data.cep);
        if (!exists) {
          return [...prev, data];
        }
        return prev;
      });
    } catch (error) {
      alert("Erro ao consultar CEP");
    }
  }

  return (
    <CepContext5.Provider value={{ cepData, fetchCep, historico }}>
      {children}
    </CepContext5.Provider>
  );
};
