import React, { createContext, useState } from "react";
import { Cep } from "../types";
import { getCep } from "../services/api";

interface CepContextData {
  cepData: Cep | null;
  fetchCep: (cep: string) => Promise<void>;
}

export const CepContext = createContext<CepContextData>({} as CepContextData);

export const CepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cepData, setCepData] = useState<Cep | null>(null);

  async function fetchCep(cep: string) {
    try {
      const data = await getCep(cep);
      if (data.erro) {
        setCepData(null);
        alert("CEP não encontrado!");
        return;
      }
      setCepData(data);
    } catch (error) {
      alert("Erro ao consultar CEP");
    }
  }

  return (
    <CepContext.Provider value={{ cepData, fetchCep }}>
      {children}
    </CepContext.Provider>
  );
};
