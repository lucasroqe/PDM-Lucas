import logo from "@/../assets/fatec-logo.png";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/../types";

type OnzeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Onze">;
};

export default function Onze({ navigation }: OnzeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.moldura}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>HOME</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Um")}>
            <Text style={styles.buttonText}>Um</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dois")}>
            <Text style={styles.buttonText}>Dois</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tres")}>
            <Text style={styles.buttonText}>Tres</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quatro")}>
            <Text style={styles.buttonText}>Quatro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cinco")}>
            <Text style={styles.buttonText}>Cinco</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Seis")}>
            <Text style={styles.buttonText}>Seis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sete")}>
            <Text style={styles.buttonText}>Sete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Oito")}>
            <Text style={styles.buttonText}>Oito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Nove")}>
            <Text style={styles.buttonText}>Nove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dez")}>
            <Text style={styles.buttonText}>Dez</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  moldura: {
    alignSelf: "center",
    maxWidth: 300,
    width: "100%",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  button: {
    backgroundColor: "#f4a300",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "48%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
