import { useContext } from "react";
import { CepContext } from "../contexts/CepContexts";

export function useCep() {
  return useContext(CepContext);
}
