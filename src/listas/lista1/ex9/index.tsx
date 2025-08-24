import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Nove() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmsenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();
  const [dados, setDados] = useState<{
    email: string;
    senha: string;
    cargo: any;
  } | null>(null);

  const handleLogin = () => {
    setDados({ email, senha, cargo });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CADASTRO</Text>
      <View style={styles.moldura}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          maxLength={8}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirmsenha}
          onChangeText={setConfirmSenha}
          secureTextEntry={true}
          maxLength={8}
        />
        <Picker
          selectedValue={cargo}
          onValueChange={(itemValue) => setCargo(itemValue)}
          style={styles.picker}
          placeholder="Escolha seu cargo"
        >
          <Picker.Item label="Administrador" value="admin" />
          <Picker.Item label="Gestor" value="manager" />
          <Picker.Item label="Usuário" value="user" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      {dados && (
        <View style={styles.resultado}>
          <Text>Email: {dados.email}</Text>
          <Text>Senha: {dados.senha}</Text>
          <Text>Cargo: {dados.cargo}</Text>
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
  moldura: {
    alignSelf: "center",
    maxWidth: 270,
    width: "100%",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
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
  picker: {
    backgroundColor: "#fff",
  },
});
