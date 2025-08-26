import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useCep } from "../../../../../hooks/useCep";

export default function Historico() {
  const { historico } = useCep();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      {historico.length === 0 ? (
        <Text style={styles.empty}>Nenhum CEP consultado ainda.</Text>
      ) : (
        historico.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>CEP: {item.cep}</Text>
            <Text>Logradouro: {item.logradouro}</Text>
            <Text>Bairro: {item.bairro}</Text>
            <Text>
              Cidade: {item.localidade} - {item.uf}
            </Text>
            <Text>DDD: {item.ddd}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
});
