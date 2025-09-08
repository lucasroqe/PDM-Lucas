import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Linking } from "react-native";
import React from "react";

export default function Tres() {
  function linkExternal() {
    Linking.openURL("https://www.instagram.com/fatec_jacarei");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={linkExternal} style={styles.button}>
        <Text>Aperte aqui para ir para o IG da Fatec</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#db23aaff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "48%",
  },
});
