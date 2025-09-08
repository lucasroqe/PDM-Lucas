import { StyleSheet, View, SafeAreaView, TouchableOpacity, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

export default function Seis() {
  const [image, setImage] = useState<string | null>(null);

  // Selecionar imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos de acesso à câmera para tirar fotos.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={tirarFoto}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topButtons: {
    position: "absolute",
    top: 0,
    left: 10,
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },
  button: {
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});
