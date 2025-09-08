import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Linking } from "react-native";
import React from "react";

export default function Um() {
  function linkExternal() {
    Linking.openURL("https://www.youtube.com.br");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={linkExternal} style={styles.button}>
        <Text>Aperte aqui para ir para o Google</Text>
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
    backgroundColor: "#f4a300",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "48%",
  },
});
