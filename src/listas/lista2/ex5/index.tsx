import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { useCep } from "../../../../hooks/useCep";

export default function Sete() {
  const [inputCep, setInputCep] = useState("");
  const { cepData, fetchCep } = useCep();

  async function handleSearch() {
    if (inputCep.trim().length < 8) {
      alert("Digite um CEP válido com 8 dígitos!");
      return;
    }
    await fetchCep(inputCep);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Consulta CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={inputCep}
        onChangeText={setInputCep}
        maxLength={8}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {cepData && (
        <View style={styles.resultado}>
          <Text>CEP: {cepData.cep}</Text>
          <Text>Logradouro: {cepData.logradouro}</Text>
          <Text>Bairro: {cepData.bairro}</Text>
          <Text>
            Cidade: {cepData.localidade} - {cepData.uf}
          </Text>
          <Text>DDD: {cepData.ddd}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#3d3c3cff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#c9be2dff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
  },
});
