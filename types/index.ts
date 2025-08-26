import { ParamListBase } from "@react-navigation/native";

export interface RootStackParamList extends ParamListBase {
  Um: undefined;
  Dois: undefined;
  Tres: undefined;
  Quatro: undefined;
  Cinco: undefined;
  Seis: undefined;
  Sete: undefined;
  Oito: undefined;
  Nove: undefined;
  Dez: undefined;
  Onze: undefined;
}

export interface Cep{
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
